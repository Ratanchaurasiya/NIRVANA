<?php
/**
 * Nirvana Group - API Endpoint: Book Project Site Visit
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

$projectId = intval($_POST['project_id'] ?? 0);
$projectName = sanitizeInput($_POST['project_name'] ?? 'Nirvana Development');
$fullName = sanitizeInput($_POST['name'] ?? '');
$phone = sanitizeInput($_POST['phone'] ?? '');
$visitDate = sanitizeInput($_POST['date'] ?? date('Y-m-d'));
$ipAddress = getClientIp();

if (empty($fullName) || empty($phone) || empty($visitDate)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in your name, phone number, and preferred date.']);
    exit;
}

try {
    $pdo = getDBConnection();
    $stmt = $pdo->prepare("INSERT INTO site_visits (project_id, project_name, full_name, phone, visit_date, status, ip_address, created_at) VALUES (?, ?, ?, ?, ?, 'Scheduled', ?, NOW())");
    $stmt->execute([$projectId ?: null, $projectName, $fullName, $phone, $visitDate, $ipAddress]);

    echo json_encode([
        'success' => true,
        'message' => "Site visit request submitted for {$projectName}! Our field relationship manager will coordinate your arrival."
    ]);
} catch (Exception $e) {
    error_log("book-site-visit error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to schedule site visit. Please try again.']);
}
