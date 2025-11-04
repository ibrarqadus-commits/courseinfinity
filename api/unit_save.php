<?php
require __DIR__.'/config.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'METHOD_NOT_ALLOWED'], 405);
}

$module = trim($_POST['module'] ?? '');
$unit = trim($_POST['unit'] ?? '');
$content = isset($_POST['content']) ? (string)$_POST['content'] : null;
$video = isset($_POST['video_url']) ? trim((string)$_POST['video_url']) : null;

if ($module === '' || $unit === '') {
    json_response(['error' => 'INVALID_INPUT'], 400);
}

$pdo = db();
// Check if unit exists
$stmt = $pdo->prepare('SELECT id FROM units WHERE module_id = ? AND unit_id = ?');
$stmt->execute([$module, $unit]);
$exists = $stmt->fetch();

if ($exists) {
    // Update existing record - only update non-null fields
    $updates = [];
    $params = [];
    if ($content !== null) {
        $updates[] = 'content = ?';
        $params[] = $content;
    }
    if ($video !== null) {
        $updates[] = 'video_url = ?';
        $params[] = $video;
    }
    if (!empty($updates)) {
        $params[] = $module;
        $params[] = $unit;
        $stmt = $pdo->prepare('UPDATE units SET ' . implode(', ', $updates) . ' WHERE module_id = ? AND unit_id = ?');
        $stmt->execute($params);
    }
} else {
    // Insert new record
    $stmt = $pdo->prepare('INSERT INTO units (module_id, unit_id, content, video_url) VALUES (?, ?, ?, ?)');
    $stmt->execute([$module, $unit, $content, $video]);
}

json_response(['ok' => true]);


