
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");


const opciones = ["Piedra", "Papel", "Tijera"];
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * opciones.length);
  return opciones[randomIndex];
}

function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "Empate";
  if (
    (userChoice === "Piedra" && computerChoice === "Tijera") ||
    (userChoice === "Papel" && computerChoice === "Piedra") ||
    (userChoice === "Tijera" && computerChoice === "Papel")
  ) {
    return "Ganaste 🎉";
  }
  return "Perdiste 😢";
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(userChoice, computerChoice);

  userChoiceDisplay.textContent = `Tu elección: ${userChoice}`;
  computerChoiceDisplay.textContent = `Computadora: ${computerChoice}`;
  winnerDisplay.textContent = `Resultado: ${result}`;
}
piedraBtn.addEventListener("click", () => playGame("Piedra"));
papelBtn.addEventListener("click", () => playGame("Papel"));
tijeraBtn.addEventListener("click", () => playGame("Tijera"));



