document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('.input');
    let button = document.querySelector('.button');
    let intervalId;
    let counter = document.querySelector('.counter');

    function counters() {
        let curentCount = parseInt(counter.textContent);
        counter.textContent = --curentCount;
        if (curentCount === 0) {
            clearInterval(intervalId);
        }
    }


    button.addEventListener('click', function(){
        counter.textContent = input.value;
        clearInterval(intervalId)
        intervalId = setInterval(counters, 1000);
    });
});

