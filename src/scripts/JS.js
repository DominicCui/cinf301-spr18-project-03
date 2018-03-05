var step = 0;

window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
        const columnIndex = columns.findIndex(column => column == event.target);
        switch_elems(rowIndex, columnIndex);
    });
}

function switch_elems(i, j) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;
    var arr = [];
    let row = 0;
    let column = 0;

    for(let t = 0; t <= 2; t++){
        for(let k = 0; k <= 2; k++){
            const empty = table.rows[t].cells[k].innerHTML;
            if(empty == 0){
                row = t;
                column = k;
                break;
            }
            arr.push(table.rows[t].cells[k].innerHTML);
        }
    }

    if(i == row && j == (column + 1)){
        step++;
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    else if(i == row && j == (column - 1)){
        step++;
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    else if(i == (row + 1) && j == column){
        step++;
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    else if(i == (row - 1) && j == column){
        step++;
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    
    
    checkWin();
    $.ajax({
      type: "POST",
      url: "puzzle.php",
      data: {data:json_encode(arr)},
      dataType: "text",
      success: function(resultData){
          //alert("Save Complete");
    }
    });
    location.reload();
}

function checkWin(){
    const table = document.querySelector('table');
    const a = [ 1, 2, 3, 8, 0, 4, 7, 6, 5];
    let win =  0;
    let num = 0;

    for(let r = 0; r <= 2; r++){
        for(let c = 0; c <= 2; c++){
            if(r == 1 && c == 1){
                num++;
            }
            else if(table.rows[r].cells[c].innerHTML === a[num].toString()){
                win = 1;
                num++;
            }
            else{
                win = 0;
                break;
            }
        }
    }
    if(win === 1){
        // window.alert("Solved the puzzle");
        confirm("Solved the puzzle");
        document.getElementById("messenge").innerHTML = "Solved the puzzle in step " + step;
        return step = 0;
    }
    else{
        document.getElementById("messenge").innerHTML = "Solving the puzzle: used step " + step;
    }

}