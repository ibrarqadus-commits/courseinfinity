// Save progress locally (no backend)
function saveProgress(moduleId, unitId) {
    let progress = {};
    try {
        progress = JSON.parse(localStorage.getItem('progress')) || {};
    } catch (e) {
        progress = {};
    }
    
    if (!progress[moduleId]) {
        progress[moduleId] = {};
    }
    progress[moduleId][unitId] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
}

// Get progress for module
function getModuleProgress(moduleId) {
    try {
        const progress = JSON.parse(localStorage.getItem('progress')) || {};
        const moduleProgress = progress[moduleId] || {};
        return Object.keys(moduleProgress).length;
    } catch (e) {
        return 0;
    }
}

// ============================================
// STUDENT REGISTRATION & ACCESS CONTROL
// ============================================

// Initialize admin account (if not exists)
function initializeAdmin() {
    try {
        const admin = JSON.parse(localStorage.getItem('admin')) || null;
        if (!admin) {
            const defaultAdmin = {
                email: 'admin@lm.com',
                password: 'admin123',
                createdAt: new Date().toISOString()
            };
            localStorage.setItem('admin', JSON.stringify(defaultAdmin));
        }
    } catch (e) {
        console.error('Error initializing admin:', e);
    }
}

// Register a new student (pending approval)
function registerStudent(studentData) {
    try {
        const pending = getPendingRegistrations();
        
        // Check if student already exists (by phone or email)
        const exists = pending.some(s => s.phone === studentData.phone) ||
                      getApprovedStudents().some(s => s.phone === studentData.phone);
        
        if (exists) {
            return false; // Student already registered
        }

        const newStudent = {
            id: 'student_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            firstName: studentData.firstName,
            surname: studentData.surname,
            phone: studentData.phone,
            message: studentData.message || '',
            password: studentData.password, // Note: In production, hash this password
            registeredAt: new Date().toISOString(),
            status: 'pending'
        };

        pending.push(newStudent);
        localStorage.setItem('pendingRegistrations', JSON.stringify(pending));
        
        return true;
    } catch (e) {
        console.error('Error registering student:', e);
        return false;
    }
}

// Get all pending registrations
function getPendingRegistrations() {
    try {
        return JSON.parse(localStorage.getItem('pendingRegistrations')) || [];
    } catch (e) {
        return [];
    }
}

// Get pending student by ID
function getPendingStudentById(studentId) {
    const pending = getPendingRegistrations();
    return pending.find(s => s.id === studentId) || null;
}

// Get all approved students
function getApprovedStudents() {
    try {
        return JSON.parse(localStorage.getItem('approvedStudents')) || [];
    } catch (e) {
        return [];
    }
}

// Get approved student by ID
function getStudentById(studentId) {
    const approved = getApprovedStudents();
    return approved.find(s => s.id === studentId) || null;
}

// Approve student registration
function approveStudentRegistration(studentId, accessModules) {
    try {
        const pending = getPendingRegistrations();
        const studentIndex = pending.findIndex(s => s.id === studentId);
        
        if (studentIndex === -1) {
            return false;
        }

        const student = pending[studentIndex];
        const approvedStudent = {
            ...student,
            status: 'approved',
            approvedAt: new Date().toISOString(),
            accessModules: accessModules || []
        };

        // Remove from pending
        pending.splice(studentIndex, 1);
        localStorage.setItem('pendingRegistrations', JSON.stringify(pending));

        // Add to approved
        const approved = getApprovedStudents();
        approved.push(approvedStudent);
        localStorage.setItem('approvedStudents', JSON.stringify(approved));

        return true;
    } catch (e) {
        console.error('Error approving student:', e);
        return false;
    }
}

// Reject student registration
function rejectStudentRegistration(studentId) {
    try {
        const pending = getPendingRegistrations();
        const studentIndex = pending.findIndex(s => s.id === studentId);
        
        if (studentIndex === -1) {
            return false;
        }

        pending.splice(studentIndex, 1);
        localStorage.setItem('pendingRegistrations', JSON.stringify(pending));

        return true;
    } catch (e) {
        console.error('Error rejecting student:', e);
        return false;
    }
}

// Update student module access
function updateStudentAccess(studentId, accessModules) {
    try {
        const approved = getApprovedStudents();
        const studentIndex = approved.findIndex(s => s.id === studentId);
        
        if (studentIndex === -1) {
            return false;
        }

        approved[studentIndex].accessModules = accessModules || [];
        localStorage.setItem('approvedStudents', JSON.stringify(approved));

        return true;
    } catch (e) {
        console.error('Error updating student access:', e);
        return false;
    }
}

// Check if current user has access to a module
function hasModuleAccess(moduleId) {
    try {
        // Get current logged-in student ID from session
        const currentStudentId = sessionStorage.getItem('currentStudentId');
        if (!currentStudentId) {
            return false;
        }

        const student = getStudentById(currentStudentId);
        if (!student || student.status !== 'approved') {
            return false;
        }

        return student.accessModules && student.accessModules.includes(parseInt(moduleId));
    } catch (e) {
        console.error('Error checking module access:', e);
        return false;
    }
}

// Student login
function studentLogin(phone, password) {
    try {
        const approved = getApprovedStudents();
        const student = approved.find(s => s.phone === phone && s.password === password);
        
        if (student && student.status === 'approved') {
            sessionStorage.setItem('currentStudentId', student.id);
            sessionStorage.setItem('currentStudentName', `${student.firstName} ${student.surname}`);
            return true;
        }
        
        return false;
    } catch (e) {
        console.error('Error during student login:', e);
        return false;
    }
}

// Student logout
function studentLogout() {
    sessionStorage.removeItem('currentStudentId');
    sessionStorage.removeItem('currentStudentName');
}

// Get current logged-in student
function getCurrentStudent() {
    try {
        const studentId = sessionStorage.getItem('currentStudentId');
        if (!studentId) {
            return null;
        }
        return getStudentById(studentId);
    } catch (e) {
        return null;
    }
}

// Initialize admin on load
initializeAdmin();

// ============================================
// ADMIN AUTHENTICATION
// ============================================

// Admin login
function adminLogin(email, password) {
    try {
        const admin = JSON.parse(localStorage.getItem('admin')) || null;
        if (!admin) {
            return false;
        }
        
        if (admin.email === email && admin.password === password) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminEmail', email);
            return true;
        }
        
        return false;
    } catch (e) {
        console.error('Error during admin login:', e);
        return false;
    }
}

// Admin logout
function adminLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminEmail');
}

// Check if admin is logged in
function isAdminLoggedIn() {
    try {
        return sessionStorage.getItem('adminLoggedIn') === 'true';
    } catch (e) {
        return false;
    }
}

// Get current admin email
function getCurrentAdminEmail() {
    try {
        return sessionStorage.getItem('adminEmail') || '';
    } catch (e) {
        return '';
    }
}