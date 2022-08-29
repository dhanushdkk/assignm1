const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closemenu");
const menuIcon = document.querySelector(".openmenu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sub-next");
  if (n > slides.length)
   {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length} 
  if (n==1)
  {
   document.getElementById("carosel").style.display="none";
 }  else{
  document.getElementById("carosel").style.display="block";
 } 
 if(n==4){
  document.getElementById("carosel_r").style.display="none";
 }else{
  document.getElementById("carosel_r").style.display="block";
 }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}




function plusSlides(direction){
  var container = document.getElementById('tab-carosel-scroll');
  scrollCompleted = 0;
  var slideVar = setInterval(function(){
      if(direction >= 1){
          container.scrollLeft += 3;
      } if(direction<0) {
          container.scrollLeft -= 3;
      }
      scrollCompleted += 3;
      if(scrollCompleted >= 500)
      {
          window.clearInterval(slideVar);
      }
  },1);
}



function searchshipment() {
let input = document.getElementById('searchbar').value
input=input.toLowerCase();
let x = document.getElementsByClassName('card');

for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="bottomcards";             
    }
}
}


function searchship() {
  let input = document.getElementById('searching-box').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('sub-cont1');
  
  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="shipment-container";             
      }
  }
  }
  
  function searchshipmob() {
    let input = document.getElementById('searchingbox-mob').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('sub-cont1');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="shipment-container";             
        }
    }
    }




































// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )