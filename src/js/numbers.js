module.exports = (element, duration) => {
    const elementText = parseInt($(element).text());
    if (elementText > 0) {
        return false;
    }
    const elementData = parseInt($(element).attr('data-number'));
    const counter = (index) => {
        setTimeout(function(){
            $(element).text(index);
        }, index * (duration / elementData));
    }
    for (let i = 0; i <= elementData; i++) {
        counter(i);
    }
};