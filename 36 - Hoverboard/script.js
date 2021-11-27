const container = document.getElementById('container')
const colors = ['#652EC7', '#8e44ad', '#DE38C8', '#DE3BC8', '#b2c3', '#b27c']
const SQUARES = 272

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #100'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}