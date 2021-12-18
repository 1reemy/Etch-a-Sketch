const grid = document.querySelector('#grid');

function arrange(gridRow,col){

    for(let i = 0; i <= (gridRow * col); i++){
        let row = document.createElement('div');
        let column = document.createElement('div');
        row.style.cssText = "display:flex; width:10px; height:10px; border-style:solid";
        column.style.cssText = "display:flex; width:10px; height:10px; border-style:solid";

        grid.appendChild(row);
        grid.appendChild(column);
    };
}
arrange(16,16);