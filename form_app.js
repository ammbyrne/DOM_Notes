let output = document.getElementById('output');

document.querySelector('form').addEventListener
('submit', (e) => {
  output.textContent = `Submit event - ${e.timeStamp}`;
  e.preventDefault(); // stops page refresh
})

let nameText = document.querySelector('input[type="text"]');
// name event types - input 
nameText.addEventListener('input', () => {
  output.textContent = `The value entered is ${nameText.value}`;
})

// event types - focus in and out
nameText.addEventListener('focus', (e) => {
  e.target.style.backgroundColor = 'lightgreen';
  e.target.style.color = 'black';
})
nameText.addEventListener('focusout', (e) => {
  e.target.style.backgroundColor = 'white';
})