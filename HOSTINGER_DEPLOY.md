# Hostinger Deployment Guide

This guide will help you deploy your Courseinfinity project to Hostinger hosting.

## 📋 Prerequisites

1. Hostinger hosting account (shared hosting or VPS)
2. FTP/SFTP credentials from Hostinger control panel
3. FTP client (FileZilla, WinSCP, or Hostinger's File Manager)

## 📁 Files to Upload

### ✅ Files/Folders to INCLUDE:
- `index.html` (main entry point)
- `index.php` (PHP fallback - recommended)
- `admin.html`
- `register.html`
- `login.html` (student login)
- `module1.html` through `module7.html`
- `accessibility.html`
- `aml-policy.html`
- `complaints.html`
- `cookie-policy.html`
- `disclaimer.html`
- `modern-slavery.html`
- `privacy.html`
- `terms.html`
- `assets/` folder (with all images/logos)
- `js/` folder (with all JavaScript files)
- `json/` folder (with all unit files and site.json)
- `.htaccess` file (for security and routing)

### ❌ Files/Folders to EXCLUDE:
- `node_modules/` (not needed for production)
- `coverage/` (test coverage reports)
- `js/__tests__/` (test files)
- `.git/` (version control)
- `package.json` and `package-lock.json` (only needed for development)
- `server.js` (development server)
- `start.bat` (Windows batch file)
- `create_modules.js` (development script)
- `generate_modules.html` (development tool)
- `CHANGELOG.md`, `DEVELOPMENT.md`, `README.md` (documentation)
- `vercel.json`, `netlify.toml` (platform-specific configs)
- `pages/policies/` (if not being used, or upload only HTML files)

## 🚀 Deployment Methods

### Method 1: Using Hostinger File Manager (Easiest)

1. **Log in to Hostinger Control Panel**
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Navigate to File Manager**
   - Click on "File Manager" in the control panel
   - Go to `public_html` folder (or your domain's root folder)

3. **Upload Files**
   - Click "Upload" button
   - Select all files and folders from the list above
   - Wait for upload to complete

4. **Set Permissions** (if needed)
   - Right-click on `.htaccess` file
   - Set permissions to `644`

### Method 2: Using FTP Client (FileZilla)

1. **Get FTP Credentials**
   - In Hostinger control panel, go to "FTP Accounts"
   - Note down: FTP Host, Username, Password, and Port (usually 21)

2. **Connect via FileZilla**
   - Host: `ftp.yourdomain.com` or IP provided by Hostinger
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)

3. **Upload Files**
   - Navigate to `public_html` folder on remote server
   - Drag and drop all files from local to remote
   - Ensure `.htaccess` is uploaded

### Method 3: Using WinSCP (Windows)

1. **Download WinSCP** from https://winscp.net

2. **Create New Session**
   - File Protocol: SFTP or FTP
   - Host name: Your domain or IP
   - Port: 21 (FTP) or 22 (SFTP)
   - Username: Your FTP username
   - Password: Your FTP password

3. **Connect and Upload**
   - Connect to server
   - Navigate to `public_html`
   - Upload all files

## 🔧 Post-Deployment Steps

### 1. Verify File Structure
Your `public_html` folder should look like this:
```
public_html/
├── index.html
├── index.php
├── register.html
├── login.html
├── admin.html
├── module1.html
├── module2.html
├── ... (other HTML files)
├── .htaccess
├── assets/
│   ├── logo.svg
│   └── monty.jpg
├── js/
│   ├── footer.js
│   ├── layout.js
│   ├── main.js
│   ├── modules.js
│   └── seo.js
└── json/
    ├── site.json
    └── units/
        └── ... (all unit folders)
```

### 2. Test Your Site
1. Visit your domain: `https://yourdomain.com`
2. Test registration: `https://yourdomain.com/register.html`
3. Test student login: `https://yourdomain.com/login.html`
   - After login, verify logout button appears in navigation
   - Test logout functionality
4. Test admin panel: `https://yourdomain.com/admin.html`
   - **Admin Credentials:** Email: `admin@lm.com`, Password: `admin123`
   - Test admin logout functionality
5. Test module access: `https://yourdomain.com/module1.html`
6. Verify navigation shows correct login/logout buttons based on user status

### 3. Configure SSL (If Not Already Active)
- In Hostinger control panel, go to "SSL"
- Install free SSL certificate (Let's Encrypt)
- Force HTTPS by uncommenting lines in `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 4. Set Up Domain (If Using Custom Domain)
- In Hostinger control panel, go to "Domains"
- Add your custom domain
- Point DNS to Hostinger's nameservers (if needed)

## ⚠️ Important Notes

### Admin Credentials
- **Default Admin Login:** Email: `admin@lm.com`, Password: `admin123`
- ⚠️ **Change these credentials in production!** Edit `js/main.js` and update the `initializeAdmin()` function

### Logout Functionality
- **Student Logout:** Available in navigation bar when student is logged in
- **Admin Logout:** Available in admin panel header (red logout button)
- Both logout functions clear session storage and redirect to homepage

### localStorage Limitation
- This application uses browser localStorage for data storage
- Student registrations are stored in the user's browser
- Admin panel will only show students registered in the same browser
- **For production**, consider migrating to a backend database

### Security Considerations
- The `.htaccess` file includes security headers
- Passwords are stored in plain text in localStorage (not secure for production)
- Consider implementing a backend API for authentication

### Performance
- Enable caching in Hostinger control panel
- Images are optimized for web
- JavaScript files are minified (if applicable)

## 🐛 Troubleshooting

### Issue: 404 Errors on Pages
**Solution**: Check that `.htaccess` file is uploaded correctly with permissions 644

### Issue: CSS/JS Not Loading
**Solution**: 
- Verify file paths are correct
- Check browser console for errors
- Ensure all files are uploaded to `public_html`

### Issue: localStorage Not Working
**Solution**: 
- Ensure you're using HTTPS (localStorage requires secure context on some browsers)
- Check browser console for errors

### Issue: Admin Panel Not Showing Students
**Solution**: 
- This is expected - localStorage is browser-specific
- Register a student in the same browser where you're viewing admin panel
- See the warning message in admin panel for details

## 📞 Support

If you encounter issues:
1. Check Hostinger's knowledge base: https://support.hostinger.com
2. Contact Hostinger support via live chat
3. Check browser console (F12) for JavaScript errors

## 🔄 Updating Your Site

To update your site:
1. Make changes locally
2. Test changes locally
3. Upload only the changed files to Hostinger
4. Clear browser cache if needed

---

**Last Updated**: January 2025

