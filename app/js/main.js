$(function () {
  $('.slider__wrapper').slick({
     arrows: false,
     dots: true,
     adaptiveHeight: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     speed: 500,
     easing: 'ease',
     fade: true
  });
});