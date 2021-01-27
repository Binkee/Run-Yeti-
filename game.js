
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let intervalId = 0
let score = 0
let isLeftArrow = false
let isRightArrow = false
let isUpArrow = false
let isDownArrow = false
let charX = 350
let charY = 350
let snowballRate = 300



let backImg = document.createElement("img")
backImg.src = './images/aline-costa-neve.jpg'

let charImg = document.createElement("img")
charImg.src = './images/yetii.png'

let snowImg = document.createElement("img")
snowImg.src = './images/snowball.png'

let reindeerImg = document.createElement('img')
reindeerImg.src = './images/unnamed.png'

document.addEventListener('keydown', (event) =>{
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
 
document.addEventListener('keyup', (event) =>{
    isRightArrow = false
    isLeftArrow = false
    isDownArrow = false
    isUpArrow = false
})
let snowballs = [{x: 0, y: -50}]
function fall(){
  for(let i = 0; i < snowballs.length; i++){
    ctx.drawImage(snowImg, snowballs[i].x, snowballs[i].y, 40, 40) 
    snowballs[i].y++

      if(snowballs[i].y == snowballRate){
          score++
         snowballs.push({
            x:Math.floor(Math.random() * (730 - 0)) + 0,
            y: -50        
         })
        
         if(snowballRate > 50){
             snowballRate -= 35
         }
      }
  }
}

let reindeers = [{x:760, y: 400}]
function run() {
    for(let i = 0; i < reindeers.length; i++){
      ctx.drawImage(reindeerImg, reindeers[i].x, reindeers[i].y, 100,100)
      reindeers[i].x--
        if(reindeers[i].x == 100){
            score++
            reindeers.push({
                x: 780,
                y: Math.floor(Math.random()* (450 - 250) + 250)
            })
        }
    }
}

function collision() {
    for(let i = 0; i < reindeers.length; i++){

    if (charX < reindeers[i].x + 80 &&
        charX + 63 > reindeers[i].x &&
        charY < reindeers[i].y + 80 &&
        charY + 63 > reindeers[i].y) {
         clearInterval(intervalId)
         reindeers[i].x = -100
         audio.pause();
         audio2.play()
        audio.currentTime = 0;   
         gameOver(score)
         
     }
     
    }
    for(let i = 0; i < snowballs.length; i++){
        if(charX < snowballs[i].x + 36 &&
            charX + 63 > snowballs[i].x &&
            charY < snowballs[i].y + 36 &&
            charY + 63 > snowballs[i].y){
             clearInterval(intervalId)
             snowballs[i].x = -100
             audio.pause();
             audio2.play()
             audio.currentTime = 0;
             gameOver(score)
            }
    }
 }
     
     

function draw() {
    ctx.beginPath()
    ctx.drawImage(backImg, 0, 0,750,500)
    ctx.closePath()

    ctx.beginPath()
    ctx.drawImage(charImg, charX,charY, 70 ,70)
    ctx.closePath()
    ctx.font = '22px Hachi Maru Pop'
    ctx.fillText('Score: ' + score, 10, canvas.height - 50)
    if(isRightArrow && charX + 70 < canvas.width) {
      charX  += 1.2
    }
        
    else if(isLeftArrow && charX > 0){
       charX -= 1.2
    }
    else if(isUpArrow && charY > 270){
        charY -= 1.2
    }
    else if (isDownArrow && charY + 70 < canvas.height){
        charY += 1.2
    }
 
    fall()
    run()
    collision()
   
}

function initial(){
   intervalId = setInterval(() => {
        requestAnimationFrame(draw)
            
        }, 1)

canvas.style.border = '2px solid black'
}


function restartGame(){
    console.log('here')
    // reset all your variables here
    charX = 350;
    charY = 350
    reindeers = [{x:760, y: 400}]
    snowballs = [{x: 0, y: -50}]
    snowballRate = 300
    intervalId = 0
    score = 0
    isLeftArrow = false
    isRightArrow = false
    isUpArrow = false
    isDownArrow = false
    canvas = document.querySelector('canvas')
    ctx = canvas.getContext('2d')
    audio.play()
    initial()
}