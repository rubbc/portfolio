
$(document).ready(function(){
   
   let changeColor = document.querySelector(".fiche-contact")
   changeColor.onclick = toggleClass;

   function toggleClass(){
    if (changeColor.className == 'dodgerbg') {
        changeColor.className == ''
    }
    else
    {
        changeColor.className = 'dodgerbg'
    }
   }
});