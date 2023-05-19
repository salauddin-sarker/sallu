

// animated_headline_call
$(function() {
    $('.selector').animatedHeadline({
        animationType:"rotate-3",
        
    });
})

// sticky_menu_add_call
$(window).on('scroll', function () {
    var wSize = $(window).width();
    if (wSize > 1 && $(this).scrollTop() > 1) {
        $('#sticky-header').addClass('sticky');
    }
    else {
        $('#sticky-header').removeClass('sticky');
    }
});
  //mixit up(portfolio section)
  var mixer = mixitup('.items-show');
