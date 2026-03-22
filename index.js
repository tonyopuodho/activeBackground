const previousBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const containerElement = document.querySelector(".content")

const numbers = 10
let current = 0

function displayNumbers(){
    for( let i = 1; i < numbers; i++) {
        containerElement.innerHTML += `
           <span class="numbers ${i === 1 ? 'active' : ''}" data =${i}>${i}</span>
        `
    }
}

displayNumbers()

function activeBackground(active){
    document.querySelectorAll('.numbers').forEach((item) => {
        item.classList.remove('active')
    })

    document.querySelector(`.numbers[data="${active}"]`).classList.add('active')
}

nextBtn.addEventListener('click',() => {
    if (0 < numbers) {
        current += 1
    }
    if (current === numbers) {
        current = 1
    }
    activeBackground(current)
})

previousBtn.addEventListener('click',() => {
    if ( 0 < current) {
        current--
    } 
    if (current === 0){
        current = numbers - 1
    }
    console.log(current)
    activeBackground(current)
})
