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
let mixer1 = mixitup('.week-product__items', {
  selectors: {
    control: '.week__filter-btn'
  }
});
let mixer2 = mixitup('.new-product__items', {
  selectors: {
    control: '.new__filter-btn'
  }
});