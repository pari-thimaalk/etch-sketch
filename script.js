let n = 10

let grid_container = document.querySelector(".grid_container");

//outerloop adds rows, innerloop sets 4 columns per row
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
            e.target.style.background = 'green';
        });
    }
}
