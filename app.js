let RANDOM_QUTO_API_URL = "http://api.quotable.io/random"
let qutoDisplay = document.getElementById("qutoDisplay")
let qutoInputElement = document.getElementById("qutoİnput")
let timerElement = document.getElementById("timer")


qutoInputElement.addEventListener("input", () => {
    let arrayQuto = qutoDisplay.querySelectorAll("span")
    let arrayValue = qutoInputElement.value.split("")
    arrayQuto.forEach((characterSpan, index) => {
        let character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove("corrent")
            characterSpan.classList.remove("incorrent")

        } else if (character === characterSpan.innerHTML) {
            characterSpan.classList.add("corrent")
            characterSpan.classList.remove("incorrent")

        } else {
            characterSpan.classList.remove("corrent")
            characterSpan.classList.add("incorrent")
        }
    })
})

function getRandomNumber() {
    return fetch(RANDOM_QUTO_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQute() {
    let quto = await getRandomNumber()
    qutoDisplay.innerHTML = ""
    quto.split("").forEach(character => {
        let characterSpan = document.createElement("span")
        characterSpan.innerText = character
        qutoDisplay.appendChild(characterSpan)
    })
    qutoInputElement.value = ""
    startTimer()
}

let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    },1000)
}

function getTimerTime(){
    return Math.floor((new Date() - startTime) / 1000)
}
getRandomNumber()
renderNewQute()