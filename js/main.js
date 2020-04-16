// -- tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// -- popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

// -- slick-slider
$('.gallery-swipe').slick({

})
    .on("mousewheel", function (event) {
        event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
        $(this).slickNext();
    } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(this).slickPrev();
    }
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.header').addClass('fixed');
  } else {
      $('.header').removeClass('fixed');
  }
});