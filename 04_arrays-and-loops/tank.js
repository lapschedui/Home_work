// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
    let counter = 0;
    for (let a = 0; a < 10; a++) {
        roadMines[a] === true ? counter++ : console.log("Танк передвигается на ячейку", a + 1);
        if (roadMines[a] === true && counter === 1) {
            console.log('Танк подбит');
            console.log("Танк передвигается на ячейку", a + 1);
        }
        if (counter === 2){
            console.log('Танк уничтожен');
            break;
        }
    }
}

// вызов функции
moveTank([false, true, false, false, true, false, false, false, false, false]); // танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
// export default moveTank;
