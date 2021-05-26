// add text to div
document.getElementById('note').textContent = "This is pure DOM manipulation";
//change colour of the circle on click event
let circle = document.getElementById('circle');
circle.addEventListener('click',changeColor);

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777216)
    .toString(16);

  circle.style.backgroundColor = `#${randomColor}`;
}