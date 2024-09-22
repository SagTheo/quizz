const selectEls = document.getElementsByName('q')
const answerButton = document.querySelector('#submitAnswers')
const result = document.querySelector('.result')
const userAnswers = {}
const answers = {
    'q1': '2',
    'q2': '4',
    'q3': '3'
}
let success = true

selectEls.forEach(el => {
    userAnswers[el.id] = null

    el.addEventListener('change', () => {
        userAnswers[el.id] = el.options[el.selectedIndex].value
    })
})

answerButton.addEventListener('click', () => {
    success = true
    
    for (let answer in answers) {
        if (userAnswers[answer] !== answers[answer]) {
            success = false
        }
    }

    if (success) {
        result.innerHTML = 'No mistakes'
    } else {
        result.innerHTML = 'Mistakes found'
    }
})
