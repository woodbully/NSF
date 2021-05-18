"use strict";

// nav bar
$(".nav-mobile-button").click(function() {
  $('.nav-mobile-bar').toggleClass('active');
  $('.nav-mobile-menu').toggleClass('active');
  
});

// Blogs carousel
$(".lineup-carousel").owlCarousel({
  autoplay: false,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      576:{
          items:2
      },
      768:{
          items:2
      },
      880:{
          items:3
      },
      1300:{
          items:4
      }
  }
});




// wordpress API 

const url = "http://idakronborg.dk/portfolio/wp-json/wp/v2/posts?_embed";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    console.log(posts);
    appendPosts(posts);
  });

// append wp posts to the DOM
function appendPosts(posts) {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += `
      <article class="wp-posts">
      <h3>${post.title.rendered}</h3>
        <div class="flex-box">
        <p class"api-p">${post.content.rendered}</p>
        <div>
      </article>
    `;
  }

  document.querySelector('#content').innerHTML = htmlTemplate;
}

