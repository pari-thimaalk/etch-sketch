//add slider to readjust size, reset and erase button
let n = 10

let grid_container = document.querySelector(".grid_container");

function randColor() {
    let rgb = '#' + Math.floor(Math.random()*16777215).toString(16)
    return rgb 
}

function reloadgrid(){
    //clear previous grid
    while(grid_container.firstChild){grid_container.removeChild(grid_container.firstChild)}

    //set new grid - outerloop adds rows, innerloop sets 4 columns per row
    for(let i = 0; i < n; i++){
        let new_row = document.createElement('div')
        new_row.classList.add('row')
        grid_container.appendChild(new_row)

        for(let j = 0; j < n; j++){
            let elem = document.createElement('div')
            elem.classList.add('grid_element')
            new_row.appendChild(elem)

            //add mousover event listener
            elem.addEventListener("mouseover",function(e){
                e.target.style.background = randColor()
            });
        }
    }
}

reloadgrid()

let slider = document.getElementById("myRange")
let display_length = document.getElementById("Grid_Length")
display_length.innerHTML = slider.value


slider.oninput = function() {
    display_length.innerHTML = this.value;
    n = this.value;
    reloadgrid()
  }