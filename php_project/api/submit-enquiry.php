<?php
/**
 * Nirvana Group - API Endpoint: Submit Contact Enquiry
 * Core PHP 8.x + MySQL PDO Architecture
 */
header('Content-Type: application/json');
require_once __DIR__ . '/../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$csrfToken = $_POST['csrf_token'] ?? '';
if (!verifyCsrfToken($csrfToken)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Security token invalid or expired. Please refresh and retry.']);
    exit;
}

$fullName = sanitizeInput($_POST['fullName'] ?? '');
$phone = sanitizeInput($_POST['phone'] ?? '');
$email = sanitizeInput($_POST['email'] ?? '');
$projectInterest = sanitizeInput($_POST['project_interest'] ?? 'General Inquiry');
$requirement = sanitizeInput($_POST['requirement'] ?? 'Buy');
$propertyType = sanitizeInput($_POST['propertyType'] ?? 'Residential');
$location = sanitizeInput($_POST['location'] ?? 'Science City / Sola');
$message = sanitizeInput($_POST['message'] ?? '');
$ipAddress = getClientIp();

if (empty($fullName) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide both your name and phone number.']);
    exit;
}

try {
    $pdo = getDBConnection();
    $stmt = $pdo->prepare("INSERT INTO enquiries (full_name, phone, email, project_interest, requirement, property_type, location, message, ip_address, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$fullName, $phone, $email, $projectInterest, $requirement, $propertyType, $location, $message, $ipAddress]);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been received by Nirvana Group. Our advisory team will connect with you shortly.'
    ]);
} catch (Exception $e) {
    error_log("submit-enquiry error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save enquiry. Please try again.']);
}
