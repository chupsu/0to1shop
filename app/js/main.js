$(function () {
  // Slider
  $('.slider__wrapper').slick({
     arrows: false,
     dots: true,
     infinite: true,
     fade: true,
     autoplay: true,
     autoplaySpeed: 2000
  });
  // Range
  $('.filter__range').ionRangeSlider({
    type: "double",
    onStart: function (data){
      $('.filter__range-from').text('$' + data.from + '.00');
      $('.filter__range-to').text('$' + data.to + '.00');
    },
    onChange: function (data){
      $('.filter__range-from').text('$' + data.from + '.00');
      $('.filter__range-to').text('$' + data.to + '.00');
    },
  });
  // Star Rate
  $('.recent__star').rateYo({
    starWidth: '11px',
    // 7px
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true
  });
  $('.product__star').rateYo({
    starWidth: '16px',
    // 11px
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true
  });
  // View Catalog
  $('.filter__view-btn').on('click', function(){
    $('.filter__view-btn').removeClass('filter__view-btn--active');
    $(this).addClass('filter__view-btn--active');
  });
  $('.filter__view-btn--list').on('click', function(){
    $('.product__item').addClass('product__item--list');
    $('.product__items--catalog').css({
      'grid-auto-rows' : '500px',
      'grid-template-columns' : '1fr'
    });
  })
  $('.filter__view-btn--grid').on('click', function(){
    $('.product__item').removeClass('product__item--list');
    $('.product__items--catalog').css({
      'grid-auto-rows' : '380px',
      'grid-template-columns' : 'repeat(3, 1fr)'
    });
  })
  // Style Select
  $('.filter__quantity-style').styler();
});
// Tabs
let mixer1 = mixitup('.product__items', {
  selectors: {
    control: '.week__filter-btn'
  }
});
let mixer2 = mixitup('.design__items', {
  selectors: {
    control: '.design__filter-btn'
  }
});