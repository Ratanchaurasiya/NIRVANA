<?php
/**
 * Nirvana Group - Shared Utility Functions
 * Core PHP 8.x + MySQL PDO Architecture
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/database.php';

// Generate or retrieve CSRF token
function generateCsrfToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF token
function verifyCsrfToken($token) {
    if (empty($_SESSION['csrf_token']) || empty($token)) {
        return false;
    }
    return hash_equals($_SESSION['csrf_token'], $token);
}

// Sanitize user inputs
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    return htmlspecialchars(trim((string)$data), ENT_QUOTES, 'UTF-8');
}

// Fetch all active projects
function getAllProjects($featuredOnly = false) {
    try {
        $pdo = getDBConnection();
        $sql = "SELECT * FROM projects WHERE is_published = 1";
        if ($featuredOnly) {
            $sql .= " AND is_featured = 1";
        }
        $sql .= " ORDER BY id ASC";
        $stmt = $pdo->query($sql);
        $projects = $stmt->fetchAll();
        foreach ($projects as &$p) {
            $p['features'] = !empty($p['features']) ? json_decode($p['features'], true) : [];
            $p['floor_plan_specs'] = !empty($p['floor_plan_specs']) ? json_decode($p['floor_plan_specs'], true) : [];
        }
        return $projects;
    } catch (Exception $e) {
        error_log("getAllProjects error: " . $e->getMessage());
        return [];
    }
}

// Fetch a single project by slug
function getProjectBySlug($slug) {
    try {
        $pdo = getDBConnection();
        $stmt = $pdo->prepare("SELECT * FROM projects WHERE slug = ? AND is_published = 1 LIMIT 1");
        $stmt->execute([$slug]);
        $project = $stmt->fetch();
        if ($project) {
            $project['features'] = !empty($project['features']) ? json_decode($project['features'], true) : [];
            $project['floor_plan_specs'] = !empty($project['floor_plan_specs']) ? json_decode($project['floor_plan_specs'], true) : [];
        }
        return $project;
    } catch (Exception $e) {
        error_log("getProjectBySlug error: " . $e->getMessage());
        return null;
    }
}

// Fetch all active properties
function getAllProperties($type = null) {
    try {
        $pdo = getDBConnection();
        if ($type) {
            $stmt = $pdo->prepare("SELECT * FROM properties WHERE is_active = 1 AND property_type = ? ORDER BY id ASC");
            $stmt->execute([$type]);
        } else {
            $stmt = $pdo->query("SELECT * FROM properties WHERE is_active = 1 ORDER BY id ASC");
        }
        $properties = $stmt->fetchAll();
        foreach ($properties as &$p) {
            $p['highlights'] = !empty($p['highlights']) ? json_decode($p['highlights'], true) : [];
        }
        return $properties;
    } catch (Exception $e) {
        error_log("getAllProperties error: " . $e->getMessage());
        return [];
    }
}

// Fetch services
function getAllServices($activeOnly = true) {
    try {
        $pdo = getDBConnection();
        $sql = "SELECT * FROM services";
        if ($activeOnly) {
            $sql .= " WHERE is_active = 1";
        }
        $sql .= " ORDER BY display_order ASC, id ASC";
        return $pdo->query($sql)->fetchAll();
    } catch (Exception $e) {
        error_log("getAllServices error: " . $e->getMessage());
        return [];
    }
}

// Fetch gallery images
function getAllGalleryImages($category = null) {
    try {
        $pdo = getDBConnection();
        if ($category && $category !== 'All') {
            $stmt = $pdo->prepare("SELECT * FROM gallery WHERE category = ? ORDER BY display_order ASC, id DESC");
            $stmt->execute([$category]);
            return $stmt->fetchAll();
        } else {
            return $pdo->query("SELECT * FROM gallery ORDER BY display_order ASC, id DESC")->fetchAll();
        }
    } catch (Exception $e) {
        error_log("getAllGalleryImages error: " . $e->getMessage());
        return [];
    }
}

// Fetch testimonials
function getAllTestimonials($publishedOnly = true) {
    try {
        $pdo = getDBConnection();
        $sql = "SELECT * FROM testimonials";
        if ($publishedOnly) {
            $sql .= " WHERE is_published = 1";
        }
        $sql .= " ORDER BY id ASC";
        return $pdo->query($sql)->fetchAll();
    } catch (Exception $e) {
        error_log("getAllTestimonials error: " . $e->getMessage());
        return [];
    }
}

// Fetch all active Instagram reels
function getInstagramReels($featuredOnly = false) {
    try {
        $pdo = getDBConnection();
        $sql = "SELECT * FROM instagram_reels";
        if ($featuredOnly) {
            $sql .= " WHERE is_featured = 1";
        }
        $sql .= " ORDER BY display_order ASC, id DESC";
        return $pdo->query($sql)->fetchAll();
    } catch (Exception $e) {
        error_log("getInstagramReels error: " . $e->getMessage());
        return [];
    }
}

// Fetch all active Instagram gallery items
function getInstagramGallery($category = null) {
    try {
        $pdo = getDBConnection();
        if ($category) {
            $stmt = $pdo->prepare("SELECT * FROM instagram_gallery WHERE is_active = 1 AND category = ? ORDER BY id DESC");
            $stmt->execute([$category]);
            return $stmt->fetchAll();
        } else {
            return $pdo->query("SELECT * FROM instagram_gallery WHERE is_active = 1 ORDER BY id DESC")->fetchAll();
        }
    } catch (Exception $e) {
        error_log("getInstagramGallery error: " . $e->getMessage());
        return [];
    }
}

// Fetch primary Instagram account info
function getPrimaryInstagramAccount() {
    try {
        $pdo = getDBConnection();
        $stmt = $pdo->query("SELECT * FROM instagram_accounts WHERE is_primary = 1 AND is_active = 1 LIMIT 1");
        $account = $stmt->fetch();
        if (!$account) {
            return [
                'account_name' => 'Nirvana Group Official',
                'username' => 'nirvana.group._',
                'profile_url' => 'https://www.instagram.com/nirvana.group._/',
                'bio' => 'Building Dreams. Creating Landmarks in Ahmedabad, Gujarat.'
            ];
        }
        return $account;
    } catch (Exception $e) {
        error_log("getPrimaryInstagramAccount error: " . $e->getMessage());
        return [
            'account_name' => 'Nirvana Group Official',
            'username' => 'nirvana.group._',
            'profile_url' => 'https://www.instagram.com/nirvana.group._/',
            'bio' => 'Building Dreams. Creating Landmarks in Ahmedabad, Gujarat.'
        ];
    }
}

// Get user client IP address safely
function getClientIp() {
    return $_SERVER['HTTP_CF_CONNECTING_IP'] 
        ?? $_SERVER['HTTP_X_FORWARDED_FOR'] 
        ?? $_SERVER['REMOTE_ADDR'] 
        ?? '0.0.0.0';
}

// Flash message helpers for user feedback
function setFlashMessage($message, $type = 'success') {
    $_SESSION['flash_message'] = [
        'text' => $message,
        'type' => $type
    ];
}

function getFlashMessage() {
    if (!empty($_SESSION['flash_message'])) {
        $flash = $_SESSION['flash_message'];
        unset($_SESSION['flash_message']);
        return $flash;
    }
    return null;
}

// Admin authentication guard
function adminCheckAuth() {
    if (empty($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
        header("Location: " . BASE_URL . "/admin/login.php");
        exit;
    }
}
