"use strict"

import { 
    gettingWand,
    attackWand,
    healWand,
    hidingWand,
    hidingBook,
    gettingBook
} from './animations.js'
// ZMIENNE GLOBALNE



document.querySelector('.player-card').classList.add('card-turn')




const wandButton = document.querySelector('#wand')
const bookButton = document.querySelector('#book')
const return1Button = document.querySelector('#return1')
const return2Button = document.querySelector('#return2')
const wandAttack = document.querySelector('#wandAttack')
const wandHeal = document.querySelector('#wandHeal')
const attackMain = document.querySelectorAll('.attack-main')
const attack1Button = document.querySelectorAll('.attack1-button')
const attack2Button = document.querySelectorAll('.attack2-button')


// FIRST WEAPON BUTTONS
wandButton.onclick = () => {
    gettingWand()

    attackMain.forEach(button => {
        button.style.display = 'none'
    });

    attack1Button.forEach(button => {
        button.style.display = 'block'
    });

    attack2Button.forEach(button => {
        button.style.display = 'none'
    });
}


// SECOND WEAPON BUTTONS
bookButton.onclick = () => {
    gettingBook()

    attackMain.forEach(button => {
        button.style.display = 'none'
    });

    attack1Button.forEach(button => {
        button.style.display = 'none'
    });

    attack2Button.forEach(button => {
        button.style.display = 'block'
    });
}



// MAIN BUTTONS
return1Button.onclick = () => {
    hidingWand()

    attackMain.forEach(button => {
        button.style.display = 'block'
    });

    attack1Button.forEach(button => {
        button.style.display = 'none'
    });

    attack2Button.forEach(button => {
        button.style.display = 'none'
    });
}


return2Button.onclick = () => {
    hidingBook()

    attackMain.forEach(button => {
        button.style.display = 'block'
    });

    attack1Button.forEach(button => {
        button.style.display = 'none'
    });

    attack2Button.forEach(button => {
        button.style.display = 'none'
    });
}



wandAttack.onclick = attackWand
wandHeal.onclick = healWand







