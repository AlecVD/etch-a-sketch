var container = document.getElementById("container")
var rows = 16
var columns = 16

for(var i = 0; i < rows; i++){
    var row = document.createElement("div")
    row.classList.add("heads")
    row.style.borderLeft = "solid"
    row.style.borderRight = "solid"
    if(i == 0){
        row.style.borderTop = "solid"
    }else if(i == (rows-1)){
        row.style.borderBottom = "solid"
    }
    for(var j = 0; j < columns; j++){
        var element = document.createElement("div")
        var index = j
        element.classList.add("element")
        element.addEventListener("mouseover",changeColor)
        row.append(element)
    }
    container.appendChild(row)
}

function changeColor(e){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}