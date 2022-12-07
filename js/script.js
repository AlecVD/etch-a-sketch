var container = document.getElementById("container")
var rows = 5
var columns = 5

for(var i = 0; i < rows; i++){
    var row = document.createElement("div")
    row.classList.add('heads')
    for(var j = 0; j < columns; j++){
        var element = document.createElement("div")
        element.textContent = "element"
        element.classList.add("element")
        row.append(element)
    }
    container.appendChild(row)
}
