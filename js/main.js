//Mobile Menu

$('.top-nav-clone').clone().appendTo('.main-nav').addClass('desk-hide');
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");

$('.extra-link ul li:has(ul)').addClass('submenu');
$('.extra-link ul li:has(ul)').append("<i></i>");

$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});



$('.banner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    cssEase: 'linear',
    slidesToScroll: 1
  
});



svg4everybody();




// Slim Header

   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".header").addClass("slim-header");          
    } else {
      $(".header").removeClass("slim-header");
          }
   });



var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();








