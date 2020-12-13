$(function () {
  // Slider
  $('.offer-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.product-details__slider--thumb').slick({
    asNavFor: '.product-details__slider--big',
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    vertical: true
  });
  $('.product-details__slider--big').slick({
    asNavFor: '.product-details__slider--thumb',
    arrows: false,
    fade: true,
    draggable: false
  });
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
    spacing: "7px",
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true
  });
  $('.product__star, .product-details__star').rateYo({
    starWidth: '16px',
    spacing: "11px",
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true
  });
  $('.reviews__star').rateYo({
    starWidth: '16px',
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
  $('.filter__quantity-style, .product-details__num').styler();
  // Tabs
  $('.product-details__more-tab').on('click', function(e){
    e.preventDefault();
    $('.product-details__more-tab').removeClass('product-details__more-tab--active');
    $(this).addClass('product-details__more-tab--active');
    $('.product-details__more-item').removeClass('product-details__more-item--active');
    $($(this).attr('href')).addClass('product-details__more-item--active');
  })
  // Swipper
  var mySwiper = new Swiper('.related__slider', {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    },
    slidesPerView: 4,
    spaceBetween: 30,
  });
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