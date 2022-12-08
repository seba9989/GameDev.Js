//random characters in main menu

const randomCharacter = Math.floor(Math.random() * 2) + 1

let imgContainer = document.querySelector('.characters')
imgContainer.innerHTML = '<img class="character-img" src="../img/characters-for-index/' + randomCharacter + '.png">'    

