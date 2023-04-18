const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число А ', function (a) {
    rl.question('Введите число В ', function (b) {
        rl.question('Введите количество знаков после запятой ', function (n) {
            let AFraction = Math.round(a % 1 * Math.pow(10, n));
            let BFraction = Math.round(b % 1 * Math.pow(10, n));
            let ANormalized = Math.round(
                a * Math.pow(10, n)
            );    
            let BNormalized = Math.round(
                b * Math.pow(10, n)
            ); 
                console.log('Дробная часть числа А -', AFraction, ', числа В -', BFraction);
                console.log('Дробная часть А больше дробной части числа В - ', ANormalized > BNormalized);
                console.log('Дробная часть А больше либо равна дробной части числа В - ', ANormalized >= BNormalized);
                console.log('Дробная часть А меньше дробной части числа В - ', ANormalized < BNormalized);
                console.log('Дробная часть А меньше либо равна дробной части числа В - ', ANormalized <= BNormalized);
                console.log('Дробная часть А равна дробной части числа В - ',ANormalized === BNormalized );
                rl.close();
        })
    });
});

rl.on('close', function () {
    console.log('\nХорошего дня(вечера/ночи)!');
    process.exit(0);
});