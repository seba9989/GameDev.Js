export function normalIdle() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/mage-normal.gif"
}


//book animations

export function gettingBook() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/getting-book.gif"

    setTimeout(bookIdle, 1100)
}

export function bookIdle() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/book-normal.gif"
}

export function hidingBook() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/hiding-book.gif"

    setTimeout(normalIdle, 1100)
}



//wand animations

export function gettingWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-getting.gif"

    setTimeout(wandIdle, 2000)
}

export function wandIdle() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-idle.gif"
}

export function hidingWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-hiding.gif"

    setTimeout(normalIdle, 1000)
}

export function attackWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-attack.gif"

    setTimeout(wandIdle, 2000)
}

export function healWand() {
    let spritePlayer = document.querySelector('.character img')

    spritePlayer.src = "../img/characters/mage/wand-heal.gif"

    setTimeout(wandIdle, 3800)
}




