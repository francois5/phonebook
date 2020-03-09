<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . "/vendor/autoload.php";

$DB_URI = 'mongodb://localhost:27017';

$m = new MongoDB\Client($DB_URI);
$db = $m->selectDatabase("phonebook");
?>
