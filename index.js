const previousBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const containerElement = document.querySelector(".content")

const numbers = 10

function displayNumbers(){
    for( let i = 1; i < numbers + 1; i++) {
        containerElement.innerHTML += `
           <span class="numbers ${i === 1 ? 'active' : ''}">${i}</span>
        `
    }
}

displayNumbers()

