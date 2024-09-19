const selectEls = document.getElementsByName('q')
const answers = {}

selectEls.forEach(el => {
    answers[el.id] = null

    el.addEventListener('change', () => {
        answers[el.id] = el.options[el.selectedIndex].value
        console.log(answers)    
    })
})