const container = document.getElementById("container");

const clear = document.getElementById("clearGrid");

let slider = document.getElementById("slider");
let gridSize = 16;

function makeGrid() {
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

    let gridBoxes = document.getElementsByClassName("gridBox");
    console.log(gridBoxes?.length);

    let percent = (100 / gridSize).toString() + "%";

    for (let i = 0; i < gridBoxes.length; i++) {
        console.log(gridBoxes[i].style.width);
        gridBoxes[i].style.width = percent;
        gridBoxes[i].style.height = percent;
    }
}

document.addEventListener("change", function () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    gridSize = parseInt(slider.value);
    makeGrid();
});
