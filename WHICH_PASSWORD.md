# 🔑 Which Password Do I Use?

## ❌ NOT Your Hostinger Account Password!

You should **NOT** use:
- Your Hostinger login password (the one you use to log into hPanel)
- Your website/FTP password
- Your cPanel password

## ✅ Use Your MySQL Database Password

You need to use the **MySQL Database Password** which is **separate** and **different** from your Hostinger account password.

---

## 📋 How to Find Your MySQL Database Password

### Step 1: Log in to Hostinger hPanel
- Go to: https://hpanel.hostinger.com
- Log in with your **Hostinger account** (this is one password)

### Step 2: Navigate to MySQL Databases
1. Click on **"Databases"** in the left menu
2. Click on **"MySQL Databases"**

### Step 3: Find Your Database Credentials
You'll see a section that looks like this:

```
┌─────────────────────────────────────────────┐
│ MySQL Databases                             │
├─────────────────────────────────────────────┤
│ Database Name: u123456789_courseinfinity   │
│ Database Username: u123456789_admin         │
│ Database Password: [Click to show]          │
│ Database Host: localhost                    │
└─────────────────────────────────────────────┘
```

### Step 4: Get the Database Password
1. Look for **"Database Password"** field
2. Click the **eye icon** 👁️ or **"Show"** button to reveal it
3. **Copy this password** - this is what goes in `api/config.php`

---

## 📝 What Goes Where in api/config.php

```php
<?php
// Get these from Hostinger → Databases → MySQL Databases

const DB_HOST = 'localhost';  // Usually 'localhost' (from Hostinger)
const DB_NAME = 'u123456789_courseinfinity';  // Database Name (from Hostinger)
const DB_USER = 'u123456789_admin';  // Database Username (from Hostinger)
const DB_PASS = 'ThePasswordShownHere';  // Database Password (from Hostinger - NOT your account password!)
```

---

## 🔍 If You Don't See a Database

### Create a New MySQL Database:

1. **In Hostinger hPanel → MySQL Databases**
2. Click **"Create Database"** or **"Add New Database"**
3. Fill in:
   - **Database Name:** (e.g., `courseinfinity`)
   - **Database Username:** (e.g., `admin` or `courseinfinity`)
   - **Database Password:** Create a strong password (remember this!)
4. Click **"Create"** or **"Add"**

5. **Copy the credentials** that Hostinger shows you
6. **Use these in `api/config.php`**

---

## 🆘 I Don't Remember My Database Password

### Option 1: Reset in Hostinger
1. Go to **Hostinger → MySQL Databases**
2. Find your database user
3. Click **"Change Password"** or **"Reset Password"**
4. Set a new password
5. **Copy the new password**
6. Update `api/config.php` with the new password

### Option 2: Create a New Database User
1. In Hostinger → MySQL Databases
2. Create a new database user
3. Assign it to your database
4. Set a password you'll remember
5. Use these new credentials in `api/config.php`

---

## 📊 Summary

| Password Type | Where to Find | Used For |
|--------------|---------------|----------|
| **Hostinger Account Password** | Your email/account | Logging into hPanel |
| **MySQL Database Password** | Hostinger → Databases → MySQL Databases | `api/config.php` ✅ |
| **FTP Password** | Hostinger → FTP Accounts | File uploads |
| **Website Password** | Your application | User logins |

**For `api/config.php`, you need: MySQL Database Password** ✅

---

## ✅ Quick Checklist

- [ ] I logged into Hostinger hPanel
- [ ] I went to Databases → MySQL Databases
- [ ] I found my database (or created a new one)
- [ ] I clicked to reveal the Database Password
- [ ] I copied the Database Password (not my account password)
- [ ] I pasted it into `api/config.php` as `DB_PASS`
- [ ] I saved the file

---

**Remember:** The MySQL Database Password is **different** from your Hostinger account password. It's specifically for database connections!

