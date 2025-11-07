<?php
/**
 * Hostinger PHP Fallback Index File
 * This file redirects to index.html if PHP is enabled
 * Hostinger servers often look for index.php first
 */

// Redirect to index.html
header('Location: index.html');
exit;
?>

