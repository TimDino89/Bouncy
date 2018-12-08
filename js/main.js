$(document).ready(function(){

  // Portfolio Sorter
  var $portfolioContainer = $('#js-portfolio__container');
  var $portfolioBtns = $('#js-portfolio__btns');
  var $portfolioBtn = $('.portfolio__btn');

  $portfolioContainer.isotope({
    itemSelector: '.portfolio__item',
    layoutMode: 'masonry'
  });

  $portfolioBtns.on('click', 'button', function(){
    $portfolioBtn.removeClass('is-active');
    $(this).addClass('is-active');

    var $filterValue = $(this).data('filter');
    $portfolioContainer.isotope({ 
      filter: $filterValue,
      transitionDuration: '0.7s'});
  });
  // End Portfolio Sorter

  // Slider
  $('.js-team__slider').slick({
    arrows: false,
    dots: true
  });

  $('.js-testim__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
  // End Slider

  // Scroll
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
    } 
  });
  // End Scroll
});

