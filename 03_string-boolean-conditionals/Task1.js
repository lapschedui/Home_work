const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите пароль ', function (password) {
    if (password.includes('_')&&password.length === 4) {
        console.log('Хороший пароль, берем!');
    } else {
        console.log('Пароль должен состоять из 4 символов и содержать \"\_\"');
    }
    rl.close();
})
rl.on('close', function () {
    console.log('\nВсем добра =)');
    process.exit(0);
});