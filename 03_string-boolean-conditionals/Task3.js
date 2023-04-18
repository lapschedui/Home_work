const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число ', function (n) {
    (n % 2) > 0 ? console.log('Число нечетное') : console.log('Число четное');
    rl.close();
});

rl.on('close', function () {
    console.log('\nВсем добра =)');
    process.exit(0);
});