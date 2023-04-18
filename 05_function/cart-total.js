const readline = require('readline-sync');

let basketSumm = readline.question('Введите общую сумму корзины ');
let produktSumm = readline.question('Введите количество товаров в корзине ');
let promo = readline.question('Введите промокод ');

function calculate(basketSumm, produktSumm, promo) {
    if (promo == 'ДАРИМ300') {
        produktSumm >= 300 ? basketSumm = basketSumm - 300 : basketSumm = 0;
    }
    if (produktSumm >= 10) {
        basketSumm = basketSumm * 0.95;
    }
    if (basketSumm > 50000) {
        let a = basketSumm - 50000;
        basketSumm = a * 0.80 + 50000;
    }
    if (promo == 'СКИДКА15') {
        if (basketSumm >= 20000) {
            basketSumm = basketSumm * 0.85;
        } else return basketSumm;
    }
    return basketSumm;
}

console.log('Итогоовая сумма ', calculate(basketSumm, produktSumm, promo));

export default calculate;