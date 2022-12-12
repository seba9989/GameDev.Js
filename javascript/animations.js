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

    setTimeout(wandIdle, 3800)
}



