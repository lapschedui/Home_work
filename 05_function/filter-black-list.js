const readline = require('readline-sync');

function whiteList(all, exceptions) {
    let resultList = [];
    for (let i = 0; i < all.length; i++)
        if (exceptions.includes(all[i]) === false)
            resultList.push(all[i]);
    return resultList;
}

function splitToArray(listName) {
    let result = [];
    let n = readline.question('Введите количество ' + listName + ' email-адресов ');
    console.log('Введите email-адреса ');
    for (let a = 0; a < n; a++) {
        let str = readline.question('Email:');
        result.push(str);
    }
    return result;
}

let emailList = splitToArray('исходных');
let blackList = splitToArray('запрещенных');
let result = whiteList(emailList, blackList);
console.log(result);

export default whiteList;