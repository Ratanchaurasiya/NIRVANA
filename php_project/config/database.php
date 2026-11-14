<?php
/**
 * Nirvana Group - MySQL PDO Database Connection
 */

define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', 'nirvana_group_db');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

function getDBConnection() {
    static $pdo = null;

    if ($pdo === null) {
        $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . DB_CHARSET
        ];

        try {
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            // In development, display error message for setup; in production, log securely
            if (defined('APP_ENV') && APP_ENV === 'development') {
                die("<!-- Database Connection Error: " . htmlspecialchars($e->getMessage()) . " -->\n" .
                    "<div style='font-family:sans-serif; background:#070D1E; color:#f8fafc; padding:30px; border-radius:12px; margin:40px auto; max-width:600px; border:1px solid #d4af37;'>" .
                    "<h3 style='color:#f59e0b; margin-top:0;'>Database Connection Pending</h3>" .
                    "<p>Please ensure MySQL is running in XAMPP and import <code>database.sql</code> into phpMyAdmin as <code>nirvana_group_db</code>.</p>" .
                    "<p style='color:#94a3b8; font-size:12px;'>Error: " . htmlspecialchars($e->getMessage()) . "</p>" .
                    "</div>");
            } else {
                error_log("Database connection failure: " . $e->getMessage());
                die("Database service temporarily unavailable. Please try again shortly.");
            }
        }
    }

    return $pdo;
}
