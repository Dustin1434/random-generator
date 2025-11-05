document.getElementById("generate").addEventListener("click", async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  document.getElementById("fact-box").textContent = data.fact;
});
console.log('facts.js loaded successfully!');
