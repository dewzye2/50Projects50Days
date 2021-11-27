const quizData = [
    {
        question: "Em que ano foi criado o basquete?",
        a: "1912",
        b: "1905",
        c: "1895",
        d: "1891",
        correct: "d",
    },
    {
        question: "Quantos fusos horários existem no Brasil",
        a: "5",
        b: "4",
        c: "3",
        d: "2",
        correct: "b",
    },
    {
        question: "Quantos continentes existem no mundo?",
        a: "6",
        b: "5",
        c: "7",
        d: "4",
        correct: "a",
    },
    {
        question: "Quando foi inventado o plástico?",
        a: "1929",
        b: "1909",
        c: "1894",
        d: "1900",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getselected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score} das ${quizData.length} questões!
            
                <button onclick="location.reload()">Tentar novamente</button>
            `
        }

    }
})