<?php

require_once("./inc/connect_pdo.php");



$query = "SELECT *
FROM borrower";

//print("$query");

foreach($dbo->query($query) as $row) {
    
    $task_id = stripslashes($row["0"]);
    $task_name =  stripslashes($row["1"]);
    
    $task["task_id"] = $task_id;
	$task["task_name"] = $task_name;
	$tasks[] = $task;
}
$data = json_encode($borrowers);

header("Content-Type: application/json");

print($data);


?>

