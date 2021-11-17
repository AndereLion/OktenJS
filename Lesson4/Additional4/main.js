//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
let concatF = (...args) => {
    let arrTmp = '';
    if (args.length === 1) {
        console.log(`Cтворив функцію, яка якщо приймає один аргумент, просто вивдоить його,
якщо два аргументи - складає або конкатенує їх між собою. ${args[0]}`)
    } else {

        for (let i = 0; args.length > i; i++) {
            arrTmp += args[i];

        }
        console.log(`Cтворив функцію, яка якщо приймає один аргумент, просто вивдоить його,
якщо два аргументи - складає або конкатенує їх між собою. ${arrTmp}`);
    }

};
concatF('Hello');
concatF(3, 2, '2', 3, 'ffa');
// - створити функцію  яка приймає два масиви та складає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];

let twoArrays = (arr1, arr2) => {
    let arrSum = [];
    for (let i = 0; arr1.length > i; i++) {
        arrSum.push(arr1[i] + arr2[i]);
    }

    return arrSum;
};
let arr3 = twoArrays(arr1, arr2);
console.log(`Створив функцію  яка приймає два масиви та складає значення елементів з однаковими індексами
та повертає новий результуючий масив. ${arr3}`);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,

    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,

    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,

    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,

    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,

    },
];
let arrObjectReturnKeys = (arrOfObjects) => {
    let arrKeys = [];
    for (let users of arrOfObjects) {
        for (let keys in users) {
            if (users.hasOwnProperty(keys)) {
                arrKeys.push(keys);
            }
        }
    }
    return arrKeys;
};
console.log(`Створив функцію яка приймає масив будь яких объектів,
 та повертає масив ключів всіх обєктів ${arrObjectReturnKeys(simpsons)}`);
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arrObjectReturnData = (arrOfObjects) => {
    let arrKeys = [];
    for (let users of arrOfObjects) {
        for (let keys in users) {
            if (users.hasOwnProperty(keys)) {
                arrKeys.push(users[keys]);
            }
        }
    }
    return arrKeys;
};
console.log(`Створив функцію яка приймає масив будь яких объектів,
 та повертає масив значень всіх обєктів ${arrObjectReturnData(simpsons)}`);
//
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт ,
//     який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let changeSymbolInArray = (arr, j) => {
    let tmp;
    tmp = arr[j];
    arr[j] = arr [j + 1];
    arr[j + 1] = tmp;
    return arr;
};
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Створив функцію яка приймає масив та число "i", та міняє місцями об\`єкт ,
який знаходиться в індексі "i" на "i+1" ${changeSymbolInArray(testArray, 3)}`);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let nullInEnd = (arr) => {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
};
let testArrayForNullInEnd = [0, 0, 1, 2, 0, 3, 4, 5, 0, 0, 6, 7, 8, 9, 0, 0];
nullInEnd(testArrayForNullInEnd);
console.log(`Сворив функцію яка буде переносити елементи з значенням 0 у кінець масиву.
Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100 ${testArrayForNullInEnd}`);

