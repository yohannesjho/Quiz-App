
const quizData = [
    {
        question:'how old is yohannes?',
        a:'10',
        b:'30',
        c:'23',
        d:'22',
        correct:'d',
    },
    {
      question:'what is the most used programming language in 2022?',
      a:'Java',
      b:'C',
      c:'Python',
      d:'Javascript',
      correct:'d',

    },
    {
        question:'who is the prime minister of Ethiopia',
        a:'Abiy Ahmed(dr)',
        b:'Sahlework Zewde',
        c:'Dagmawit Moges',
        d:'Yohannes Fikre',
        correct:'a',

    },
    {
        question:'what does HTML stands for?',
        a:'HyperText Markup Language',
        b:'Cascading stylesheet',
        c:'Jason Object Notation',
        d:'higher traffic modal language',
        correct:'a',
     },
     {
        question:'what year was javascript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'d',
     }

]
 
 

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});