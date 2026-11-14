<?php
/**
 * Nirvana Group - API Endpoint: Submit Requirement Finder
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

$propertyType = sanitizeInput($_POST['propertyType'] ?? 'Residential');
$purpose = sanitizeInput($_POST['purpose'] ?? 'Buy');
$location = sanitizeInput($_POST['location'] ?? 'Science City');
$ipAddress = getClientIp();

try {
    $pdo = getDBConnection();
    $stmt = $pdo->prepare("INSERT INTO requirements (property_type, purpose, location, ip_address, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([$propertyType, $purpose, $location, $ipAddress]);

    echo json_encode([
        'success' => true,
        'message' => 'Your requirement has been cataloged! Options are ready below.'
    ]);
} catch (Exception $e) {
    error_log("submit-requirement error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to record requirement.']);
}
