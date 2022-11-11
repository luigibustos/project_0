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
const boredStat = document.querySelector('#bored-stat')

// Set / Reset Name Function
function setTamName(){
    if(nameInput.value !== ''){
        nameStat.textContent = nameInput.value
        nameInput.value = ''
    }
}

function resetTamName() {
    nameStat.textContent = 'Bob the Blob'
}

resetName.addEventListener('click', resetTamName)
setName.addEventListener('click', setTamName)

// Convert Stats from String to Number
let healthLevel = parseInt(healthStat.textContent)
let hungerLevel = parseInt(hungerStat.textContent)
let sleepLevel = parseInt(sleepinesStat.textContent)
let boredLevel = parseInt(boredStat.textContent)
let ageLevel = parseInt(ageStat.textContent)

// Hunger, Sleepy, Bored Intervals

setInterval(()=> {
    if(hungerLevel < 10) {
        hungerLevel++
        healthLevel -= 4
        healthStat.textContent = healthLevel
        hungerStat.textContent = hungerLevel
    } 
}, 30000)

setInterval(()=> {
    if(sleepLevel < 10) {
        sleepLevel ++
        healthLevel -= 3
        healthStat.textContent = healthLevel
        sleepinesStat.textContent = sleepLevel
    }
}, 40000)

setInterval(() => {
    if(boredLevel < 10) {
        boredLevel ++
        healthLevel -= 3
        healthStat.textContent = healthLevel
        boredStat.textContent = boredLevel
    }
}, 50000)

// Button Functions to Reduce Hunger, Sleepiness, Bored Levels 
function feedTam() {
    if (hungerLevel > 0 && healthLevel < 100) {
        hungerLevel --
        healthLevel += 4
        ageCounter += 1
        healthStat.textContent = healthLevel
        hungerStat.textContent = hungerLevel
    }
}

function knockOutTam() {
    if (sleepLevel > 0 && healthLevel < 100) {
        sleepLevel --
        healthLevel += 3
        healthStat.textContent = healthLevel
        sleepinesStat.textContent = sleepLevel
    }
}

function playWithTam() {
    if (boredLevel > 0 && healthLevel < 100) {
        boredLevel -- 
        healthLevel += 3
        healthStat.textContent = healthLevel
        boredStat.textContent = boredLevel
    }
}

feedBtn.addEventListener('click', feedTam)
sleepBtn.addEventListener('click', knockOutTam)
playBtn.addEventListener('click', playWithTam)

// Age Interval Increase

let ageCounter = 0
const ageTimer = setInterval(() => {
    ageCounter ++
    if(ageCounter < 100) {
        console.log(ageCounter)
    } else if ( ageCounter >= 110 && ageCounter <= 200) {
        console.log(ageCounter)
        ageStat.textContent = '2'
    } else if (ageCounter > 200) {
        console.log(ageCounter)
        ageStat.textContent = '3'
    } 
    if (ageCounter === 300) {
        clearInterval(ageTimer)
        console.log('Stop ageTimer Interval')
    }
}, 1000)