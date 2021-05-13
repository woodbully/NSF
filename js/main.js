"use strict";

// nav bar
$(".nav-mobile-button").click(function() {
  $('.nav-mobile-bar').toggleClass('active');
  $('.nav-mobile-menu').toggleClass('active');
  
});

// Blogs carousel
$(".lineup-carousel").owlCarousel({
  autoplay: true,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});

