//random characters in main menu

const randomCharacter = Math.floor(Math.random() * 2) + 1

let imgContainer = document.querySelector('.characters')
imgContainer.innerHTML = '<img class="character-img" src="../img/characters-for-index/' + randomCharacter + '.png">'  

const bgImage = document.querySelector('.background')
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
let correctPlus = true
let correctMinus = true

if(windowWidth / 16 != windowHeight / 9) {
    bgImage.classList.toggle('smaller-width')
}



