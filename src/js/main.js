$(window).on('load', function(){
    $('.blue-line').addClass('active');
    $('.side-form__input').on('focus', function(){
        $(this).parent().addClass('active');
    });
    $('.side-form__input').on('blur', function(){
        $(this).parent().removeClass('active');
    });
});