console.log("it works");

// if button is clicked, toggle aria-expanded, toggle class hidden

window.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("button clicked");
    console.log(event.target.attributes["aria-controls"].value);
    const arrow = document.querySelector(`#${event.target.id} + svg`);
    const panel = document.querySelector(
      `#${event.target.attributes["aria-controls"].value}`
    );
    if (panel.classList.contains("hidden")) {
      panel.classList.remove("hidden");
      arrow.style.transform = "rotate(180deg)";
      event.target.attributes["aria-expanded"].value = "True";
      event.target.classList.add("active");
    } else {
      panel.classList.add("hidden");
      arrow.style.transform = "unset";
      event.target.classList.remove("active");
    }
  }
});
