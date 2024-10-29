document.addEventListener("DOMContentLoaded", () => {
    // Créer des noms fictifs
    const names = ["Samuel", "Thomas", "Baptiste", "Alice"];

    // Trier les noms par ordre alphabétique
    names.sort((a, b) => a.localeCompare(b));

    // Répartition fixe des équipes
    const teamColors = {
        "Samuel": "bleue",
        "Thomas": "bleue",
        "Baptiste": "bleue",
        "Alice": "rouge",
        // Ajoute ici tous les noms jusqu'à nom55 avec leur couleur d'équipe
    };

    // Remplir la liste déroulante avec les noms triés
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
        const colors = {
            "bleue": "#3498db",
            "rouge": "#e74c3c",
            "jaune": "#f1c40f",
            "verte": "#2ecc71"
        };
        document.body.style.backgroundColor = colors[teamName];
        document.body.innerHTML = `<h1 style="color: white;">Vous êtes dans l'équipe ${teamName}!</h1>`;
    });
});
