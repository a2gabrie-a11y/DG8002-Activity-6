// ===== THE BARD: INTERACTIVE SCRIPT =====
console.log("The Bard's script is running!");
// ----- Feature 1: Light / Dark theme toggle -----
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "Dark mode";
  } else {
    themeBtn.textContent = "Light mode";
  }
});
// ----- Feature 2: Random fact generator (Act III page) -----
const facts = [
  "The Bard loves to laugh.",
  "The Bard loves animals and is the owner of 2 rabbits.",
  "The Bard once upon a time was a competitive swimmer. 🏊‍♀️",
  "The Bard's rabbit, Kai Kai the Houdini, transitioned on 28/09/2026.",
  "The Bard's other pet, Boytsü the great stoic dog, transitioned not long after, on 05/11/2026."
];

const factBtn = document.getElementById("fact-btn");
const factText = document.getElementById("fact-text");

if (factBtn) {
  factBtn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[index];
  });
}