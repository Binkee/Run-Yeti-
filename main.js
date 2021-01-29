let body = document.querySelector('body')
let audio = new Audio('./images/Binke - Alles Gaat Fout (mp3cut.net)-[AudioTrimmer.com].mp3');
    audio.loop=true;
let audio2 = new Audio('./images/Everything/sfx_hit.wav')
let getDiv = document.querySelector('.div-2')

// Delete the first section of the HTML
function deleteSection() {
   let delSection = document.querySelector("section")
   body.removeChild(delSection)
}
// Get the GameOver page with your score
function gameOver(score){
    canvas.style.display = "none"
    getDiv.style.display = 'block'
    let somediv = document.querySelector("#myScore")
    somediv.innerHTML = `Your score is ${score}`
}

// Start function when you click the startbutton the canvas will appear.
function start(){
    let startbtn = document.querySelector('button')
    startbtn.addEventListener("click", function(){
    deleteSection()    
    let canvas = document.querySelector("canvas")
    canvas.style.display = "block"
    restartGame()

 // Restart game when you click the restart button
    let restartbtn = document.querySelector('.restart-button')
    restartbtn.addEventListener("click", function(){
        getDiv.style.display = 'none'
        canvas.style.display = "block"
        restartGame()
        audio.play();
     } )
   })
}
// Window Eventlistener to wait the game is completely loaded.
window.addEventListener('load', () => {
    start()
    audio.volume = 0.1;
    audio2.volume = 0.5
})