'use strict'

// Variables

const userNumber = document.querySelector('.js-user-number')
const button = document.querySelector('.js-button')
const message = document.querySelector('.js-message')
const attempts = document.querySelector('.js-attempts')


// Variables globales
const randomNumber = getRandomNumber(100)
let acc = 1;


// Funciones
function showAttempts() {
    const totalAttempt = acc++
    attempts.innerHTML = `Número de intentos: ${totalAttempt}`
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}

function guessRandomNumber() {
    const userNumberValue = parseInt(userNumber.value)

    // Este es el número aleatorio
    console.log(`El número aleatorio es: ${randomNumber}`)
    
    if (userNumberValue < 1 || userNumberValue > 100) {
        message.innerHTML = 'Pista: El número debe estar entre 1 y 100'
    } else if (userNumberValue === randomNumber) {
        message.innerHTML = 'Pista: Has ganado campeona!!!'
    } else if (userNumberValue < randomNumber) {
        message.innerHTML = 'Pista: Demasiado bajo'
    } else {
        message.innerHTML = 'Pista: Demasido alto'
    }
}

function handleClick(event) {
    event.preventDefault()
    guessRandomNumber()
    showAttempts()
}


// Eventos

button.addEventListener('click', handleClick)