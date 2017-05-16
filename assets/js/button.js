// Get the modal
var modalMer = document.getElementById('myModalMer');
var modalNick = document.getElementById('myModalNick');
var modalMatteo = document.getElementById('myModalMatteo');
var modalMac = document.getElementById('myModalMac');
var modalKara = document.getElementById('myModalKara');
var modalKate = document.getElementById('myModalKate');

// Get the button that opens the modal
var btnMer = document.getElementById("myBtnMer");
var btnNick = document.getElementById("myBtnNick");
var btnMatteo = document.getElementById("myBtnMatteo");
var btnMac = document.getElementById("myBtnMac");
var btnKara = document.getElementById("myBtnKara");
var btnKate = document.getElementById("myBtnKate");

//Buttons to close the window
var btnclsNick = document.getElementById("closeNick");
var btnclsMer = document.getElementById("closeMer");

// When the user clicks on the button, open the modal
btnMer.onclick = function() {
    modalMer.style.display = "block";
}
btnNick.onclick = function(){
    modalNick.style.display = "block";
}
btnKate.onclick = function(){
    modalKate.style.display = "block";
}

//When the user clicks on the close button, closes the modal
btnclsNick.onclick = function(){
  modalNick.style.display = "none";
}
btnclsMer.onclick = function(){
  modalMer.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalMer) {
        modalMer.style.display = "none";
    }
    if(event.target == modalNick){
      modalNick.style.display = "none";
    }
    if(event.target == modalKate){
      modalKate.style.display = "none";
    }
}
