const selectEls = document.getElementsByName('q')
const answerButton = document.querySelector('#submitAnswers')
const userAnswers = {}
const answers = {
    'q1': '2',
    'q2': '4',
    'q3': '3'
}

selectEls.forEach(el => {
    userAnswers[el.id] = null

    el.addEventListener('change', () => {
        userAnswers[el.id] = el.options[el.selectedIndex].value
    })
})

answerButton.addEventListener('click', () => {
    for (let answer in answers) {
        if (userAnswers[answer] !== answers[answer]) {
            console.log('mistake found')

            return
        }
    }

    console.log('no mistakes found')
})
