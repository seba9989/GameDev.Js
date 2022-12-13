// ANIMATIONS IMPORT 
import * as animate from "./animations.js"

document.querySelector('.player-card').classList.add('card-turn')


function wandButtons() {

    gettingWand()

    document.querySelector('.attack-buttons').innerHTML = '<button onclick="returnMainButtons()" class="return-button"><img src="../img/buttons/return-button.png" alt=""></button><button onclick="attackWand()" class="attack-button attack1-button">Attack</button><button onclick="healWand()" class="attack-button attack2-button">Heal</button><button onclick="healWand()" class="attack-button attack2-button">Attack</button>'

    document.querySelector('.return-button').style.display = 'block'
}

function returnMainButtons() {

    hidingWand()

    document.querySelector('.attack-buttons').innerHTML = '<button onclick="returnMainButtons()" class="return-button"><img src="../img/buttons/return-button.png" alt=""></button><button onclick="wandButtons()" class="attack-button attack1-button">Wand</button><button class="attack-button attack2-button">Book</button><button class="attack-button attack2-button">Skip</button>'
}






