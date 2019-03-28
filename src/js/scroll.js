const numbers = require('./numbers');

$(window).on('load scroll', function() {
    const bottomPosition = $(this).scrollTop() + $(this).height() + 100;
    $('.animated, .side__white, .numbers, .numbers__block').each(function(){
        const elementOffset = $(this).offset().top;
        if (bottomPosition > elementOffset) {
            if ($(this).hasClass('side__blue')) {
                $(this).addClass('slideInLeft');
            } else if ($(this).hasClass('side-form')) {
                $(this).addClass('slideInLeft delay-1s');
            } else if ($(this).hasClass('side__white') || $(this).hasClass('numbers')) {
                $(this).find('.blue-line').addClass('active');
            } else if ($(this).hasClass('numbers__block')) {
                numbers('#number-since', 2300);
                numbers('#number-department', 2300);
            }
        }
    });
});