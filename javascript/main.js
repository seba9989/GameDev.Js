"use strict"

import { 
    gettingWand,
    attackWand,
    healWand
} from './animations.js'
// ZMIENNE GLOBALNE





document.querySelector('.player-card').classList.add('card-turn')

let attackButtons = document.querySelector('.attack-buttons').innerHTML
const wandButton = document.querySelector('.wand')



function wandButtons() {

    gettingWand()


    document.querySelector('.attack-buttons').innerHTML = '<button onclick="returnMainButtons()" class="return-button"><img src="../img/buttons/return-button.png" alt=""></button>'

    // ADDING FIRST ATTACK BUTTON
    const newAttack1 = document.createElement('div')
    newAttack1.innerText = "Attack"
    newAttack1.classList.add('attack-button')
    document.querySelector('.attack-buttons').appendChild(newAttack1)
    newAttack1.addEventListener('click', attackWand)

    

    // ADDING FIRST ATTACK BUTTON
    const newAttack2 = document.createElement('div')
    newAttack2.innerText = "Heal"
    newAttack2.classList.add('attack-button')
    document.querySelector('.attack-buttons').appendChild(newAttack2)
    newAttack2.addEventListener('click', healWand)


    document.querySelector('.return-button').style.display = 'block'
}
wandButton.addEventListener('click', wandButtons)



function returnMainButtons() {

    hidingWand()

    document.querySelector('.attack-buttons').innerHTML = '<button onclick="returnMainButtons()" class="return-button"><img src="../img/buttons/return-button.png" alt=""></button><button onclick="wandButtons()" class="attack-button attack1-button">Wand</button><button class="attack-button attack2-button">Book</button><button class="attack-button attack2-button">Skip</button>'
}






// ANIMATIONS 


// function normalIdle() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/mage-normal.gif"
// }


// //book animations

// function gettingBook() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/getting-book.gif"

//     setTimeout(bookIdle, 1100)
// }

// function bookIdle() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/book-normal.gif"
// }

// function hidingBook() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/hiding-book.gif"

//     setTimeout(normalIdle, 1100)
// }



// //wand animations

// function gettingWand() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/wand-getting.gif"

//     setTimeout(wandIdle, 2000)
// }

// function wandIdle() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/wand-idle.gif"
// }

// function hidingWand() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/wand-hiding.gif"

//     setTimeout(normalIdle, 1000)
// }

// function attackWand() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/wand-attack.gif"

//     setTimeout(wandIdle, 2000)
// }

// function healWand() {
//     let spritePlayer = document.querySelector('.character img')

//     spritePlayer.src = "../img/characters/mage/wand-heal.gif"

//     setTimeout(wandIdle, 3800)
// }