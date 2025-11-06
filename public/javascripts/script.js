const items = [
  "Believe in yourself!",
  "You can do it!",
  "Never give up!",
  "Keep learning!"
];


const generateButton = document.getElementById('generate_button');
const display = document.getElementById('random-item');

generateButton.addEventListener('click', function () {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    display.textContent = randomItem;
});