// - створити функцію яка обчислює та повертає площу прямокутника
let rectangleArea = (a, b) => a * b;
console.log(`Площа прямокутника ${rectangleArea(3, 6)}`);
// - створити функцію яка обчислює та повертає площу кола
let circleArea = (r) => Math.round(Math.PI * r ** 2);
console.log(`Площа кола ${circleArea(3)}`);
// - створити функцію яка обчислює та повертає площу циліндру
//2πr(h + r)
let cylinderArea = (h, r) => Math.round(2 * Math.PI * r * (h + r));
console.log(`Площа циліндра ${cylinderArea(5, 2)}`);
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = ['City', 'Car', true, false, 33, 12, 28];
let printArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Створив функцію яка приймає масив та виводить кожен його елемент ${arr[i]}`);
    }
};
printArr(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = (innerTextP) => {
    document.write(`<p>${innerTextP}</p>`);
};
createP('Створив функцію яка створює параграф з текстом. Текст задав через аргумент');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (innerTextLi) => {
    document.write(`
<ul>
    <li>${innerTextLi}</li>
    <li>${innerTextLi}</li>
    <li>${innerTextLi}</li>
</ul>`);
};
createUl('Створив функцію яка створює ul з трьома елементами li. Текст li задав через аргумент');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlWithLoop = (innerTextLi, li) => {
    document.write(`<ul>`);

    for (let i = 0; i < li; i++) {
        document.write(`<li>${innerTextLi}</li>`);

    }

    document.write(`</ul>`);
};
let liText = 'Створив функцію яка створює ul з трьома елементами li. Текст li задав через аргумент.' +
    'Кількість li визначив другим аргументом, який є числовим (тут використав цикл)';
createUlWithLoop(liText, 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr2 = ['City', 'Car', true, false, 33, 12, 28];
let buildLiforArr = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`Створив функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
                            та будує для них список <li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
};
buildLiforArr(arr2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrMix = [
    {id:'1',name:'Max',age:21},
    {id:'2',name:'Tom',age:25},
    {id:'3',name:'Paul',age:34},
    {id:'4',name:'Mark',age:26},
    {id:'5',name:'Deny',age:33},

    ];
let arrPrintInDiv = (arr)=>{
    for(let i =0;i<arr.length;i++){
        document.write(`Створив функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.<div>ID-${arr[i].id} Name-${arr[i].name} Age-${arr[i].age}</div>`);
    }
};
arrPrintInDiv(arrMix);