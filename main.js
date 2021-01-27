let body = document.querySelector('body')
var audio = new Audio('./images/Binke - Alles Gaat Fout (mp3cut.net)-[AudioTrimmer.com].mp3');

function deleteSection() {
 let delSection = document.querySelector("section")
 body.removeChild(delSection)
 console.log(body)
}

function startGame() {
    let canvas = document.querySelector("canvas")
    canvas.style.display = "block"
    restartGame()
  }
function gameOver(){
    let getDiv = document.querySelector('.div-2')
    canvas.style.display = "none"
    getDiv.style.display = 'block'
  
    let restartbtn = document.querySelector('.restart-button')
    restartbtn.addEventListener("click", function(){
        getDiv.style.display = 'none'
        startGame()
    })
}
function start(){
    let startbtn = document.querySelector('button')
    startbtn.addEventListener("click", function(){
    deleteSection()    
    startGame()
    audio.play();
    })
}
window.addEventListener('load', () => {
    start()
    
        audio.volume = 0.1;
})