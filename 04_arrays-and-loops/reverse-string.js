// это функция, внутри которой нужно написать ваш код
// str (входная строка) будет задаваться в момент вызова функции, как в примере кода под ней
function reverseString(str) {
  // ваш код здесь
  let finishtext = "";
  for (let a = str.length - 1; a >= 0; a--) {
      finishtext = finishtext + str[a];
  }
  console.log(finishtext);
}

// вызов функции
reverseString('abc'); // cba
reverseString('12345'); // 54321
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default reverseString;
