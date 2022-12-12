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







// ANIMATIONS

function normalIdle() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/mage-normal.gif"
    console.log(spritePlayer.src)
}


//book animations

function gettingBook() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/getting-book.gif"
    console.log(spritePlayer.src)

    setTimeout(bookIdle, 1100)
}

function bookIdle() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/book-normal.gif"
    console.log(spritePlayer.src)
}

function hidingBook() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/hiding-book.gif"
    console.log(spritePlayer.src)

    setTimeout(normalIdle, 1100)
}



//wand animations

function gettingWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-getting.gif"
    console.log(spritePlayer.src)

    setTimeout(wandIdle, 2000)
}

function wandIdle() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-idle.gif"
    console.log(spritePlayer.src)
}

function hidingWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-hiding.gif"
    console.log(spritePlayer.src)

    setTimeout(normalIdle, 1000)
}

function attackWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-attack.gif"
    console.log(spritePlayer.src)

    setTimeout(wandIdle, 2000)
}

function healWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-heal.gif"
    console.log(spritePlayer.src)

    setTimeout(wandIdle, 4000)
}
