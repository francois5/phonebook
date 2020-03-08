<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . "/vendor/autoload.php";

$DB_URI = 'mongodb://localhost:27017';

$m = new MongoDB\Client($DB_URI);
$db = $m->selectDatabase("phonebook");
//$res = $db->entries->insertOne(['firstName'=>'test firstname', 'lastName'=>'test lastname', 'phoneNumber'=>'+32 00 0000000']);
$res = $db->entries->findOne(['phoneNumber'=>'+32 00 0000000']);
//$res = $db->entries->findOne(['_id'=>new MongoDB\BSON\ObjectID('5e63f096366fcd78d05a9542')]);
echo json_encode($res, JSON_PRETTY_PRINT);
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
?>
