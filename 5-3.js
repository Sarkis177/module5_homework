// первый вариант
let str = 'Hello';
let reverse = str.split('').reverse().join('');
console.log(reverse); 

//второй вариант
function stringReverse(str) {
    return str.split('').reverse().join('');
    }
    console.log(stringReverse('Hello'));