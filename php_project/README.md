# NIRVANA GROUP - Core PHP 8.x + MySQL Web Platform

A luxury real estate corporate web application built with **Core PHP 8.x**, **MySQL 8.x (PDO)**, **HTML5/Tailwind/CSS3**, **GSAP 3.12.5**, and **Three.js**.

---

## 🏛️ Brand Information

- **Brand Name**: NIRVANA GROUP
- **Tagline**: "Building Dreams. Creating Landmarks."
- **Positioning**: Premium Real Estate | Architecture | Construction | Property Development
- **Official Website**: https://nirvana.group
- **Official Instagram**: https://www.instagram.com/nirvana.group._/
- **Verified Corporate Office**: ............................................................
- **Phone**: +91 .........................
- **Email**: .........................@.........................

---

## 📂 Project Directory Structure

```
php_project/
├── .htaccess                       # Security headers, rewrites & directory protection
├── README.md                       # Documentation & setup instructions
├── database.sql                    # Complete MySQL schema & 12 tables export
├── config/
│   ├── config.php                  # Global constants, site metadata & credentials
│   └── database.php                # PDO connection class with prepared statements
├── includes/
│   ├── functions.php               # Data query helpers, sanitization, CSRF & auth
│   ├── header.php                  # Luxury Black & Gold head, Google Fonts, GSAP, Three.js
│   ├── navbar.php                  # Responsive navigation bar with gold accents
│   └── footer.php                  # Corporate footer with verified office address
├── assets/
│   ├── css/style.css               # Luxury theme CSS custom properties & animations
│   ├── js/main.js                  # GSAP scroll reveals, Three.js 3D viewer & lightbox
│   ├── favicon.svg                 # SVG vector branding favicon
│   └── images/                     # Architectural photography and hero banners
├── index.php                       # Master 100vh hero, 3D model, projects, reels & contact
├── about.php                       # Corporate history, philosophy & team
├── projects.php                    # All 6 verified landmark projects (no prices)
├── project-detail.php              # Project showcase with interactive 3D layout viewer
├── services.php                    # Architectural, construction & advisory services
├── gallery.php                     # Filterable photo gallery with lightbox modal
├── instagram.php                   # Official Instagram channel, reels & media gallery
├── contact.php                     # Contact form & verified office location
├── api/
│   └── submit-enquiry.php          # PDO prepared statement enquiry handler
└── admin/                          # Complete Back-Office Management Suite
    ├── login.php                   # Secure admin authentication
    ├── logout.php                  # Session termination
    ├── index.php                   # Dashboard overview & key performance indicators
    ├── projects.php                # Project CRUD management
    ├── enquiries.php                # Lead management & site visit status workflow
    ├── gallery.php                 # Image upload & portfolio curation
    ├── instagram.php               # Instagram reels & media post management
    ├── services.php                # Service capabilities management
    ├── testimonials.php            # Client review management
    └── settings.php                # Corporate address, phone, email & metadata settings
```

---

## 🚀 Quick Setup Instructions (XAMPP / Apache / MySQL)

### 1. Database Setup in phpMyAdmin
1. Start **Apache** and **MySQL** in your XAMPP Control Panel.
2. Open your web browser and navigate to `http://localhost/phpmyadmin/`.
3. Create a new database named:
   ```sql
   nirvana_realestate
   ```
4. Click on the **Import** tab.
5. Select the file `database.sql` located inside `php_project/database.sql` and click **Go / Import**.
6. All 12 tables with seed data, verified projects, and admin credentials will be created automatically.

### 2. Configure Database Credentials (if necessary)
Edit `php_project/config/config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'nirvana_realestate');
define('DB_USER', 'root');
define('DB_PASS', '');       // Default XAMPP password is empty
define('DB_PORT', '3306');
```

### 3. Deploy to XAMPP htdocs
Copy the entire `php_project` folder to your XAMPP `htdocs` directory:
```
C:\xampp\htdocs\nirvana-group\
```
Or open it directly via:
```
http://localhost/nirvana-group/
```

### 4. Default Admin Login Credentials
- **Admin URL**: `http://localhost/nirvana-group/admin/login.php`
- **Username**: `admin`
- **Password**: `admin123`

---

## 🎨 Luxury Design System Palette

- **Deep Black**: `#101010`
- **Charcoal**: `#191919`
- **Champagne Gold**: `#C6A46A`
- **Light Gold**: `#D9BD87`
- **Ivory**: `#F5F1E9`
- **Secondary Text**: `#A5A5A5`

---

## 🔒 Security Measures
- **SQL Injection Prevention**: 100% PDO prepared statements.
- **CSRF Protection**: Token validation on all form submissions.
- **Input Sanitization**: `htmlspecialchars` and strict typecasting.
- **Password Hashing**: `password_hash()` with `PASSWORD_DEFAULT`.
- **Session Security**: Session fixation defense with session regeneration.
- **Access Control**: Role-based access control protecting all `/admin/*` routes.
