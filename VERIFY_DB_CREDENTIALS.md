# 🔐 Fix "Access Denied" Database Error

You're seeing: **"Access denied for user 'u123456789_admin'@'localhost'"**

This means the **username or password** in `api/config.php` is incorrect.

## ✅ Step-by-Step Fix

### Step 1: Verify Database Credentials in Hostinger

1. **Log in to Hostinger hPanel**
   - Go to: https://hpanel.hostinger.com

2. **Go to Databases → MySQL Databases**
   - Click on **"Databases"** in left menu
   - Click on **"MySQL Databases"**

3. **Find Your Database**
   - You should see a list of databases
   - Look for your database (it might be named something like `u123456789_courseinfinity`)

4. **Check the EXACT values:**
   - **Database Name:** Copy this exactly (case-sensitive)
   - **Database Username:** Copy this exactly (case-sensitive) 
   - **Database Password:** Click the eye icon to reveal it, copy exactly
   - **Database Host:** Usually `localhost` (but verify)

### Step 2: Double-Check Your config.php

1. **Open `api/config.php` on your server**
2. **Verify these match EXACTLY** (no extra spaces, correct case):

```php
const DB_HOST = 'localhost';  // Usually this, but verify in Hostinger
const DB_NAME = 'u123456789_courseinfinity';  // Must match exactly
const DB_USER = 'u123456789_admin';  // Must match exactly  
const DB_PASS = 'YourExactPassword';  // Must match exactly - no spaces!
```

### Step 3: Common Issues

#### Issue 1: Password Has Special Characters
If your password has special characters like `@`, `#`, `$`, etc., make sure they're:
- **Not URL-encoded** in the config file
- **Properly escaped** if needed
- **Wrapped in single quotes** like `'your@password#123'`

#### Issue 2: Extra Spaces
Make sure there are **no spaces** before or after the values:
```php
// ❌ WRONG - has spaces
const DB_PASS = ' password123 ';

// ✅ CORRECT - no spaces
const DB_PASS = 'password123';
```

#### Issue 3: Wrong Username Format
Hostinger usernames usually look like:
- `u123456789_admin`
- `u123456789_courseinfinity`

Make sure you're using the **Database Username**, not the database name!

#### Issue 4: Database User Doesn't Exist
If you created a new database, you might need to:
1. Create a database user in Hostinger
2. Assign that user to the database
3. Set the password

### Step 4: Reset Database Password (If Needed)

If you're not sure about the password:

1. **In Hostinger hPanel → MySQL Databases**
2. **Find your database user**
3. **Click "Change Password"** or "Reset Password"
4. **Set a new password**
5. **Update `api/config.php`** with the new password
6. **Save the file**

### Step 5: Verify Database User Permissions

1. **In Hostinger hPanel → MySQL Databases**
2. **Check that your user has permissions on the database**
3. **Make sure the user is assigned to the correct database**

### Step 6: Test Again

After fixing the credentials:

1. **Visit:** `https://theatretickethub.co.uk/api/check_setup.php`
2. **This will show if the connection works now**

## 🔍 Quick Verification

**Check these in your `api/config.php`:**

1. ✅ No placeholder values (YOUR_DB_NAME, etc.)
2. ✅ Database name matches Hostinger exactly
3. ✅ Username matches Hostinger exactly
4. ✅ Password matches Hostinger exactly (no extra spaces)
5. ✅ Values are wrapped in single quotes: `'value'`
6. ✅ No trailing commas or syntax errors

## 📝 Example of Correct Format

```php
<?php
const DB_HOST = 'localhost';
const DB_NAME = 'u123456789_courseinfinity';  // Your actual DB name
const DB_USER = 'u123456789_admin';  // Your actual username
const DB_PASS = 'MySecurePass123!';  // Your actual password - exact match!
```

## 🆘 Still Not Working?

### Option 1: Create New Database User

1. In Hostinger → MySQL Databases
2. Create a new database user
3. Assign it to your database
4. Set a simple password (no special characters)
5. Update `api/config.php` with new credentials

### Option 2: Check Hostinger Support

If credentials are correct but still not working:
- Contact Hostinger support
- They can verify your database user permissions
- They can reset the database password if needed

### Option 3: Test Connection Directly

You can test the connection by creating a simple test file:

```php
<?php
// Save as api/test_connection.php
$host = 'localhost';
$dbname = 'u123456789_courseinfinity';  // Your DB name
$user = 'u123456789_admin';  // Your username
$pass = 'YourPassword';  // Your password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    echo "✅ Connection successful!";
} catch (PDOException $e) {
    echo "❌ Error: " . $e->getMessage();
}
?>
```

Visit: `https://theatretickethub.co.uk/api/test_connection.php`

**Remember to delete test files after use!**

---

**Most Common Cause:** Password doesn't match exactly (extra spaces, wrong characters, or copied incorrectly)

