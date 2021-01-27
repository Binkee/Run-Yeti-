let body = document.querySelector('body')
var audio = new Audio('./images/Binke - Alles Gaat Fout (mp3cut.net)-[AudioTrimmer.com].mp3');
audio.loop=true;
var audio2 = new Audio('./images/Everything/sfx_hit.wav')
let getDiv = document.querySelector('.div-2')
function deleteSection() {
 let delSection = document.querySelector("section")
 body.removeChild(delSection)
}


function gameOver(score){
    canvas.style.display = "none"
    getDiv.style.display = 'block'
    let somediv = document.querySelector("#myScore")
    console.log(score)
    somediv.innerHTML = `Your score is ${score}`
}

function start(){
    let startbtn = document.querySelector('button')
    startbtn.addEventListener("click", function(){
    deleteSection()    
    let canvas = document.querySelector("canvas")
    canvas.style.display = "block"
    restartGame()

    let restartbtn = document.querySelector('.restart-button')
    restartbtn.addEventListener("click", function(){
        getDiv.style.display = 'none'
        canvas.style.display = "block"
        console.log('Restarting')
        restartGame()
    } )
    audio.play();
    })
}
window.addEventListener('load', () => {
    start()
    
        audio.volume = 0.1;
        audio2.volume = 0.5
})