// Créer des noms fictifs
const names = Array.from({ length: 55 }, (_, i) => `nom${i + 1}`);

// Mélanger les noms pour créer les équipes
const shuffledNames = names.sort(() => Math.random() - 0.5);
const teams = {
    "bleue": [],
    "rouge": [],
    "jaune": [],
    "verte": []
};
let teamColors = {};

// Répartir les noms dans les équipes
for (let i = 0; i < shuffledNames.length; i++) {
    const teamName = Object.keys(teams)[i % 4];
    teams[teamName].push(shuffledNames[i]);
    teamColors[shuffledNames[i]] = teamName;
}

// Remplir la liste déroulante
const nameSelect = document.getElementById("nameSelect");
names.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    nameSelect.appendChild(option);
});

const confirmButton = document.getElementById("confirmButton");
const timerDisplay = document.getElementById("timer");
const teamButton = document.getElementById("teamButton");
let selectedName = "";

// Gestion de la sélection du nom
nameSelect.addEventListener("change", (e) => {
    selectedName = e.target.value;
    if (selectedName) {
        confirmButton.classList.remove("hidden");
    }
});

confirmButton.addEventListener("click", () => {
    nameSelect.disabled = true;
    confirmButton.classList.add("hidden");
    startTimer();
});

// Timer de 20 secondes
function startTimer() {
    let timeLeft = 20;
    timerDisplay.classList.remove("hidden");
    timerDisplay.textContent = `Temps restant: ${timeLeft} secondes`;

    const timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Temps restant: ${timeLeft} secondes`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            teamButton.classList.remove("hidden");
        }
    }, 1000);
}

// Découverte de l'équipe
teamButton.addEventListener("click", () => {
    const teamName = teamColors[selectedName];
    document.body.style.backgroundColor = teamName === "bleue" ? "#3498db" :
        teamName === "rouge" ? "#e74c3c" :
        teamName === "jaune" ? "#f1c40f" : "#2ecc71";
    document.body.innerHTML = `<h1 style="color: white;">Vous êtes dans l'équipe ${teamName}!</h1>`;
});
