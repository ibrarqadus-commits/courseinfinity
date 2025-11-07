# Hostinger Deployment Checklist

## ✅ Pre-Deployment Checklist

### Files to Upload to Hostinger

#### Required HTML Files:
- [ ] `index.html` (homepage)
- [ ] `register.html` (student registration)
- [ ] `login.html` (student login)
- [ ] `admin.html` (admin panel)
- [ ] `module1.html` through `module7.html` (all 7 modules)
- [ ] `privacy.html`
- [ ] `terms.html`
- [ ] `accessibility.html`
- [ ] `cookie-policy.html`
- [ ] `disclaimer.html`
- [ ] `complaints.html`
- [ ] `aml-policy.html`
- [ ] `modern-slavery.html`

#### Required Folders:
- [ ] `assets/` folder (with logo.svg and monty.jpg)
- [ ] `js/` folder (with all .js files: footer.js, layout.js, main.js, modules.js, seo.js)
- [ ] `json/` folder (with all unit files and site.json)

#### Configuration Files:
- [ ] `.htaccess` (Apache configuration)
- [ ] `index.php` (PHP fallback - optional but recommended)

### Files to EXCLUDE (Do NOT upload):
- [ ] `node_modules/` folder
- [ ] `package.json` and `package-lock.json`
- [ ] `server.js`
- [ ] `start.bat`
- [ ] `.git/` folder
- [ ] `coverage/` folder
- [ ] `CHANGELOG.md`, `DEVELOPMENT.md`, `README.md`
- [ ] `vercel.json`, `netlify.toml`
- [ ] `create_modules.js`, `generate_modules.html`

## 📤 Deployment Steps

### Step 1: Prepare Files Locally
1. Create a clean folder with only production files
2. Verify all HTML files are present
3. Check that all JS files are in `js/` folder
4. Ensure `assets/` folder contains logo.svg and monty.jpg
5. Verify `.htaccess` file is present

### Step 2: Access Hostinger Control Panel
1. Go to https://hpanel.hostinger.com
2. Log in with your Hostinger credentials
3. Select your domain/hosting account

### Step 3: Upload Files via File Manager (Recommended)
1. Click **"File Manager"** in control panel
2. Navigate to **`public_html`** folder (this is your website root)
3. Delete any default files (index.html, etc.) if present
4. Click **"Upload"** button
5. Select all files and folders from your local computer
6. Wait for upload to complete
7. Verify file structure matches expected layout

### Step 4: Set File Permissions
1. Right-click on `.htaccess` file
2. Select **"Change Permissions"**
3. Set to **644** (read/write for owner, read for others)
4. Click **"Change"**

### Step 5: Verify File Structure
Your `public_html` folder should look like:
```
public_html/
├── index.html
├── index.php (optional)
├── register.html
├── login.html
├── admin.html
├── module1.html
├── module2.html
├── ... (all other HTML files)
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
    ├── homepagetext..md
    └── units/
        └── ... (all unit folders)
```

## 🔐 Admin Credentials

**Default Admin Login:**
- **Email:** `admin@lm.com`
- **Password:** `admin123`

⚠️ **Important:** Change these credentials in production! Edit `js/main.js` and update the `initializeAdmin()` function.

## 🔒 Post-Deployment Configuration

### 1. Enable SSL Certificate
1. In Hostinger control panel, go to **"SSL"**
2. Click **"Install SSL"** or **"Activate Free SSL"**
3. Select **Let's Encrypt** (free option)
4. Wait 5-10 minutes for activation
5. After SSL is active, edit `.htaccess` file:
   - Uncomment these lines:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### 2. Test Your Website
Visit these URLs to test:
- [ ] `https://yourdomain.com` (homepage)
- [ ] `https://yourdomain.com/register.html` (registration form)
- [ ] `https://yourdomain.com/login.html` (student login)
- [ ] `https://yourdomain.com/admin.html` (admin panel - use credentials above)
- [ ] `https://yourdomain.com/module1.html` (test module access)
- [ ] Check browser console (F12) for any JavaScript errors

### 3. Test Registration & Login Flow
1. Visit registration page
2. Fill out and submit registration form
3. Verify success message appears
4. Go to admin panel and login (Email: `admin@lm.com`, Password: `admin123`)
5. Verify pending registration appears
6. Approve student with module access
7. Test student login with phone and password
8. Verify student can access assigned modules
9. Test module access control (dropdowns disabled for unauthorized modules)
10. Test student logout (logout button should appear in navigation when logged in)
11. Test admin logout (logout button in admin panel header)

## 🐛 Troubleshooting

### Issue: 404 Errors
**Solution:**
- Verify all HTML files are in `public_html` folder (not subfolders)
- Check `.htaccess` file is uploaded and permissions are 644
- Clear browser cache

### Issue: CSS/JavaScript Not Loading
**Solution:**
- Check browser console (F12) for 404 errors
- Verify `js/` and `assets/` folders are uploaded correctly
- Check file paths in HTML files (should be relative: `js/main.js`)
- Ensure folder names are lowercase (not `JS` or `Assets`)

### Issue: Module Access Not Working
**Solution:**
- Check browser console for JavaScript errors
- Verify `js/main.js` is uploaded correctly
- Test localStorage is working (check browser DevTools > Application > Local Storage)
- Ensure student is logged in (check sessionStorage)

### Issue: Admin Panel Not Showing Students
**Solution:**
- This is expected - localStorage is browser-specific
- Register a student in the same browser where you're viewing admin panel
- For production, consider implementing a backend database

### Issue: Images Not Displaying
**Solution:**
- Verify `assets/` folder is uploaded
- Check image file names match exactly (case-sensitive)
- Verify image file permissions (should be 644)

## 📝 Important Notes

### localStorage Limitation
- Student registrations are stored in browser localStorage
- Data is browser-specific (not shared across browsers/devices)
- For production use, consider migrating to a backend database

### Security Considerations
- Passwords are stored in plain text in localStorage
- Admin panel has no authentication (anyone can access)
- Consider adding admin login protection
- For production, implement proper backend authentication

### Performance Optimization
- Enable caching in Hostinger control panel
- Images are already optimized
- `.htaccess` includes compression and caching rules
- Consider using CDN for static assets

## 🔄 Updating Your Site

To update files:
1. Make changes locally
2. Test changes locally first
3. Upload only changed files via File Manager
4. Clear browser cache if needed
5. Test updated pages

## 📞 Support Resources

- Hostinger Support: https://support.hostinger.com
- Hostinger Live Chat: Available in control panel
- Check browser console (F12) for JavaScript errors
- Verify file permissions are correct

---

**Last Updated:** January 2025
**Server Type:** Apache (Hostinger)
**PHP Version:** Not required (static site, but index.php included as fallback)

