console.log("it works");

const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const submit = document.querySelector(".request");

submit.onclick = function () {
  formInput.classList.add("invalid");
  form.classList.add("message");
};

document.addEventListener("keydown", function (event) {
  if (event.target.matches(".form-input") || event.target.matches(".form")) {
    formInput.classList.remove("invalid");
    form.classList.remove("message");
  }
});
