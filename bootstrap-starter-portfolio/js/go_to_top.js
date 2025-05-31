//<!-- Template designed for Web and Time-Based Design unit [DESN1021]- 2022 -->
//<!-- Date: Sep 23 / 2022  -->
//<!-- Author: Web and Time Based Unit -->
//<!-- ------------------------------------------------------------------------------------ -->


// DO NOT EDIT OR CHANGE ANYTHING HERE, UNLESS YOU KNOW JAVA SCRIPT. YOU CAN LEARN MORE AT 
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 25px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


