
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let intervalId = 0
let score = 0
let isLeftArrow = false
let isRightArrow = false
let isUpArrow = false
let isDownArrow = false
let backImg = document.createElement("img")
backImg.src = '/images/aline-costa-neve.jpg'

let charImg = document.createElement("img")
charImg.src = '/images/yeti.png'

let snowImg = document.createElement("img")
snowImg.src = '/images/png-transparent-club-penguin-snowball-snowballs-s-blue-game-logo.png'

let reindeerImg = document.createElement('img')
reindeerImg.src = '/images/unnamed.png'

document.addEventListener('keydown', (event) =>{
    console.log(event.key)
    if(event.keyCode == 39 || event.key == "ArrowRight") {
        isRightArrow = true
        isLeftArrow = false
        isUpArrow = false
        isDownArrow = false
    }
    else if(event.keyCode == 37 || event.key == "ArrowLeft") {
        isRightArrow = false
        isLeftArrow = true
        isUpArrow = false
        isDownArrow = false
    } 
    else if(event.keyCode == 38 || event.key == "ArrowUp") {
        isRightArrow = false
        isLeftArrow = false
        isUpArrow = true
        isDownArrow = false
    }
    else if(event.keyCode == 40 || event.key == "ArrowDown") {
        isRightArrow = false
        isLeftArrow = false
        isUpArrow = false
        isDownArrow = true
    }
    

    

})

function initial(){


canvas.style.border = '2px solid black'



draw()
}

function draw() {
    ctx.beginPath()
    ctx.drawImage(backImg, 0, 0,750,500)
    ctx.closePath()

    ctx.beginPath()
    ctx.drawImage(charImg, 350,350, 80 ,80)
    ctx.closePath()
    
}

window.addEventListener('load', () => {
    setInterval(() => {
        requestAnimationFrame(draw)
    }, 30)
        
    
    
})