$(document).ready(function($){

/*------------------
counter area active
---------------------*/



/*------------------
 slick nav active   
 -------------------*/
  $('.slider-active').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay:true,
  slidesToShow: 1,
  adaptiveHeight: true
})

/*----------------------
counter active
----------------------*/

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
/*----------------------
client active
----------------------*/
$('.client-active').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true,
            dots:true

        }
    }
})

/*------------------
brand-active
------------------*/
 $('.brand-active').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay:true,
  slidesToShow: 5,
  adaptiveHeight: true
})

}(jQuery));