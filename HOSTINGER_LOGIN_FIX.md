# 🔧 Hostinger Admin Login Fix - Quick Guide

## ✅ What I Fixed

1. **Improved session handling** - Better cookie configuration for Hostinger
2. **Better error messages** - Now shows specific errors to help diagnose issues
3. **Enhanced admin verification** - More robust checks when accessing admin panel
4. **Better error handling** - Handles JSON parsing errors and connection issues

## 🚀 Quick Setup Steps

### Step 1: Upload Updated Files
Make sure you upload these updated files to your Hostinger server:
- `api/config.php`
- `api/login.php`
- `login.html`
- `admin.html`
- `api/check_setup.php` (new diagnostic tool)

### Step 2: Configure Database (CRITICAL)

**This is the most common issue!** 

1. **Open** `api/config.php` on your Hostinger server
2. **Replace** these placeholder values:

```php
const DB_HOST = 'localhost';  // Usually 'localhost' on Hostinger
const DB_NAME = 'YOUR_ACTUAL_DATABASE_NAME';  // Get from Hostinger
const DB_USER = 'YOUR_ACTUAL_DATABASE_USER';  // Get from Hostinger  
const DB_PASS = 'YOUR_ACTUAL_DATABASE_PASSWORD';  // Get from Hostinger
```

3. **Get credentials from Hostinger:**
   - Log in to Hostinger hPanel
   - Go to **Databases** → **MySQL Databases**
   - Find your database name, username, and password
   - Copy them into `api/config.php`

### Step 3: Check Your Setup

1. **Visit** in your browser:
   ```
   https://yourdomain.com/api/check_setup.php
   ```
   
2. **This will show you:**
   - ✅ If database credentials are configured
   - ✅ If database connection works
   - ✅ If tables exist
   - ✅ If admin user exists
   - ❌ Any errors that need fixing

### Step 4: Create Admin User (If Needed)

If the setup check shows no admin user exists:

**Option A - Via phpMyAdmin:**
1. Go to Hostinger → phpMyAdmin
2. Select your database
3. Run this SQL:
```sql
INSERT INTO users (name, email, password_hash, role, approved)
VALUES ('Admin', 'admin@lm.com', '$2y$10$wG2yOq2u0o1b3A3yGg7sveQnJQKx4qgOiiE5jv8y0l1s5T0WZ3r2y', 'admin', 1);
```

**Option B - Via Script:**
1. Visit: `https://yourdomain.com/api/create_admin.php?password=admin123`
2. This creates/updates the admin user
3. **Delete this file after use for security!**

### Step 5: Import Database Tables (If Needed)

If tables don't exist:

1. Go to Hostinger → phpMyAdmin
2. Select your database
3. Click **Import** tab
4. Upload `db/schema.sql` file
5. Click **Go**

### Step 6: Try Logging In

**Default Credentials:**
- Email: `admin@lm.com`
- Password: `admin123`

1. Go to: `https://yourdomain.com/login.html`
2. Enter credentials
3. Check the error message if it fails - it will now tell you exactly what's wrong

## 🔍 Troubleshooting

### Error: "Database connection failed"
- ✅ Check `api/config.php` has correct credentials
- ✅ Verify database exists in Hostinger
- ✅ Check database user has proper permissions

### Error: "Invalid email or password"
- ✅ Verify email: `admin@lm.com` (exact, case-sensitive)
- ✅ Verify password: `admin123`
- ✅ Check if admin user exists (use `api/check_setup.php`)

### Error: "Server returned non-JSON response"
- ✅ Check `api/config.php` is configured
- ✅ Check PHP is enabled on Hostinger
- ✅ Check file permissions (should be 644)

### Error: "Please log in first" (on admin panel)
- ✅ Session may have expired
- ✅ Try logging in again at `login.html`
- ✅ Check if cookies are enabled in browser

## 📋 Verification Checklist

Before trying to log in, verify:

- [ ] `api/config.php` has real database credentials (not placeholders)
- [ ] Database tables exist (users, units, video_settings)
- [ ] Admin user exists in database
- [ ] All files are uploaded to correct location
- [ ] PHP is enabled on Hostinger
- [ ] Site is using HTTPS (recommended)

## 🆘 Still Not Working?

1. **Check browser console** (F12 → Console tab)
   - Look for red error messages
   - Share these errors

2. **Check Network tab** (F12 → Network tab)
   - Try logging in
   - Click on `api/login.php` request
   - Check the Response - it will show the exact error

3. **Visit diagnostic tools:**
   - `https://yourdomain.com/api/check_setup.php` - Shows setup status
   - `https://yourdomain.com/api/test_db.php` - Detailed database test

4. **Check Hostinger error logs:**
   - Hostinger hPanel → Advanced → Error Log
   - Look for PHP errors

---

**Most Common Issue:** Database credentials not configured in `api/config.php`

**Quick Test:** Visit `api/check_setup.php` - it will tell you exactly what's wrong!

