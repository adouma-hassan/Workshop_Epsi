const questions = [
    // Thème: Santé mentale
    {
        question: "À quelle fréquence vous sentez-vous triste ou déprimé ?",
        options: [
            { text: "Rarement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Souvent", value: 50 },
            { text: "Toujours", value: 75 }
        ]
    },
    {
        question: "Avez-vous du mal à vous concentrer sur vos tâches quotidiennes ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },
    {
        question: "À quelle fréquence vous sentez-vous fatigué ou sans énergie ?",
        options: [
            { text: "Rarement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Souvent", value: 50 },
            { text: "Toujours", value: 75 }
        ]
    },
    {
        question: "Avez-vous pensé à demander de l'aide récemment ?",
        options: [
            { text: "Non, jamais", value: 0 },
            { text: "Peut-être", value: 25 },
            { text: "Oui, mais je ne l'ai pas fait", value: 50 },
            { text: "Oui, je le fais", value: 75 }
        ]
    },
    {
        question: "Comment évaluez-vous votre niveau de satisfaction dans vos relations ?",
        options: [
            { text: "Très satisfait", value: 0 },
            { text: "Satisfait", value: 25 },
            { text: "Insatisfait", value: 50 },
            { text: "Très insatisfait", value: 75 }
        ]
    },

    // Thème: Stress et Anxiété
    {
        question: "Ressentez-vous souvent du stress ?",
        options: [
            { text: "Rarement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Souvent", value: 50 },
            { text: "Toujours", value: 75 }
        ]
    },
    {
        question: "Avez-vous des pensées négatives fréquentes ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },
    {
        question: "Éprouvez-vous des difficultés à gérer vos émotions ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },
    {
        question: "Ressentez-vous des palpitations ou des douleurs à la poitrine sans raison médicale ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },
    {
        question: "Vous sentez-vous dépassé par vos obligations ?",
        options: [
            { text: "Rarement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Souvent", value: 50 },
            { text: "Toujours", value: 75 }
        ]
    },

    // Thème: Vie sociale
    {
        question: "Avez-vous des amis proches ?",
        options: [
            { text: "Oui, beaucoup", value: 0 },
            { text: "Quelques-uns", value: 25 },
            { text: "Peu", value: 50 },
            { text: "Aucun", value: 75 }
        ]
    },
    {
        question: "Participez-vous à des activités sociales ?",
        options: [
            { text: "Oui, souvent", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Rarement", value: 50 },
            { text: "Jamais", value: 75 }
        ]
    },
    {
        question: "Ressentez-vous de la solitude même en étant entouré ?",
        options: [
            { text: "Rarement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Souvent", value: 50 },
            { text: "Toujours", value: 75 }
        ]
    },
    {
        question: "Êtes-vous satisfait de votre vie sociale ?",
        options: [
            { text: "Très satisfait", value: 0 },
            { text: "Satisfait", value: 25 },
            { text: "Insatisfait", value: 50 },
            { text: "Très insatisfait", value: 75 }
        ]
    },
    {
        question: "Avez-vous des difficultés à établir des relations ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },

    // Thème: Vie professionnelle
    {
        question: "Êtes-vous satisfait de votre travail ?",
        options: [
            { text: "Très satisfait", value: 0 },
            { text: "Satisfait", value: 25 },
            { text: "Insatisfait", value: 50 },
            { text: "Très insatisfait", value: 75 }
        ]
    },
    {
        question: "Avez-vous des conflits avec vos collègues ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },
    {
        question: "Ressentez-vous du stress au travail ?",
        options: [
            { text: "Rarement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Souvent", value: 50 },
            { text: "Toujours", value: 75 }
        ]
    },
    {
        question: "Avez-vous l'impression que votre travail est reconnu ?",
        options: [
            { text: "Oui, souvent", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Rarement", value: 50 },
            { text: "Jamais", value: 75 }
        ]
    },
    {
        question: "Êtes-vous en mesure d'équilibrer votre travail et votre vie personnelle ?",
        options: [
            { text: "Oui, parfaitement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Rarement", value: 50 },
            { text: "Jamais", value: 75 }
        ]
    },

    // Thème: État de santé
    {
        question: "Faites-vous régulièrement de l'exercice physique ?",
        options: [
            { text: "Oui, régulièrement", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Rarement", value: 50 },
            { text: "Jamais", value: 75 }
        ]
    },
    {
        question: "Avez-vous une alimentation équilibrée ?",
        options: [
            { text: "Oui, toujours", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Rarement", value: 50 },
            { text: "Jamais", value: 75 }
        ]
    },
    {
        question: "Dormez-vous suffisamment chaque nuit ?",
        options: [
            { text: "Oui, toujours", value: 0 },
            { text: "Parfois", value: 25 },
            { text: "Rarement", value: 50 },
            { text: "Jamais", value: 75 }
        ]
    },
    {
        question: "Consommez-vous des substances nocives (tabac, alcool, etc.) ?",
        options: [
            { text: "Pas du tout", value: 0 },
            { text: "Un peu", value: 25 },
            { text: "Oui, souvent", value: 50 },
            { text: "Très souvent", value: 75 }
        ]
    },
    {
        question: "Avez-vous des problèmes de santé non résolus ?",
        options: [
            { text: "Non", value: 0 },
            { text: "Peut-être", value: 25 },
            { text: "Oui", value: 50 },
            { text: "Oui, beaucoup", value: 75 }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

let themeScores = {
    "Santé mentale": 0,
    "Stress et Anxiété": 0,
    "Vie sociale": 0,
    "Vie professionnelle": 0,
    "État de santé": 0,
};

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const progressElement = document.getElementById("progress");

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => selectOption(option.value, question);
        optionsElement.appendChild(button);
    });

    progressElement.textContent = `Question ${currentQuestionIndex + 1} sur ${questions.length}`;
}

function selectOption(value, question) {
    score += value;

    // Mettez à jour le score par thème en fonction de l'index de la question
    if (currentQuestionIndex < 5) {
        themeScores["Santé mentale"] += value;
    } else if (currentQuestionIndex < 10) {
        themeScores["Stress et Anxiété"] += value;
    } else if (currentQuestionIndex < 15) {
        themeScores["Vie sociale"] += value;
    } else if (currentQuestionIndex < 20) {
        themeScores["Vie professionnelle"] += value;
    } else if (currentQuestionIndex < 25) {
        themeScores["État de santé"] += value;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    const resultElement = document.createElement("div");
    resultElement.innerHTML = `<h2>Résultats</h2><p>Votre score total : ${score}</p>`;
    
    // Affichage des scores par thème
    Object.keys(themeScores).forEach(theme => {
        const themeScore = themeScores[theme];
        const percentage = ((themeScore / (questions.length / 5 * 75)) * 100).toFixed(2);
        resultElement.innerHTML += `<p>${theme}: ${themeScore} (${percentage}%)</p>`;
    });

    // Ajouter un numéro d'aide
    resultElement.innerHTML += `<p>Si vous avez besoin d'aide, n'hésitez pas à contacter notre ligne d'assistance au : <strong>0972394050</strong></p>`;

    quizContainer.appendChild(resultElement);
}

showQuestion();
