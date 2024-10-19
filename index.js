// TODO: this file! :)
const form = document.querySelector("form");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

let number = [];
let even = [];
let odd = [];
const printAllNumber = () => {
  const output = document.querySelector("output");
  output.innerText = number;
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  if (data.get("number") !== "") {
    number.push(data.get("number"));
    printAllNumber();
    form.reset();
  }
});
sortOne.addEventListener("click", function (event) {
  let num = number.shift();
  if (num % 2 !== 0) {
    const output = document.querySelector("#odds output");
    odd.push(num);
    output.innerText = odd;
  } else {
    const output = document.querySelector("#evens output");
    even.push(num);
    output.innerText = even;
  }
  printAllNumber();
});
sortAll.addEventListener("click", function (event) {
  while (number.length > 0) {
    let num = number.shift();
    if (num % 2 !== 0) {
      const output = document.querySelector("#odds output");
      odd.push(num);
      output.innerText = odd;
    } else {
      const output = document.querySelector("#evens output");
      even.push(num);
      output.innerText = even;
    }
    printAllNumber();
  }
});
