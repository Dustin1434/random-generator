const generateButton = document.getElementById('generate_button');
const display = document.getElementById('random-item');

generateButton.addEventListener('click', async () => {
    const response = await fetch('/random');
    const data = await response.json();
    display.textContent = data.randomItem;
});
