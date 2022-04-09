const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")


//document.addEventListener("DOMContentLoaded", () => {

errorModal.className = "hidden"
console.log(errorModal.className)

listenClicks()

//})
 

function listenClicks(){
    document.addEventListener('click', (event) => {
    
    if(event.target.classList[0] === "like-glyph"){

      mimicServerCall()
      .then(resp => {
        const activated = event.target.classList.contains("activated-heart");
        if(activated){ 
        event.target.classList.remove("activated-heart")
        event.target.innerHTML = EMPTY_HEART
        }else{

          event.target.classList.add("activated-heart")
          event.target.innerHTML = FULL_HEART
        }
        
        activated;
      })

      .catch((function(error) {
        errorModal.className = "";
        errorModal.innerText = error;
        setTimeout(() =>  errorModal.className = "hidden", 3000);
        })
  
      )}


    });

  }








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
