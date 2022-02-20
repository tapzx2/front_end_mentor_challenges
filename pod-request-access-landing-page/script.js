console.log("it works");

const formInput = document.querySelector(".form-input");
const submit = document.querySelector(".request");

submit.onclick = function () {
  formInput.classList.add("invalid");
};

document.addEventListener("keydown", function (event) {
  if (event.target.matches(".form-input")) {
    formInput.classList.remove("invalid");
  }
});
