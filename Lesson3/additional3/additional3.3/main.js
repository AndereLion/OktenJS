// 1. Створити пустий масив та :
let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
let t = 0;
for (let i = 0; i < 50; i++) {
    arr[i] = t += 2;
}
console.log(`Заповнив його 50 парними числами за допомогою циклу ${arr}`);
//     b. заповнити його 50 непарними числами за допомоги циклу.
let t2 = 1;
for (let i = 0; i < 50; i++) {
    arr[i] = t2 += 2;
}
console.log(`Заповнив його 50 непарними числами за допомогою циклу ${arr}`);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr20 = [];
for (let i = 0; i < 20; i++) {
    arr20[i] = Math.round((Math.random() * 20));
}
console.log(`Заповнив масив 20ма рандомними числами ${arr20}`);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr20[i] = Math.round((Math.random() * 732 - 8)) + 8;
}
console.log(`Заповнив масив 20ма рандомними числами в діапазоні від 8 до 732. ${arr20}`);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr20.length; i += 3) {
    console.log(`Вивів за допомогою console.log кожен третій елемент  ${arr20[i]}`);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr20.length; i += 3) {
    if (arr20[i] % 2 === 0) {
        console.log(`Вивів за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним ${arr20[i]}`);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr20Copy = [];
for (let i = 0; i < arr20.length; i += 3) {
    if (arr20[i] % 2 === 0) {
        console.log(`Вивів за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записав в новий масив ${arr20[i]}`);
        arr20Copy = arr20[i];

    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrForTest = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arrForTest.length; i++) {
    if (arrForTest[i + 1] % 2 === 0) {
        console.log(`Вивів кожен елемент масиву, сусід справа якого є парним ${arrForTest[i]}`);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrAverage = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < arrAverage.length; i++) {
    sum += arrAverage[i];
}
console.log(`Середній чек = ${sum / arrAverage.length}`);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5
// та перемістити їх в інший масив.
let arrRandom = [];
let arrRandomMultiply5;
for (let i = 0; i < 50; i++) {
    arrRandom[i] = Math.round((Math.random() * 100));

}
console.log(`Заповнив масив arrRandom 50ма рандомними числами\n ${arrRandom}`);
for (let i = 0; i < arrRandom.length; i++) {
    arrRandom[i] *= 5;
}
arrRandomMultiply5 = arrRandom.splice(0, arrRandom.length);
console.log(`Помножив всі його елементи на 5 та перемістив їх в інший масив arrRandomMultiply5\n ${arrRandomMultiply5}`);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arrMix = [1, 'Lviv', 'Kyiv', 'Berlin', 33, 22, 13, 77, true, false, 2];
let arrFilter = [];
for (let i = 0; i < arrMix.length; i++) {
    if (typeof arrMix[i] === 'number') {
        arrFilter.push(arrMix[i]);
    }
}
console.log(`Створив масив з будь якими значеннями ${arrMix}`);
console.log(`Пройшовся по ньому, і якщо елемент є числом - додав його в інший масив ${arrFilter}`);
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let i2 = 0; i2 < citiesWithId.length; i2++) {
        if (usersWithId[i].id === citiesWithId[i2].user_id) {
            usersWithCities[i] = Object.assign({}, usersWithId[i]);
            usersWithCities[i].address = citiesWithId[i2];
        }
    }

}
console.log(`З'єднав в один об'єкт користувача та місто з відповідними "id" та "user_id" .
   Записав цей об'єкт в новий масив `);
for (let i = 0; i < usersWithCities.length; i++) {

    console.log(usersWithCities[i]);

}
//  Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr10 = [525, 637, 466, 3689, 5636, 8484, 3646, 637, 96798, 44244];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] % 2 === 0) {
        console.log(`Створив масив з 10 чисел та вивів елементи значення якиї є парним ${arr10[i]}`);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr10Copy =[];
for (let i =0;i<arr10.length;i++){
    arr10Copy[i]=arr10[i];
    }
console.log(`Копія масиву скопійованого в циклі ${arr10Copy}`);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrABC = [ 'a', 'b', 'c'];
let strFor='';
for (let i =0;i<arrABC.length;i++){
strFor+=arrABC[i];
}
console.log(`За допомогою циклу for зібрав всі букви в слово ${strFor}`);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let strWhile='';
let it=0;
while (it<arrABC.length){
    strWhile+=arrABC[it];
    it++;
}
console.log(`За допомогою циклу while зібрав всі букви в слово ${strWhile}`);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let strForOf='';
for(i of arrABC){
    strForOf+=i;
}
console.log(`За допомогою циклу for of зібрав всі букви в слово ${strForOf}`);