// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let makeValidName = (str) => {
//     let arrTmp = str.split('');
//         for (let i = 0; i < arrTmp.length; i++) {
//             if (arrTmp[i] === '-' || arrTmp[i] === '_' || arrTmp[i] === '.') {
//                 arrTmp[i] = ' ';
//             }
//     }
//     return arrTmp.join('');
// };
let makeValidName = (str) => {
    return str.replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ');
};
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
document.write(`<br>${makeValidName(n1)}`);
document.write(`<br>${makeValidName(n2)}`);
document.write(`<br>${makeValidName(n3)}`);


//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random100 = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = Math.round(Math.random() * 100);

    }
    return arr;
};
document.write(`<br>Створив функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100 <br><b>${random100()}</b>`);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let randomArr = random100();
randomArr.sort();
document.write(`<br>Згенерувв, за допомогою попередньої функції масив рандомних цілих числових значень. Відсортував його за допомоги sort<br><b>${randomArr}</b>`);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomArrForFilter = random100();
document.write(`<br>Згенерував, за допомоги попередньої функції масив рандомних цілих числових значень.
 Відфільтрував  його за допомогою filter, залишивши тільки парні числа<br><b> ${randomArrForFilter.filter(e => e % 2 !== 0)}</b>`);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let randomArrForMap = random100();
let map = randomArrForMap.map(value => value + '');
document.write(`<br>Згенерував, за допомоги попередньої функції масив .
За допомогою map та колбеку перетворв всі об'єкти в масиві на стрінгові.<br><b> ${map}</b>`);
// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums(' ') // [21,11,3]
let direction = 'ascending';
let directionR = 'descending';
let nums = [11, 21, 3];
let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);

    }
    return arr;
};

document.write(`<br>Створив функцію sortNums(direction), яка прймає масив чисел,
та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
<br><b> ${sortNums(nums, direction)}</b>`);
document.write(`<br>Створив функцію sortNums(direction), яка прймає масив чисел,
та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
<br><b> ${sortNums(nums, directionR)}</b>`);
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(`Відсортував масив за спаданням за monthDuration
відфільтрував , залишивши тільки курси з тривалістю більше 5 місяців
`);

console.log(
    coursesAndDurationArray
        .sort((a, b) => b.monthDuration - a.monthDuration)
        .filter(value => value.monthDuration > 5));
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3))
// [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i = i + 3) {
        arr.push(str.slice(i, i + n));
    }
    return arr;
};
document.writeln(`<br>Написав функцію cutString(str, n), котра ділить стрічку на підстрічки, довжиною в n символів.
<br><b> ${cutString('наслаждение', 3)}</b>`);
