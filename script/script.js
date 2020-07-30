const button = document.querySelector("button");
const text = document.querySelector("span");
const body = document.body;

button.addEventListener("click", buttonHandler);

function buttonHandler(e) {
  let cores = new Array();
  for (let i = 0; i < 3; i++) {
    let aleatorio = Math.floor(Math.random() * (255 - 0) + 1);
    cores.push(aleatorio);
  }
  cores = cores.toString();
  body.style.backgroundColor = `rgb(${cores})`;
  text.innerHTML = cores;
  return console.log(body.style.backgroundColor);
}