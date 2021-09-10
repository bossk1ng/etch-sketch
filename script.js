const container = document.getElementById("container");

const clear = document.getElementById("clearGrid");

for (i = 1; i <= 16 * 16; i++) {
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
