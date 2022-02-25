const grid = document.querySelector(".mondrian-wrapper");

function resizeGrid() {
  grid.style.width = `${grid.clientHeight}px`;
  //grid.style.height = `${grid.clientWidth}px`;
}

//on load set height to width
resizeGrid();

// on window resize
window.addEventListener("resize", resizeGrid);

const unorderedList = document.querySelector("ul");
console.log(unorderedList);
