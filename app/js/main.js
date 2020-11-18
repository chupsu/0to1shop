$(function () {
  $('.slider__wrapper').slick({
     arrows: false,
     dots: true,
     infinite: true,
     fade: true,
     autoplay: true,
     autoplaySpeed: 2000
  });
});
let mixer = mixitup('.week-product, .new-product');