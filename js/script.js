var container = document.getElementById("container")
container.addEventListener("click",function(){
    var x = -1
    while(!(x > 0 && x< 1000)){
        x = prompt("Input Size")
    }
    container.innerHTML = ''
    createGrid(x)
})
createGrid(16)
function createGrid(size){
    for(var i = 0; i < size; i++){
        var row = document.createElement("div")
        row.classList.add("heads")
        row.style.borderLeft = "solid"
        row.style.borderRight = "solid"
        if(i == 0){
            row.style.borderTop = "solid"
        }else if(i == (size-1)){
            row.style.borderBottom = "solid"
        }
        for(var j = 0; j < size; j++){
            var element = document.createElement("div")
            element.classList.add("element")
            element.addEventListener("mouseover",changeColor)
            row.append(element)
        }
        container.appendChild(row)
    }
}

function changeColor(e){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}

function reset(){
    document.getElementById("container").style.backgroundColor = "rgb(0,0,0)"
}