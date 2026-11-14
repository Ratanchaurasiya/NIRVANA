<?php
/**
 * Nirvana Group - API Endpoint: Submit Property Decision Wizard
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
    echo json_encode(['success' => false, 'message' => 'Security token invalid.']);
    exit;
}

$purpose = sanitizeInput($_POST['purpose'] ?? '');
$propertyType = sanitizeInput($_POST['type'] ?? '');
$location = sanitizeInput($_POST['location'] ?? '');
$timeline = sanitizeInput($_POST['timeline'] ?? '');
$recommendation = sanitizeInput($_POST['recommendation'] ?? '');
$ipAddress = getClientIp();

try {
    $pdo = getDBConnection();
    $stmt = $pdo->prepare("INSERT INTO decision_submissions (purpose, property_type, location, timeline, recommendation, ip_address, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$purpose, $propertyType, $location, $timeline, $recommendation, $ipAddress]);

    echo json_encode([
        'success' => true,
        'message' => 'Personalized guidance recommendation generated and saved!'
    ]);
} catch (Exception $e) {
    error_log("submit-decision error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to record decision data.']);
}
