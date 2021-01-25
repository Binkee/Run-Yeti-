let body = document.querySelector('body')
  

function deleteSection() {
 let delSection = document.querySelector("section")
 body.removeChild(delSection)
 console.log(body)
}

function startGame() {
    let canvas = document.querySelector("canvas")
    canvas.style.display = "block"
    initial()
    
  }

function start(){
    let startbtn = document.querySelector('button')
    startbtn.addEventListener("click", function(){
    deleteSection()
        startGame()
        
    })
}
start()
