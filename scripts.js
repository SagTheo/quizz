const selectEls = document.getElementsByName('q')

selectEls.forEach(el => {
    el.addEventListener('change', () => {
        console.log(el.options[el.selectedIndex].value)    
    })
})