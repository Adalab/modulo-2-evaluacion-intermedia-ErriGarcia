'use strict'

// VARIABLES

const userNumber = document.querySelector('.js-user-number')
const button = document.querySelector('.js-button')
const message = document.querySelector('.js-message')
const attempts = document.querySelector('.js-attempts')


// GLOBAL VARIABLES

const randomNumber = getRandomNumber(100)
let totalAttempts = 0


// FUNCTIONS

// Function to show numbers of attempts
const showAttempts = () => {
        totalAttempts++
        attempts.innerHTML = `Número de intentos: ${totalAttempts}`
}


// Function to get a random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}

// Function for the message
const showMessage = (messageResult) => {
    message.innerHTML = messageResult;
}

// Function to remove class start-message
const removeStartMessageClass = () => {
    message.classList.remove('start-message')
}

// Function to guess the random number
const guessRandomNumber = () => {
    const userNumberValue = parseInt(userNumber.value)
    console.log(`El número de la usuaria es: ${userNumberValue}`)

    // Random number
    console.log(`El número aleatorio es: ${randomNumber}`)
    if (isNaN(userNumberValue)) {
        message.innerHTML = 'Pista: Escribe el número y dale a Prueba'
        message.classList.add('start-message')
    } else if (userNumberValue < 1 || userNumberValue > 100) {
        removeStartMessageClass()
        showMessage('Pista: El número debe estar entre 1 y 100')
    } else if (userNumberValue === randomNumber) {
        removeStartMessageClass
        showMessage('Has ganado campeona!!!')
    } else if (userNumberValue < randomNumber) {
        removeStartMessageClass
        showMessage('Pista: Demasiado bajo')
    } else {
        removeStartMessageClass
        showMessage('Pista: Demasido alto')
    }
}


// Handle function
const handleClick = (event) => {
    event.preventDefault()
    guessRandomNumber()
    showAttempts()
}


// EVENTS

button.addEventListener('click', handleClick)