<?php
include('db-connect.php');

$request_method = $_SERVER['REQUEST_METHOD'];
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, origin");
header("Access-Control-Allow-Methods: GET,POST,PUT,OPTIONS");
header('Content-Type: application/json');
function validEntry($entry) {
    return true;
}

if($request_method == 'GET') {
    if(!empty($_GET['search'])) {
	$filter = ['$text' => ['$search' => $_GET['search'], '$caseSensitive' => false, '$diacriticSensitive' => false]];
	$cursor = $db->entries->find($filter);
	$entries = [];
	foreach($cursor as $doc) {
            $entries[] = $doc;
	}
	echo json_encode($entries);
    }
    else {
	http_response_code(400);
    }
}
else if($request_method == 'POST') {
    $req_json = file_get_contents("php://input");
    $entry = json_decode($req_json, true);
    if(validEntry($entry)) {
	echo json_encode($db->entries->insertOne($entry));
    }
    else {
	http_response_code(400);
    }
}
else if($request_method == 'PUT') {
    $req_json = file_get_contents("php://input");
    $entry = json_decode($req_json, true);
    if(validEntry($entry)) {
	if($entry['_id']) {
	    echo json_encode($db->entries->updateOne(
		[ '_id' => new MongoDB\BSON\ObjectId($entry['_id']['$oid']) ],
		[
		    '$set' => [
			'firstName' => $entry['firstName'],
			'lastName' => $entry['lastName'],
			'phoneNumber' => $entry['phoneNumber']
		    ]
		]
	    ));
	}
	else {
	    http_response_code(400);
	}
    }
    else {
	http_response_code(400);
    }
}
else if($request_method == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    http_response_code(200);
}
else {
    http_response_code(400);
}

