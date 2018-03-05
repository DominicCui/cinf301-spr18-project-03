<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>8 Block Puzzle</title>
    <link rel="stylesheet" href="css/CSS.css">
</head>
<body>
<?php
$flag = 0;
//session_start();
$_SESSION['win'] = 0;

if(isset($_POST['newgame'])) {
        $input = array(4, 6, 3, 1, 5,2,7,8);
          $rand_keys = array_rand($input, 7);
          $usedarray = array();
          $empty = rand(0,7);
          $num = 0;
          foreach($rand_keys as $arr){
              if($num == $empty) {
                  $usedarray[] = " ";
              } 
              $usedarray[] = $input[$arr];
              $num++;
          }

          $result = array_diff($input, $usedarray);
            $key = key($result);
          $flag=1;
          $usedarray[] = $result[$key];
          unset($_POST);
          $arrdata = $usedarray;
          $_SESSION['data'] = $arrdata;
          setcookie('gamedata',json_encode($arrdata),time() + (86400 * 30), "/");
    }
    if(!empty($_COOKIE['gamedata'])){
        $usedarray = json_decode($_COOKIE['gamedata']);
    }
?>
<table id="tableID" style="cursor: pointer;">
    <tr>
        <td><?php if($flag == 1) echo $usedarray[0]; else echo "1"; ?></td>
        <td><?php if($flag == 1) echo $usedarray[1]; else echo "2"; ?></td>
        <td><?php if($flag == 1) echo $usedarray[2]; else echo "3"; ?></td>
    </tr>
    <tr>
        <td><?php if($flag == 1) echo $usedarray[3]; else echo "8"; ?></td>
        <td><?php if($flag == 1) echo $usedarray[4]; else echo ""; ?></td>
        <td><?php if($flag == 1) echo $usedarray[5]; else echo "4"; ?></td>
    </tr>
    <tr>
        <td><?php if($flag == 1) echo $usedarray[6]; else echo "7"; ?></td>
        <td><?php if($flag == 1) echo $usedarray[7]; else echo "6"; ?></td>
        <td><?php if($flag == 1) echo $usedarray[8]; else echo "5"; ?></td>
    </tr>
</table>
<form method="POST" action="">
<input type="submit" name="newgame" value="New Game"/>
</form>
<p id="messenge">This is the final goal.</p>
<script src="scripts/jquery.js"></script>
<script src="scripts/JS.js"></script>
</body>

</html>
