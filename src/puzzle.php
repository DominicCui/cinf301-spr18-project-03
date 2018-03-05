<?php

session_start();
$data = $_POST['data'];
$data = json_decode($data);
$arr = array(1, 2, 3, 8, " ", 4, 7, 6, 5);

if(array_diff($data,$arr)){
    echo "No match";
} else {
    echo "matched";
    $_SESSION['win']++;
}
setcookie('gamedata',json_encode($data),time() + (86400 * 30), "/");