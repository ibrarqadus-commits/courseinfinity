# 🔐 Admin Login Credentials

## Default Admin Credentials

**Email:** `admin@lm.com`  
**Password:** `admin123`

## ⚠️ Important: Admin User Must Exist First!

Before you can log in, the admin user must exist in your database. If you're getting login errors, the admin user might not be created yet.

---

## Step 1: Make Sure Database is Configured

1. **Check `api/config.php`** has correct database credentials
2. **Test connection:** Visit `https://yourdomain.com/api/check_setup.php`

---

## Step 2: Create Admin User (If Not Exists)

### Option A: Via phpMyAdmin (Recommended)

1. **Log in to Hostinger → phpMyAdmin**
2. **Select your database** from the left sidebar
3. **Click on "SQL" tab**
4. **Paste and run this SQL:**

```sql
INSERT INTO users (name, email, password_hash, role, approved)
VALUES ('Admin', 'admin@lm.com', '$2y$10$wG2yOq2u0o1b3A3yGg7sveQnJQKx4qgOiiE5jv8y0l1s5T0WZ3r2y', 'admin', 1);
```

5. **Click "Go"** to execute

### Option B: Via Script

1. **Make sure database is configured** in `api/config.php`
2. **Visit:** `https://yourdomain.com/api/create_admin.php?password=admin123`
3. **You should see:** `{"ok":true,"message":"Admin user created successfully"}`
4. **⚠️ Delete `api/create_admin.php` after use for security!**

### Option C: Import Full Schema

If you haven't imported the database tables yet:

1. **Go to Hostinger → phpMyAdmin**
2. **Select your database**
3. **Click "Import" tab**
4. **Upload `db/schema.sql`** from your project
5. **Click "Go"**

This will create:
- All tables (users, units, video_settings)
- Admin user with email: `admin@lm.com` and password: `admin123`

---

## Step 3: Login

1. **Go to:** `https://yourdomain.com/login.html`
2. **Enter:**
   - Email: `admin@lm.com`
   - Password: `admin123`
3. **Click "Sign in"**

---

## Step 4: Change Password (Recommended)

After first login, change the admin password for security:

### Option 1: Via phpMyAdmin

1. Generate a new password hash in PHP:
   - You can use: `https://yourdomain.com/api/create_admin.php?password=YOUR_NEW_PASSWORD`
   - This will update the password

### Option 2: Via SQL

1. Go to phpMyAdmin
2. Run this SQL (replace `YOUR_NEW_PASSWORD` with your desired password):
```sql
UPDATE users 
SET password_hash = '$2y$10$wG2yOq2u0o1b3A3yGg7sveQnJQKx4qgOiiE5jv8y0l1s5T0WZ3r2y'
WHERE email = 'admin@lm.com' AND role = 'admin';
```

**Note:** The hash above is for password `admin123`. To generate a new hash for a different password, you'll need PHP's `password_hash()` function.

---

## Troubleshooting

### "Invalid email or password"
- ✅ Verify email: `admin@lm.com` (exact, case-sensitive)
- ✅ Verify password: `admin123` (exact)
- ✅ Check if admin user exists in database
- ✅ Check database connection is working

### "Database connection failed"
- ✅ Fix `api/config.php` with correct database credentials
- ✅ See `FIX_DATABASE_CONFIG.md` for help

### "Access denied" when accessing admin panel
- ✅ Make sure you logged in first
- ✅ Check browser console (F12) for errors
- ✅ Verify session is working (check cookies)

---

## Quick Checklist

Before logging in:
- [ ] Database is configured in `api/config.php`
- [ ] Database tables exist (users, units, video_settings)
- [ ] Admin user exists in database
- [ ] You have the correct email: `admin@lm.com`
- [ ] You have the correct password: `admin123`

---

## Security Notes

- ⚠️ **Change the default password** after first login
- ⚠️ **Delete `api/create_admin.php`** after creating admin user
- ⚠️ **Delete `api/test_db.php`** after testing
- ⚠️ **Use HTTPS** for secure login
- ⚠️ **Keep database credentials secure** - never share `api/config.php`

---

**Default Login:**
- Email: `admin@lm.com`
- Password: `admin123`

