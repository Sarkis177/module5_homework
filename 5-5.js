//первый вариант
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(arr.length);
arr.forEach(function(item, i) {
  console.log( i + ": " + item);
});

//второй вариант
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(arr.length);
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//третий вариант
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34,];
console.log(arr.length);
let result = arr.map(function(item, index, array) {
return item + 0
});
console.log(result);