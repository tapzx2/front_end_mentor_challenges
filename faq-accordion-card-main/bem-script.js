console.log("it works");

// if button is clicked, toggle aria-expanded, toggle class hidden

const allMore = document.querySelectorAll(".more");
for (let i = 0; i < allMore.length; i++) {
  allMore[i].style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target.matches(".seeMore")) {
    container = getParentContainerBySelector(event.target, ".workshop");
    more = document.querySelectorAll(`#${container.id} > .more`);
    for (let i = 0; i < more.length; i++) {
      if (more[i].style.display == "none") {
        more[i].style.display = "block";
        event.target.innerHTML = "see less";
      } else {
        more[i].style.display = "none";
        event.target.innerHTML = "see more";
      }
    }
  }
});

function getParentContainerBySelector(elem, selector) {
  // Get the next parent element
  var parent = elem.parentElement;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (parent) {
    if (parent.matches(selector)) return parent;
    parent = parent.parentElement;
  }
}
