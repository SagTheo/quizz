const selectEls = document.getElementsByName('q')
const radioQuizz = document.getElementsByClassName('radioQuizz')
const arrAnswers = Array.from(radioQuizz)
const answerButtonQ1 = document.querySelector('#submitAnswersQ1')
const answerButtonQ2 = document.querySelector('#submitAnswersQ2')
const result = document.querySelector('.result')
const resultV2 = document.querySelector('.resultV2')
const userAnswers = {}
const userAnswersV2 = {}
const answers = {
    'q1': '2',
    'q2': '4',
    'q3': '3'
}
const answersV2 = {
    'q1_V2': '2',
    'q2_V2': '3',
    'q3_V2': '4'
}
let mistakesCounter = 0
let mistakesCounterV2 = 0
let errSign = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>'

// needs more work: hiding error icon when going from wrong answer to Choose an answer
selectEls.forEach(el => {
    el.addEventListener('change', () => {
        userAnswers[el.id] = el.options[el.selectedIndex].value
    })
})

answerButtonQ1.addEventListener('click', () => {
    console.log(userAnswers)
    mistakesCounter = 0
    let answersCounter = 0

    for (let answer in answers) {
        const errMessage = document.querySelector(`.result_${answer}`)

        if (userAnswers[answer]) {
            if (userAnswers[answer] === 'title') {
                result.innerHTML = 'You must answer all the questions'
    
                return 
            }

            answersCounter++

            if (userAnswers[answer] !== answers[answer]) {
                errMessage.innerHTML = errSign

                mistakesCounter++
            } else {
                errMessage.innerHTML = ''
            }
        }  
    }

    if (answersCounter !== 3) {
        result.innerHTML = 'You must answer all the questions'
    } else if (mistakesCounter === 0 || mistakesCounter > 1) {
        result.innerHTML = `You made ${mistakesCounter} mistakes`
    } else {
        result.innerHTML = `You made ${mistakesCounter} mistake`
    }  
})


// Quizz v2
answerButtonQ2.addEventListener('click', () => {
    mistakesCounterV2 = 0
    let answered = 0

    for (let i = 0; i < arrAnswers.length; i++) {
        const arrInputs = arrAnswers[i].elements
        const id = arrAnswers[i].id

        for (let j = 0; j < arrInputs.length; j++) {
            if (arrInputs[j].checked) {
                answered++

                if (arrInputs[j].defaultValue !== answersV2[id]) {
                    mistakesCounterV2++
                }
            }
        }
    }

    if (answered === arrAnswers.length) {
        if (mistakesCounterV2 === 0 || mistakesCounterV2 > 1) {
            resultV2.innerHTML = `You made ${mistakesCounterV2} mistakes`
        } else {
            resultV2.innerHTML = `You made ${mistakesCounterV2} mistake`
        }    
    } else {
        resultV2.innerHTML = 'You must answer all the questions'
    }
})