// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangleWidth = 3;
let rectangleHeight = 5;
rectangleArea = ((a, b) => {
    return a * b;
})(rectangleWidth, rectangleHeight);
console.log(`Площа прямокутника ${rectangleArea}`);

// - створити функцію яка обчислює та повертає площу кола
let radius = 5;
let circleArea = ((r) => Math.round(Math.PI * r ** 2))(radius);

console.log(`Площа кола ${circleArea}`);
// - створити функцію яка обчислює та повертає площу циліндру
let cylinderArea = ((h, r) => Math.round(2 * Math.PI * r * (h + r)))(5, 2);
console.log(`Площа циліндра ${cylinderArea}`);

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrForEach = ['City', 'Car', true, false, 33, 12, 28];
((arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Створив функцію яка приймає масив та виводить кожен його елемент ${arr[i]}`);
    }
})(arrForEach);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let innerText = 'Створив функцію яка створює параграф з текстом. Текст задав через аргумент';
((innerTextP) => {
    document.write(`<p>${innerTextP}</p>`);
})(innerText);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let innerTextForLi = 'Створив функцію яка створює ul з трьома елементами li. Текст li задав через аргумент';
((innerTextLi) => {
    document.write(`
<ul>
    <li>${innerTextLi}</li>
    <li>${innerTextLi}</li>
    <li>${innerTextLi}</li>
</ul>`);
})(innerTextForLi);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let innerTextForLi2 = 'Створив функцію яка створює ul з трьома елементами li. Текст li задав через аргумент.' +
    'Кількість li визначив другим аргументом, який є числовим (тут використав цикл)';
let indexLi = 5;
((innerTextLi, li) => {
    document.write(`<ul>`);

    for (let i = 0; i < li; i++) {
        document.write(`<li>${innerTextLi}</li>`);

    }

    document.write(`</ul>`);
})(innerTextForLi2, indexLi);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrTestAll = ['City', 'Car', true, false, 33, 12, 28];
((arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`Створив функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
                            та будує для них список <li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
})(arrTestAll);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
//
let testArr2 = [
    {id: '1', name: 'Max', age: 21},
    {id: '2', name: 'Tom', age: 25},
    {id: '3', name: 'Paul', age: 34},
    {id: '4', name: 'Mark', age: 26},
    {id: '5', name: 'Deny', age: 33},

];
((arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`Створив функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.<div>ID-${arr[i].id} Name-${arr[i].name} Age-${arr[i].age}</div>`);
    }
})(testArr2);
