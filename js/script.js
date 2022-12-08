var container = document.getElementById("container")
var rows = 2
var columns = 2

for(var i = 0; i < rows; i++){
    var row = document.createElement("div")
    row.classList.add('heads')
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
    console.log(r)
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
}