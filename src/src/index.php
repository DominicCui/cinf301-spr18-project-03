<?php

//if($_COOKIE["row_clicked"] == $_COOKIE["row_em"]){
//    $col =  $_COOKIE["col_em"] +1;
//    if($_COOKIE["col_clicked"] ==  $col){
//        $temp =  $_COOKIE['loc'];
//        $_COOKIE['loc'] = $_COOKIE['em'];
//        $_COOKIE['em'] = $temp;
//    }
//
// }
// else if(i == row && j == (column - 1)){
//
// }
// else if(i == (row + 1) && j == column){
//
// }
// else if(i == (row - 1) && j == column){
//
// }
    $_COOKIE["row_em"]= 0;
    $_COOKIE["col_em"]= 0;
    $_COOKIE["em"] = ($_COOKIE["row_em"]*3+$_COOKIE["col_em"]+1);

    for($t = 0; $t <= 2; $t++){
    for($k = 0; $k <= 2; $k++){
         $empty = $t*3+$k+1;
            if($_COOKIE[$empty] == 0){
                $_COOKIE["row_em"] = $t;
                $_COOKIE["col_em"] = $k;
                break;
            }
        }
    }
  if (isset($_COOKIE['loc']))
  {
      if($_COOKIE["row_clicked"] == $_COOKIE["row_em"]){
          $col =  $_COOKIE["col_em"] +1;
          if($_COOKIE["col_clicked"] ==  $col){
              $temp =  $_COOKIE['loc'];
              $_COOKIE['loc'] = $_COOKIE['em'];
              $_COOKIE['em'] = $temp;
          }
      }
      else if($_COOKIE["row_clicked"] == $_COOKIE["row_em"]){
          $col =  $_COOKIE["col_em"] -1;
          if($_COOKIE["col_clicked"] ==  $col){
              $temp =  $_COOKIE['loc'];
              $_COOKIE['loc'] = $_COOKIE['em'];
              $_COOKIE['em'] = $temp;
          }
      }
      else if($_COOKIE["col_clicked"] == $_COOKIE["col_em"]){
          $col =  $_COOKIE["row_em"] -1;
          if($_COOKIE["row_clicked"] ==  $col){
              $temp =  $_COOKIE['loc'];
              $_COOKIE['loc'] = $_COOKIE['em'];
              $_COOKIE['em'] = $temp;
          }
      }
      else if($_COOKIE["col_clicked"] == $_COOKIE["col_em"]){
          $col =  $_COOKIE["row_em"] +1;
          if($_COOKIE["row_clicked"] ==  $col){
              $temp =  $_COOKIE['loc'];
              $_COOKIE['loc'] = $_COOKIE['em'];
              $_COOKIE['em'] = $temp;
          }
      }
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>8 Block Puzzle</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<table id="tableID" style="cursor: pointer;">
    <tr>
        <td><?php echo isset($_COOKIE['1']) ? $_COOKIE['1'] : 1 ?></td>
        <td><?php echo isset($_COOKIE['2']) ? $_COOKIE['2'] : 2 ?></td>
        <td><?php echo isset($_COOKIE['3']) ? $_COOKIE['3'] : 3 ?></td>
    </tr>
    <tr>
        <td><?php echo isset($_COOKIE['4']) ? $_COOKIE['4'] : 8 ?></td>
        <td><?php echo isset($_COOKIE['5']) ? $_COOKIE['5'] : null ?></td>
        <td><?php echo isset($_COOKIE['6']) ? $_COOKIE['6'] : 4 ?></td>
    </tr>
    <tr>
        <td><?php echo isset($_COOKIE['7']) ? $_COOKIE['7'] : 7 ?></td>
        <td><?php echo isset($_COOKIE['8']) ? $_COOKIE['8'] : 6 ?></td>
        <td><?php echo isset($_COOKIE['9']) ? $_COOKIE['9'] : 5 ?></td>
    </tr>
</table>

<p id="messenge"> This is the final goal.</p>
<button onclick="newGame()">New Game</button>

<script src="scripts/JS.js"></script>

</body>

</html>