const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите х1 ', function (x1) {
    rl.question('Введите y1 ', function (y1) {
        rl.question('Введите х2 ', function (x2) {
            rl.question('Введите y2 ', function (y2) {
                let square = (Math.abs(x2- x1)) * (Math.abs(y2 - y1))
                console.log(`Площадь прямоугольника по вашим координатам ${square}`);
                rl.close();
            })
        })
    });
});

rl.on('close', function () {
    console.log('\nХорошего дня(вечера/ночи)!');
    process.exit(0);
});