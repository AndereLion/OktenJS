// - Дано натуральное число n. Выведите все числа от 1 до n.
let nNumber = 5;
((n) => {
    for (let i = 1; i <= n; i++) {
        console.log(`Вивів всі числа від 1 до n. ${i}`);
    }
})(nNumber);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// или в порядке убывания в противном случае.
let numberA = 20;
let numberB = -10;
((a, b) => {
    if (a === b) {
        console.log(`Number ${a} and ${b}, are equals`);
    } else if (a < b) {
        while (a <= b) {
            console.log(`Вивів всі числа від A до B включно. ${a}`);
            a++;
        }
    } else while (a >= b) {
        console.log(`Вивів всі числа від B до A включно. ${b}`);
        b++;
    }
})(numberA, numberB);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let changeNumberInArray = (arr, j) => {
    let arrTmp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = arrTmp;
};
let arrForChangeNumberInArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 2;
changeNumberInArray(arrForChangeNumberInArray, index);
console.log(`Створив функцію, яка приймає масив та число "i", та міняє місцями об\`єкт який знаходиться в індексі "i" на "i+1" ${arrForChangeNumberInArray}`);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let arrFOrNullInEnd = [0, 0, 1, 2, 3, 0, 4, 5, 6, 7, 0, 8, 9, 0, 0];
let nullInEnd = (arr) => {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1)
        }
    }
};
nullInEnd(arrFOrNullInEnd);
console.log(`Створив функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
 Двожина масиву від 2 до 100 ${arrFOrNullInEnd}`);