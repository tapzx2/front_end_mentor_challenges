console.log("it works");

// if button is clicked, toggle aria-expanded, toggle class hidden

window.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("button clicked");
    console.log(event.target.attributes["aria-controls"].value);
    const panel = document.querySelector(
      `#${event.target.attributes["aria-controls"].value}`
    );
    if (panel.classList.contains("hidden")) {
      panel.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
    }
  }
});
