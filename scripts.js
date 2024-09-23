const selectEls = document.getElementsByName('q')
const answerButton = document.querySelector('#submitAnswers')
const result = document.querySelector('.result')
const userAnswers = {}
const answers = {
    'q1': '2',
    'q2': '4',
    'q3': '3'
}
let mistakesCounter = 0

selectEls.forEach(el => {
    userAnswers[el.id] = null

    el.addEventListener('change', () => {
        userAnswers[el.id] = el.options[el.selectedIndex].value
    })
})

answerButton.addEventListener('click', () => {
    mistakesCounter = 0
    
    for (let answer in answers) {
        const errMessage = document.querySelector(`.result_${answer}`)

        if (userAnswers[answer] !== answers[answer]) {
            errMessage.innerHTML = 'Wrong'

            mistakesCounter++
        } else {
            errMessage.innerHTML = ''
        }
    }

    result.innerHTML = mistakesCounter
})
