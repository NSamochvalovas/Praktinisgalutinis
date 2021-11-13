"use strict"
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//navigation active
var nav = document.getElementById("nav");
var links = nav.getElementsByClassName("link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//tabs
function changeTab(target, name){
  var tabs = document.getElementsByClassName('tab')
  var tab = document.getElementById(name);
  var paragraf = document.getElementsByTagName("p");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tab.style.display="flex";
    paragraf[i].classList.remove("active-tab");
  }
}

var tab = document.getElementsByClassName("tab-section3")
for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
    var currents = document.getElementsByClassName("activetabcss");
    currents[0].className = currents[0].className.replace(" activetabcss", "");
    this.className += " activetabcss";
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  1000: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    allowSlideNext: false,
    allowSlidePrev: false
  }
}
});
