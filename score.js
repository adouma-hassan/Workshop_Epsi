// score.js
const questions = [
    // Questions comme précédemment
    // ...
];

function displayScores() {
    const scoresContainer = document.getElementById('scores-container');

    const scores = {
        'Santé mentale': 0,
        'Stress et Anxiété': 0,
        'Vie sociale': 0,
        'Vie professionnelle': 0,
        'État de santé': 0
    };

    const themeThreshold = 75; // Valeur seuil pour déterminer si une question est négative
    let totalQuestions = questions.length;

    // Calcule les scores
    questions.forEach((question, index) => {
        const selectedValue = localStorage.getItem(`answer${index}`) || 0; // Récupère les réponses stockées
        const themeIndex = Math.floor(index / 5); // Chaque thème a 5 questions
        const themes = Object.keys(scores);
        const theme = themes[themeIndex];

        // Si la réponse est négative, on augmente le score
        if (selectedValue > themeThreshold) {
            scores[theme] += parseInt(selectedValue); // Assurez-vous de convertir en nombre
        }
    });

    // Calcule le pourcentage global
    let totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    let percentage = (totalScore / (totalQuestions * 75)) * 100;

    // Affiche les scores pour chaque thème
    Object.entries(scores).forEach(([theme, score]) => {
        const themeDiv = document.createElement('div');
        themeDiv.innerHTML = `<strong>${theme} :</strong> ${score}`;
        scoresContainer.appendChild(themeDiv);
    });

    // Affiche le pourcentage global
    const globalDiv = document.createElement('div');
    globalDiv.innerHTML = `<strong>Pourcentage global :</strong> ${percentage.toFixed(2)}%`;
    scoresContainer.appendChild(globalDiv);
}

// Fonction pour revenir au quiz
function goBack() {
    window.location.href = 'index.html'; // Remplacez par le nom de votre fichier de quiz
}

// Démarre l'affichage des scores
displayScores();
