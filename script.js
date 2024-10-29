document.addEventListener("DOMContentLoaded", () => {
    // Liste de prénoms prédéfinie
    const names = ["Lionel", "Thomas", "Sophie", "Alice", "Marie", "Jean", "Marc", "Luc", "Emma", "Paul", "Julie", "Nathalie", "Caroline", "Antoine", "Isabelle"];
    
    // Trier les prénoms par ordre alphabétique
    names.sort((a, b) => a.localeCompare(b));

    // Répartition fixe des équipes pour chaque prénom
    const teamColors = {
        "Lionel": "bleue",
        "Thomas": "rouge",
        "Sophie": "jaune",
        "Alice": "verte",
        "Marie": "bleue",
        "Jean": "rouge",
        "Marc": "jaune",
        "Luc": "verte",
        "Emma": "bleue",
        "Paul": "rouge",
        "Julie": "jaune",
        "Nathalie": "verte",
        "Caroline": "bleue",
        "Antoine": "rouge",
        "Isabelle": "jaune",
        // Ajoute d'autres prénoms et leurs couleurs ici
    };

    // Remplir la liste déroulante avec les prénoms triés
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

    // Gestion de la sélection du prénom
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
        document.body.innerHTML = `<h1 style="color: white;">Tu es dans l'équipe ${teamName}!</h1>`;
    });
});
