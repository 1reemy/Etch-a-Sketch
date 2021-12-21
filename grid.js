const grid = document.querySelector('#grid');

function arrange(gridRow,col){

    for(let i = 0; i <= (gridRow * col); i++){
        let row = document.createElement('div');
        let column = document.createElement('div');
        row.style.cssText = "display:flex; flex: 1 1 0.5rem; background-color:white";
        column.style.cssText = "display:flex; flex: 1 1 0.5rem; background-color:white";

        grid.appendChild(row);
        grid.appendChild(column);

        row.addEventListener("mouseover",()=>{
            row.style.setProperty("background-color", "red");
        });
        column.addEventListener("mouseover",()=>{
            column.style.setProperty("background-color","red"); 
        })
    };
}
arrange(37,37);

const reset = document.querySelector('#reset');
reset.addEventListener('click', () =>{
    location.reload();
})

