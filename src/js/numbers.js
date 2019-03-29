module.exports = (element, duration) => {
    const elementText = parseInt($(element).text());
    if (elementText > 0) {
        return false;
    }
    const elementData = parseInt($(element).attr('data-number'));
    const sum = (duration / elementData);

    const sumFormated = sum >= 1 ? sum.toFixed() : sum.toFixed(1) * 10;
    console.log(sumFormated);
    const intervalId = setInterval(function(){
        let currentCounter = parseInt($(element).text());
        $(element).text(currentCounter + sumFormated);
        if (currentCounter >= elementData) {
            clearInterval(intervalId);
            $(element).text(elementData);
        }
    }, sumFormated);
};