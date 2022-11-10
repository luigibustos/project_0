// Game Mech
//Health = 90 
// Age = 0
//Total Point = 0 
// Hunger 1 - 10
// Sleepines 1 - 10
//Border 1 - 10
// Feed = -1
// Sleep = - 5
// Play = - 3

// HTML Elements

// Name Buttons
const nameInput = document.querySelector('#name-input')
const setName = document.querySelector('#set-name')
const resetName = document.querySelector('#reset-name')

//Game Buttons
const feedBtn = document.querySelector('#feed')
const sleepBtn = document.querySelector('#sleep')
const playBtn = document.querySelector('#play')

// Game Character Indicators
const healthStat = document.querySelector('#health-stat')
const nameStat = document.querySelector('#name-stat')
const ageStat = document.querySelector('#age-stat')
const hungerStat = document.querySelector('#hunger-stat')
const sleepinesStat = document.querySelector('#sleepiness-stat')
const bordStat = document.querySelector('#bord-stat')

// Set / Reset Name Function
function setTamName(){
    if(nameInput.value !== ''){
        nameStat.textContent = nameInput.value
        nameInput.value = ''
    }
}

function resetTamName() {
    nameStat.textContent = 'Blob'
}

resetName.addEventListener('click', resetTamName)
setName.addEventListener('click', setTamName)
