// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

((a, b, c) => {
    if (a < b && a < c) {
        console.log(`${a} Найменше число серед ${a}, ${b}, ${c}`)
    } else if (b < a && b < c) {
        console.log(`${b} Найменше число серед ${a}, ${b}, ${c}`)
    } else if (c < a && c < b) {
        console.log(`${c} Найменше число серед ${a}, ${b}, ${c}`);
    }
})(13,6,12);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
((a, b, c) => {
    if (a > b && a > c) {
        console.log(`${a} Найбільше число серед  ${a}, ${b}, ${c}`)
    } else if (b > a && b > c) {
        console.log(`${b} Найбільше число серед  ${a}, ${b}, ${c}`)
    } else if (c > a && c > b) {
        console.log(`${c} Найбільше число серед  ${a}, ${b}, ${c}`);
    }
})(33,13,5);
// - створити функцію яка повертає найбільше число з масиву
let arrForTest = [4, 2, 7, 43, 7, 35, 48, 364, 26, 2772, 246, 77, -44, 55555, 26, 6666, 6277, 26662];
let maxNumberInArray = ((arr) => {
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i]
        }
    }
    return maxNumber;
})(arrForTest);

console.log(`Найбільше число з масиву ${maxNumberInArray}`);
// - створити функцію яка повертає найменьше число з масиву
let arrForTest2 = [4, 2, 7, 43, 7, 35, 48, 364, 26, 2772, 246, 77, -44, 55555, 26, 6666, 6277, 26662];
let minNumberInArray = ((arr) => {
    let minNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minNumber > arr[i]) {
            minNumber = arr[i]
        }
    }
    return minNumber;
})(arrForTest2);

console.log(`Найменше число з масиву ${minNumberInArray}`);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let arrForTestArrSum = [4, 2, 7, 43, 7, 35, 48, 364, 26, 2772, 246, 77, -44, 55555, 26, 6666, 6277, 26662];
let arrSum = ((arr) => {
    let sum = 0;
    for (i of arr) {
        sum += i;
    }
    return sum;
})(arrForTestArrSum);
console.log(`Сума значення елементів масиву  ${arrSum}`);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrForTestAverage = [364, 26, 2772, 246, 77, -44, 55555, 26, 6666, 6277, 26662];
let arrAverage = ((arr) => {
    let sum = 0;
    for (i of arr) {
        sum += i;
    }
    return Math.round(sum / arr.length);
})(arrForTestAverage);
console.log(`Середнє арифметичне  ${arrAverage}`);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let arrArgs = [3, 4, 2, 5, 6, 2, 7, 9, 9, 363, 4];
let minNumberArgs = ((args) => {
    let minOfArgs = args[0];
    let maxOfArgs = args[0];
    for (i of args) {
        if (maxOfArgs < i) {
            maxOfArgs = i
        }
        if (minOfArgs > i) {
            maxOfArgs = i
        }
    }
    console.log(`Максимальне ${maxOfArgs}`);
    return minOfArgs;
})(arrArgs);
console.log(`Мінімальне ${minNumberArgs}`);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let testArray = [];
((arr) => {
    for (let i = 0; 10 > i; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    console.log(`Створив функцію яка заповнює масив рандомними числами та виводить його ${arr}`);
})(testArray);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArrWithLimit = [];
let limitNumber = 25;
((arr, limit) => {
    for (let i = 0; 20 > i; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
})(randomArrWithLimit,limitNumber);
console.log(`Створив функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
${randomArrWithLimit}`);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrayForReversTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
((arr) => {
    let arrForReverse = [];
    let it = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arrForReverse[it] = arr[i];
        it++;
    }
    arrayForReversTest =arrForReverse;

})(arrayForReversTest);
console.log(`Масив у звортньому напрямку ${arrayForReversTest}`);