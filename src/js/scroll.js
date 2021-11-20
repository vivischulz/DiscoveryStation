 // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 window.onscroll = function() {scrollFunction()};
  
 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("nav").style.padding = "1rem 3rem";
     
     document.getElementById("nav__brand").style.width = "180px";
   } else {
     document.getElementById("nav").style.padding= "2rem 3rem";
    
     document.getElementById("nav__brand").style.width = "200px";
   }
 }