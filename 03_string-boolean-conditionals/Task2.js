const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите Имя ', function (username) {
    rl.question('Введите Фамилию ', function (usersurname) {
        let fn = username.substring(0, 1);
        let ln = username.substring(1);
        let fsn = usersurname.substring(0, 1);
        let lsn = usersurname.substring(1);
        let name = fn.toUpperCase() + ln.toLowerCase();
        let surname = fsn.toUpperCase() + lsn.toLowerCase();
        username != name ? console.log('Ай-ай-ай, не хороошо... Надо так\n', name) : console.log('Имя введено корректно');
        usersurname != surname ? console.log('Ай-ай-ай, не хороошо... Надо так\n', surname) : console.log('Фамилия введена корректно');
        rl.close();
    })
})
rl.on('close', function () {
    console.log('\nВсем добра =)');
    process.exit(0);
});