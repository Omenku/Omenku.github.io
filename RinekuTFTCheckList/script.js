function toggleOverlay(card) {
    var overlayText = card.querySelector('.overlay-text');
    overlayText.classList.toggle('active');
    card.classList.toggle('active-bg');
}

function toggleAll(){
    var allCards = document.querySelectorAll('.card');
    for (var i=0; i<allCards.length; i++){
        var overlayText = allCards[i].querySelector('.overlay-text');
        if(allCards[i].classList.contains('active-bg')){
            overlayText.classList.toggle('active');
            allCards[i].classList.toggle('active-bg');
        }       
    }
}