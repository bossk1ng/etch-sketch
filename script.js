const container = document.getElementById("container");

const clear = document.getElementById("clearGrid");

let slider = document.getElementById("slider");
let gridSize = 16;
document.addEventListener("change", function () {
    console.log(1);
    gridSize = slider.value;
});

function makeGrid() {
    console.log(gridSize);
    for (i = 1; i <= gridSize * gridSize; i++) {
        let gridMember = document.createElement("div");
        gridMember.classList.add("gridBox");
        container.appendChild(gridMember);

        gridMember.addEventListener("mouseover", function changeColor() {
            gridMember.style.backgroundColor = "black";
        });
        clear.addEventListener("click", function clear() {
            gridMember.style.backgroundColor = "#9fd2db";
        });
    }
}

makeGrid();

let gridBoxes = document.getElementsByClassName("gridBox");
Array.from(gridBoxes).forEach(function (e) {
    e.style.width = "50px";
    e.style.height = "50px";
});
