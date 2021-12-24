const grid = document.querySelector('#grid');

function arrange(gridRow){

    for(let i = 0; i <= (gridRow * gridRow); i++){
        let row = document.createElement('div');
        row.style.cssText = "display:flex; flex: 1 1 0.5em; background-color:white";

        grid.appendChild(row);

        const draw = document.querySelector('#draw');
        const colorOption = document.querySelector('#color');
        
        colorOption.addEventListener('input',()=>{
            let color = colorOption.value;
            row.addEventListener("mouseover",()=>{
                row.style.backgroundColor = color;                
            });
            draw.addEventListener('click',()=>{
                row.addEventListener("mouseover",()=>{
                    row.style.backgroundColor = color;
                });            
            });
        });

        row.addEventListener("mouseover",()=>{
            row.style.setProperty("background-color", "black");
        }); 
        
        const eraser = document.querySelector('#eraser');

        eraser.addEventListener('click',()=>{
        row.addEventListener("mouseover",()=>{
            row.style.setProperty("background-color", "white");
        });
        });                       
    };
}

arrange(30);

const clear = document.querySelector('#clear');
clear.addEventListener('click',()=>{
    location.reload();
})

const size = document.querySelector('#size');
size.addEventListener('click', () =>{
    let gridSize = Number(prompt("Enter side length of grid."));
    grid.textContent = '';
    if(gridSize <= 100){
       arrange(gridSize);
    }else{
        alert("Invalid Number!!!");
    }
});