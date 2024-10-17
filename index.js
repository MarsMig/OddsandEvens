// TODO: this file! :)
const form = document.querySelector("form");
const section = document.getElementsByClassName("section")[0];

let number = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  number.push(data.get("number"));
});
printAllNumber = () => {
  const input = document.querySelector("input");
  input.innerText = number;
};
