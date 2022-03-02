console.log('it works')

const authorCard = document.querySelector('.author-card')
const shareCard = document.querySelector('.share-card')
shareCard.style.display = 'none'


function toggleShare() {
    if (shareCard.style.display === 'none') {
        shareCard.style.display = 'flex'
    } else {
        shareCard.style.display = 'none'
    }
}

window.addEventListener('click', function(event) {
    if ((event.target.matches('button.toggle-share')
    || (event.target.matches('img.toggle-share'))
    )) {
        console.log('toggled clicked')
        toggleShare()
    }
    else if ((event.target.matches('.share-card')) ||
    (event.target.matches('.share-info'))
    ) {
        console.log('do nothing')
    } else if (shareCard.style.display === 'flex') {
        toggleShare()
    }
})


