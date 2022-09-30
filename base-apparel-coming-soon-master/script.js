console.log("it works");

const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const submit = document.querySelector(".request");
var mailformat =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/* using html5 spec https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript */

submit.onclick = function () {
  if (formInput.value.match(mailformat)) {
    /* do nothing */
  } else {
    formInput.classList.add("invalid");
    form.classList.add("message");
  }
};

document.addEventListener("keydown", function (event) {
  if (event.target.matches(".form-input") || event.target.matches(".form")) {
    formInput.classList.remove("invalid");
    form.classList.remove("message");
  }
});
