document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('.input');
    let output = document.querySelector('.output');
    let timeoutId;

    function outputs() {
        let a = input.value;
        output.textContent = a;
        console.log(output.textContent);
    }

    input.addEventListener('input', function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(outputs, 300);
    });
});
