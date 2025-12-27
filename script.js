let questions = {
    web: [
        { q: "HTML stands for?", o: ["Hyper Text Markup Language", "High Text ML"], a: 0 },
        { q: "CSS is used for?", o: ["Styling", "Logic"], a: 0 }
    ],
    math: [
        { q: "6 + 4 = ?", o: ["8", "10"], a: 1 },
        { q: "10 x 3 = ?", o: ["30", "25"], a: 0 }
    ],
    gk: [
        { q: "National Animal of India", o: ["Lion", "Tiger"], a: 1 },
        { q: "Capital of India?", o: ["Delhi", "Mumbai"], a: 0 }

    ]
};
let quiz = [];
let index = 0;
let score = 0;

function startQuiz() {
    let category = document.getElementById("category").value;
    quiz = shuffle(questions[category]);
    document.getElementById("startScreen").classList.add("hide");
    document.getElementById("quizScreen").classList.remove("hide");
    showQuestion();
}
function showQuestion() {
    let q = quiz[index];
    document.getElementById("question").innerText = q.q;
    let optionsHTML = "";
    q.o.forEach((opt, i) => {
        optionsHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
    document.getElementById("progress").style.width = ((index + 1) / quiz.length) * 100 + "%";
}
function checkAnswer(i) {
    if (i === quiz[index].a) score++;
    index++;
    index < quiz.length ? showQuestion() : showResult();
}

function showResult() {
    document.getElementById("quizScreen").classList.add("hide");
    document.getElementById("resultScreen").classList.remove("hide");
    document.getElementById("scoreText").innerText = `Your Score: ${score} / ${quiz.length}`;

}
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}