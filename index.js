const popup = document.querySelector(".popup");

const popupCont = document.querySelector(".popupcontainer");

const okayBtn = document.querySelector(".okay");
const sendBtn = document.querySelector(".btn-submit");




function showpopup(){

    popup.style.bottom = "30%";
    
    popupCont.style.display = "initial";

}
function closepopup(){
    popup.style.bottom = "-5000%";
    
    popupCont.style.display = "none";

}

okayBtn.addEventListener("click",closepopup)



const scriptURL = "https://script.google.com/macros/s/AKfycbxzAsZhukjjf-kQQ8dW5P0b9qJ65b0H_x7fDbsawvah2x6Vmwb8T5AtoHsYPUwWYet_/exec"
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        setTimeout(() => {
            popup.style.bottom = "30%";
            popupCont.style.display = "initial";
        }, 5000);
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
 ;
      
  })
