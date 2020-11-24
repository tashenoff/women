$(function() {
  objectFitImages();
});



$(".hamburger").on('click', function(){
  $('.header__links').slideToggle('medium', function() {
  if ($(this).is(':visible')) {
      $(this).css('display','block');
      $("body").css("overflow-y","hidden");
  } else {
      $("body").css("overflow-y","scroll");
  }
      
});
})


$('.hamburger').click(function(e){
  e.preventDefault();
  $(this).toggleClass('is-active');
});





$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  navText: ["<i class='arrow_left'></i>","<i class='arrow_right'></i>"],

  responsive:{
      0:{
          items:1,
          nav:true,
      },
      600:{
          items:1,
          nav:true,
      },
      1000:{
          items:1
      }
  }
})




var selector = $('.owl-carousel');

$('.my-next-button').click(function() {
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
  selector.trigger('prev.owl.carousel');
});