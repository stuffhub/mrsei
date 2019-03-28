const scroll = require('./scroll');

$(window).on('load', function(){
    // Preloader
    $('.preloader').fadeOut();
    // Input Effect
    $('.side-form__input').on('focus', function(){
        $(this).parent().addClass('active');
    });
    $('.side-form__input').on('blur', function(){
        $(this).parent().removeClass('active');
    });
});