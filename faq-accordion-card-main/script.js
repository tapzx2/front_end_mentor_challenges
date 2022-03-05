console.log('it works')

// if button is clicked, add style, expand acordian
// if button has style already and is clicked, remove style, colapse acoridan

window.addEventListener('click', function(event) {
    if (event.target.matches('button') &&
    event.target.classList.contains('active')) {
        event.target.classList.remove('active')
    } else if (event.target.matches('button')) {
        event.target.classList.add('active')
        console.log('active added')
    }
})