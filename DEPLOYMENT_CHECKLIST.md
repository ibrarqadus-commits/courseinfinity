# ✅ Hostinger Deployment Checklist

Use this checklist to ensure everything is ready for deployment.

## Pre-Deployment

- [ ] All HTML files are in the root directory
- [ ] `assets/` folder contains all images and logos
- [ ] `js/` folder contains all JavaScript files (excluding `__tests__`)
- [ ] `.htaccess` file is created and ready
- [ ] Tested the site locally
- [ ] All links work correctly
- [ ] Registration and login work
- [ ] Admin panel accessible

## Files to Upload

### Essential Files (Must Upload)
- [ ] `index.html`
- [ ] `admin.html`
- [ ] `login.html`
- [ ] `register.html`
- [ ] `module1.html` through `module7.html`
- [ ] All policy HTML files (privacy.html, terms.html, etc.)
- [ ] `.htaccess`
- [ ] `assets/` folder (entire folder)
- [ ] `js/` folder (entire folder, excluding `__tests__`)

### Optional Files
- [ ] `pages/policies/*.html` (if using)
- [ ] Any additional images or resources

## Upload Process

- [ ] Connected to Hostinger via FTP/File Manager
- [ ] Navigated to `public_html` folder
- [ ] Uploaded all files
- [ ] Verified `.htaccess` permissions (644)
- [ ] Verified file structure matches expected layout

## Post-Deployment Testing

- [ ] Homepage loads: `https://yourdomain.com`
- [ ] Registration page works: `https://yourdomain.com/register.html`
- [ ] Login page works: `https://yourdomain.com/login.html`
- [ ] Module pages load: `https://yourdomain.com/module1.html`
- [ ] Admin panel accessible: `https://yourdomain.com/admin.html`
- [ ] CSS styles load correctly
- [ ] JavaScript functions work
- [ ] Images display correctly
- [ ] No 404 errors in browser console
- [ ] SSL certificate active (if applicable)

## Security

- [ ] SSL/HTTPS enabled
- [ ] `.htaccess` file uploaded
- [ ] Security headers active (check with browser dev tools)
- [ ] Sensitive files not accessible (check .htaccess protection)

## Performance

- [ ] Site loads quickly (< 3 seconds)
- [ ] Images optimized
- [ ] Caching enabled (via .htaccess or Hostinger settings)

## Final Steps

- [ ] Share the live URL
- [ ] Test registration as a new user
- [ ] Test admin login and approval process
- [ ] Document any issues for future reference

---

**Quick Test URLs:**
- Home: `https://yourdomain.com/`
- Login: `https://yourdomain.com/login.html`
- Register: `https://yourdomain.com/register.html`
- Admin: `https://yourdomain.com/admin.html`
- Module 1: `https://yourdomain.com/module1.html`

