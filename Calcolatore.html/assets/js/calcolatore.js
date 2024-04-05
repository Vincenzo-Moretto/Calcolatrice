// Funzione per gestire l'input dell'utente
function handleInput(value) {
  const userInput = document.getElementById("userinput");
  if (userInput.textContent === "0") {
    userInput.textContent = value;
  } else {
    userInput.textContent += value;
  }
}

// Funzione per calcolare il risultato
function calculateResult() {
  const userInput = document.getElementById("userinput");
  const expression = userInput.textContent;
  const result = eval(expression);
  userInput.textContent = result;
}

// Funzione per cancellare l'input dell'utente
function clearInput() {
  const userInput = document.getElementById("userinput");
  userInput.textContent = "0";
}

// Funzione per eliminare l'ultimo carattere dall'input dell'utente
function deleteLastCharacter() {
  const userInput = document.getElementById("userinput");
  userInput.textContent = userInput.textContent.slice(0, -1);
  if (userInput.textContent === "") {
    userInput.textContent = "0";
  }
}

// Aggiunta degli eventi ai pulsanti
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.textContent;
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      clearInput();
    } else if (value === "DEL") {
      deleteLastCharacter();
    } else {
      handleInput(value);
    }
  });
});
