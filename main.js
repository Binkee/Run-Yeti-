let body = document.querySelector('body')
  

function deleteSection() {
 let delSection = document.querySelector("section")
 body.removeChild(delSection)
 console.log(body)
}

function startGame() {
    let sectionTwo = document.createElement("section")
    sectionTwo.innerHTML = `
          <canvas width="1000px" height="500px">
          </canvas>
          <div> SCORE<div>
          <script src="game.js"></script>
          `
    body.appendChild(sectionTwo)
    
  }

function start(){
    let startbtn = document.querySelector('button')
    startbtn.addEventListener("click", function(){
    deleteSection()
        startGame()
    })
}
start()
