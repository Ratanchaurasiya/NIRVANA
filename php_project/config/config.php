<?php
/**
 * Nirvana Group - Application Configuration
 * Luxury Real Estate & Architectural Landmarks
 */

// Environment settings
define('APP_ENV', 'development'); // 'development' or 'production'
if (APP_ENV === 'development') {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}

// Brand Identity
define('SITE_NAME', 'NIRVANA GROUP');
define('SITE_TAGLINE', 'Building Dreams. Creating Landmarks.');
define('SITE_POSITIONING', 'Premium Real Estate | Architecture | Construction | Property Development');
define('SITE_CANONICAL_URL', 'https://nirvana.group');
define('OFFICIAL_INSTAGRAM_URL', 'https://www.instagram.com/nirvana.group._/');
define('COMPANY_PHONE', 'Available via Advisory Portal');
define('COMPANY_EMAIL', 'contact@nirvana.group');
define('COMPANY_ADDRESS', 'Ahmedabad, Gujarat, India');

// Base URL calculation (works seamlessly in XAMPP subdirectory or root domain)
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || ($_SERVER['SERVER_PORT'] ?? 80) == 443) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptDir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? ''));
$scriptDir = rtrim(preg_replace('/(\/admin|\/api|\/includes|\/config).*$/', '', $scriptDir), '/');
define('BASE_URL', $protocol . $host . ($scriptDir ? $scriptDir : ''));

// Session Security Configuration
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', 1);
    ini_set('session.use_only_cookies', 1);
    session_start();
}
