let enterNumber = +prompt('Введите число');
if (typeof enterNumber === 'number' && !isNaN(enterNumber)) {
    if (enterNumber % 2 === 0) { 
    console.log('Число четное');
    } else {
    console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}