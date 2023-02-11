let myMap = new Map([
    ['country', 'population'],
    [177, 10110001],
    [true, false]
   ]);
   for (let keyProperty of myMap){
    console.log(`Ключ - ${keyProperty[0]}, Значение - ${keyProperty[1]}`);
   };