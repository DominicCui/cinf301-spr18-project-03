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
        }
    }
    const index1 = (i*2+j+1) + "=";
    const index2 = (i*2+k+1) + "=";
    document.cookie = index1 + val1;
    document.cookie = index2 + val2;
    document.cookie = "row_clicked=" + i;
    document.cookie = "col_clicked=" + j;
    document.cookie =  "loc=" + (i*2+j+1);
    document.cookie = "row_em=" + i;
    document.cookie = "col_em=" + k;
    document.cookie =  "em=" + (i*2+k+1);
    location.reload();

    // if(i == row && j == (column + 1)){
    //     const val2 = table.rows[row].cells[column].innerHTML;
    //     // table.rows[i].cells[j].innerHTML = val2.toString();
    //     // table.rows[row].cells[column].innerHTML = val1.toString();
    //     const index1 = (i*2+j+1) + "=";
    //     const index2 = (i*2+k+1) + "=";
    //     document.cookie = index1 + val1;
    //     document.cookie = index2 + val2;
    //     document.cookie = "row_clicked=" + i;
    //     document.cookie = "col_clicked=" + j;
    //     document.cookie =  "loc=" + (i*2+j+1);
    //     document.cookie = "row_em=" + i;
    //     document.cookie = "col_em=" + k;
    //     document.cookie =  "em=" + (i*2+k+1);
    // }
    // else if(i == row && j == (column - 1)){
    //     const val2 = table.rows[row].cells[column].innerHTML;
    //     // table.rows[i].cells[j].innerHTML = val2.toString();
    //     // table.rows[row].cells[column].innerHTML = val1.toString();
    //     const index1 = (i*2+j+1) + "=";
    //     const index2 = (i*2+k+1) + "=";
    //     document.cookie = index1 + val1;
    //     document.cookie = index2 + val2;
    //     document.cookie = "row_clicked=" + i;
    //     document.cookie = "col_clicked=" + j;
    //     document.cookie =  "loc=" + (i*2+j+1);
    //     document.cookie = "row_em=" + i;
    //     document.cookie = "col_em=" + k;
    //     document.cookie =  "em=" + (i*2+k+1);
    // }
    // else if(i == (row + 1) && j == column){
    //     const val2 = table.rows[row].cells[column].innerHTML;
    //     // table.rows[i].cells[j].innerHTML = val2.toString();
    //     // table.rows[row].cells[column].innerHTML = val1.toString();
    //     const index1 = (i*2+j+1) + "=";
    //     const index2 = (i*2+k+1) + "=";
    //     document.cookie = index1 + val1;
    //     document.cookie = index2 + val2;
    //     document.cookie = "row_clicked=" + i;
    //     document.cookie = "col_clicked=" + j;
    //     document.cookie =  "loc=" + (i*2+j+1);
    //     document.cookie = "row_em=" + i;
    //     document.cookie = "col_em=" + k;
    //     document.cookie =  "em=" + (i*2+k+1);
    // }
    // else if(i == (row - 1) && j == column){
    //     const val2 = table.rows[row].cells[column].innerHTML;
    //     // table.rows[i].cells[j].innerHTML = val2.toString();
    //     // table.rows[row].cells[column].innerHTML = val1.toString();
    //     const index1 = (i*2+j+1) + "=";
    //     const index2 = (i*2+k+1) + "=";
    //     document.cookie = index1 + val1;
    //     document.cookie = index2 + val2;
    //     document.cookie = "row_clicked=" + i;
    //     document.cookie = "col_clicked=" + j;
    //     document.cookie =  "loc=" + (i*2+j+1);
    //     document.cookie = "row_em=" + i;
    //     document.cookie = "col_em=" + k;
    //     document.cookie =  "em=" + (i*2+k+1);
    // }

    // window.setTimeout(1000);
    checkWin();
}

function newGame() {
    const random = Array();
    const button = document.querySelector('button');
    const table = document.querySelector('table');

    button.addEventListener('click', (event) => {
        rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        let emptyR = rand;
        rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        let emptyC = rand;

        for (var a = [ 1, 2, 3, 4, 5, 6, 7, 8], i = a.length;  i--; ) {
            var rand = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            random[i] = rand;
        }

        let num = 0;

        for(let t = 0; t <= 2; t++){
            for(let k = 0; k <= 2; k++){
                if(t == emptyR && k == emptyC){
                    table.rows[t].cells[k].innerHTML = null;
                }else{
                    table.rows[t].cells[k].innerHTML = random[num].toString();
                    num++;
                }
            }
        }

        document.getElementById("messenge").innerHTML = "New game starting";
    })
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
        step ++;
        document.getElementById("messenge").innerHTML = "Solved the puzzle in step " + step;
        return step = 0;
    }
    else{
        step ++;
        document.getElementById("messenge").innerHTML = "Solving the puzzle: used step " + step;
    }

}