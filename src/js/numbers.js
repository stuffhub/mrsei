module.exports = (element, duration) => {
    const elementData = $(element).attr('data-number');
    $(element).animate({
        num: $(element).attr('data-number')
    }, {
        duration: duration,
        step: function (step) {
            $(this).text(Math.round(step));
        }
    })
};