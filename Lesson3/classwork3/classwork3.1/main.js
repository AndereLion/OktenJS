// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// та:
//     1. перебрати його циклом while
let it = 0;
while (it < arr.length) {
    console.log(`Перебрати циклом while ${arr[it]}`);
    it++;
}
//     2. перебрати його циклом for
for (let i = 0; i < arr.length; i++) {
    console.log(`Перебрати циклом for ${arr[i]}`);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let it2 = 0;
while (it2 < arr.length) {
    if (arr[it2] % 2 !== 0) {
        console.log(`Непарні циклом while ${arr[it2]}`);
    }
    it2++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(`Непарні циклом for ${arr[i]}`);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let it3 = 0;
while (it3 < arr.length) {
    if (arr[it3] % 2 === 0) {
        console.log(`Парні циклом while ${arr[it3]}`);
    }
    it3++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(`Парні циклом for ${arr[i]}`);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
let arrCopy = arr.slice();
for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] % 3 === 0) {
        arrCopy[i] = 'okten';

    }
}
console.log(`Замінив кожне число кратне 3 на слово "okten" ${arrCopy}`);
// 8. вивести масив в зворотньому порядку.
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`Вивів масив у зворотньому порядку циклом for ${arr[i]}`);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let itR = arr.length - 1;
while (itR >= 0) {
    console.log(`Перебрати в зворотньому циклі while ${arr[itR]}`);
    itR--;
}
let it2R = arr.length - 1;
while (it2R >= 0) {
    if (arr[it2R] % 2 !== 0) {
        console.log(`Непарні в зворотньому циклі while ${arr[it2R]}`);
    }
    it2R--;
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
        console.log(`Непарні в зворотньому циклі for ${arr[i]}`);
    }
}
let it3R = arr.length - 1;
while (it3R >= 0) {
    if (arr[it3R] % 2 === 0) {
        console.log(`Парні в зворотньому циклі while ${arr[it3R]}`);
    }
    it3R--;
}
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(`Парні в зворотньому циклі for ${arr[i]}`);
    }
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}
console.log(`Замінив кожне число кратне 3 на слово "okten" у зворотньому циклі ${arr}`);