/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
        const columnIndex = columns.findIndex(column => column == event.target);
        console.log(rowIndex, columnIndex)
        switch_elems(rowIndex, columnIndex);
    })
}

function switch_elems(i, j) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;


    //
    // let k = j + 1;
    // if (k > table.rows[i].cells.length - 1) {
    //     k = 0;
    // }
    const val2 = table.rows[i].cells[k].innerHTML;

    // table.rows[i].cells[j].innerHTML = val2.toString();
    // table.rows[i].cells[k].innerHTML = val1.toString();
    const index1 = (i*3+j+1) + "=";
    const index2 = (i*3+k+1) + "=";
    document.cookie = index1 + val1;
    document.cookie = index2 + val2;
    document.cookie = "row_clicked=" + i;
    document.cookie = "col_clicked=" + j;
    document.cookie =  "loc=" + (i*3+j+1);
    document.cookie = "row_em=" + i;
    document.cookie = "col_em=" + j;
    document.cookie =  "em=" + (i*3+j+1);
    location.reload();
}
