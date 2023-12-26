let containerEl = document.querySelector(".container")
let btnEl = document.querySelector(".btn")
let popEl = document.querySelector(".popup-container")
let iconEl = document.querySelector(".close-icon")

btnEl.addEventListener('click', () => {
    containerEl.classList.add("active");
    popEl.classList.remove("active");
    
})

iconEl.addEventListener('click', () => {
    containerEl.classList.remove("active")
    popEl.classList.add("active")
    
})