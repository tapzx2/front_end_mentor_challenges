console.log('it works')

const authorCard = document.querySelector('.author-card')
const shareCard = document.querySelector('.share-card')

function showShare() {
    if (shareCard.classList.contains('toggle-off')) {
        authorCard.classList.add('toggle-off')
        shareCard.classList.remove('toggle-off')
        console.log('showing share info')
    }
}

function showAuthor() {
    if (authorCard.classList.contains('toggle-off')) {
        shareCard.classList.add('toggle-off')
        authorCard.classList.remove('toggle-off')
        console.log('showing author info')
    }
}

window.addEventListener('click', function(event) {
    if ((event.target.matches('.share-card')) ||
    (event.target.matches('.share-info'))
    ) {
        console.log('do nothing')
    } else {
        showAuthor()
    }
})

window.addEventListener('click', function(event) {
    if ((event.target.matches('.show-share') )) {
        console.log('clicked')
        showShare()
    }
})



