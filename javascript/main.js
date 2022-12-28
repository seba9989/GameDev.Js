"use strict"

import * as global from './global.js'

import * as animate from './animations.js'
// ZMIENNE GLOBALNE



document.querySelector('.player-card').classList.add('card-turn')

// placeholder wybor postaci etc.

const hpPlayer = global.hpMage
const energyPlayer = global.energyMage
const dmgPlayer = global.dmgMage
const armorPlayer = global.armorMage
const dodgePlayer = global.dodgeMage
const critChancePlayer = global.critChanceMage
const critPlayer = global.critMage


// randomise battle

let amountEnemies = Math.ceil(Math.random() * 2) + 1



function enemiesStart(amountEnemies) {
    for(let i = 0; i <= amountEnemies; i++) {
        let enemyType = Math.ceil(Math.random() * 1) + 1
        if(enemyType == 1) {
            global.ememiesStats[i] == global.enemy1
        }
        else if (enemyType == 2) {
            global.ememiesStats[i] == global.enemy2
        }
    }
}



// battle 

while ((hpPlayer > 0) || (global.enemiesStats[0][0] + global.enemiesStats[1][0] + global.enemiesStats[2][0] > 0)) {
        wandAttack.onclick = () => {
            console.log("ok")
        }
    }














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
    animate.gettingWand()

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
    animate.gettingBook()

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
    animate.hidingWand()

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
    animate.hidingBook()

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




wandHeal.onclick = animate.healWand








