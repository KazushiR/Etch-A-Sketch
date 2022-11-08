//project
const grid = document.querySelector("#grid");

function makedivs(grid){
    for (let row = 0; row < 256; row++){
        const cell = document.createElement("div"); 
        cell.setAttribute("style", "display:inline-block; width:50px; height:50px; border:solid");
        grid.appendChild(cell)
    };
}

makedivs(grid)

// function grids(cells){
//     let row = 1;
//     let column = 1;
//     for (let i = 0; i<=15; i++){
//         cells.style.gridRow="2 / span 2";
//         cells.setAttribute("style", "display:grid; width:50px; height:50px; border:solid");
//         row += 1;
//         column += 1;
//         grid.appendChild(cells);

//     }
// }

//grids(cell)