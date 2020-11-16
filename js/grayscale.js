(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
} 


/*
$(document).ready(function(){
  $("#solModel").on("mouseenter mouseleave",function(e){
    var para = document.createElement("div");
    para.classList.add("col-lg-3");
    para.id = "emre";
    para.innerHTML = "Model ile ilgili seyler.";
    $(".more:checked ~ .content").trigger(e.type);
  });
  $("#solCar").one("mouseenter",function(){
    var para = document.createElement("div");
    para.classList.add("col-lg-3");
    para.innerHTML = "This is a car.";
    document.getElementById("appendSol").appendChild(para);
  });
  $("#solLaptop").one("mouseenter",function(){
    var para = document.createElement("div");
    para.classList.add("col-lg-3");    
    para.innerHTML = "Server ile ilgili seyler.";
    document.getElementById("appendSol").appendChild(para);
  });
  $("#solJetson").one("mouseenter",function(){
    var para = document.createElement("div");
    para.classList.add("col-lg-3");
    para.innerHTML = "This is a jetson.";
    document.getElementById("appendSol").appendChild(para);
  });
});



 $('document').ready(function() {
  var overlay = document.getElementById("loader");
  
   window.onload = function () {

    //document.getElementById("page-top").style.display = "block";
     $('html, body').animate({
      scrollTop: $("#headerTop").offset().top
    }, 700); 
    
    $('.loader').fadeOut(800); 

}  

  
  document.getElementById("page-top").style.display = "none";
  overlay.style.display = "flex";
  window.addEventListener("load",function(){
    overlay.style.display = "none";
    document.getElementById("page-top").style.display = "block";
  });

}); */