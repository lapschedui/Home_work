const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите левую границу диапозона ', function (a) {
    rl.question('Введите правую границу диапозона ', function (b) {
        let c = Math.abs(b - a);    
        let ARandom = Math.round(Math.random() * c) + Math.min(a, b);
        let BRandom = Math.round(Math.random() * c) + Math.min(a, b);
        console.log(c);
        console.log('Число А -', ARandom, ', число В -', BRandom);
        console.log('Число А больше числа В - ', ARandom > BRandom);
        console.log('Число А больше либо равно числу В - ', ARandom >= BRandom);
        console.log('Число А меньше числа В - ', ARandom < BRandom);
        console.log('Число А меньше либо равно числу В - ', ARandom <= BRandom);
        console.log('Число А равна числу В - ',ARandom === BRandom );
        rl.close();
    });
});

rl.on('close', function () {
    console.log('\nХорошего дня(вечера/ночи)!');
    process.exit(0);
});