$(window).on('load scroll', function() {
    const elementPosition = $(this).scrollTop() + $(this).height();
    $('.animated, .side__white').each(function(){
        const elementOffset = $(this).offset().top;
        if (elementPosition > elementOffset) {
            if ($(this).hasClass('side__blue')) {
                $(this).addClass('slideInLeft');
            } else if ($(this).hasClass('side-form')) {
                $(this).addClass('slideInLeft delay-1s');
            } else if ($(this).hasClass('side__white')) {
                $(this).find('.blue-line').addClass('active');
            }
        }
    });
});