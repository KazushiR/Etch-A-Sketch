//project
const grid = document.querySelector("#grid");
const submit_input = document.querySelector("#submit");

var size_constant = 16;

function makedivs(grid, size){
        const value = size*size
        for (let totalsize = 0; totalsize < value; totalsize++){
            const cell = document.createElement("div"); 
            cell.setAttribute("style", "display:inline-grid");
            cell.style.height = (800/size) + "px";
            cell.style.width = (800/size) + "px";
            grid.appendChild(cell)
            cell.addEventListener("mouseover", function mousehandler(){
                cell.style.background="black";
            });
        };       
}

function reset(){
    const size_test = document.querySelector("#size").value;
    makedivs(grid, size_test)
    const size_reset = document.getElementById("size");
    size_reset.value = ''

}

function makenewgrid(){
    submit_input.addEventListener("click", function(e){    
        while(grid.firstChild){
            grid.removeChild(grid.firstChild)
        }
        const size_check = parseInt(document.querySelector("#size").value);
        console.log(Number.isNaN(size_check));
        if (Number.isNaN(size_check)){
            alert("Please enter in a numerical value")
            makedivs(grid, size_constant);
            const size_reset = document.getElementById("size");
            size_reset.value = ''
        }else if ((size_check*size_check)>10000){
            alert("please check your height and width are the same and are no bigger then 100x100");
            makedivs(grid, size_constant);
            const size_reset = document.getElementById("size");
            size_reset.value = ''
        }else{
            reset()
        }
       
                        }); 
}
makedivs(grid, size_constant);
makenewgrid()