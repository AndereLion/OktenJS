/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/


let biggerNum = () => {
    let a = prompt('Введіть переше число');
    let b = prompt('Введіть друге число');
    console.log(
        a === b ? `${a} is equal ${b}` : (a < b ? `${b} is bigger than ${a}` : `${a} is bigger than ${b}`)
    )
};
biggerNum();
/*- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.*/
let flatNum = prompt('Please enter flat number');

if (flatNum >= 1 && flatNum <= 20) {
    document.write(`<h1>Flat ${flatNum} is located in the 1st entrance!</h1>`)
} else if (flatNum >= 21 && flatNum <= 48) {
    document.write(`<h1>Flat ${flatNum} is located in the 2nd entrance!</h1>`)
} else if (flatNum >= 49 && flatNum <= 90) {
    document.write(`<h1>Flat ${flatNum} is located in the 3rd entrance!</h1>`)
} else document.write(`<h2 style="color: red">Flat ${flatNum} not exist!</h2>`);

/*- Ми маємо змінну number в яку користувач задає числове значення,
якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО*/
let number = +prompt(`Please enter  number 10`);
console.log(number === 10 ? 'Вірно' : 'Невірно');


/*- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else*/
let x = [];
if (typeof x === 'number') {
    console.log(1)
} else if (typeof x === 'string') {
    console.log(2)
} else if (typeof x === 'boolean') {
    console.log(3)
} else if (typeof x === 'object') {
    console.log(4)
}else  console.log(`Щось інше`);


/*- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН*/
let tm = -40;
if (tm>=10&&tm<=20){
    console.log('Ми йдемо ВЧИТИСЯ!');
} else console.log('Сидимо вдома і вчимося ОНЛАЙН');

/*- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
    вивести Повідомлення - що число не вірне ... .
*/
switch (5) {
    case 1:
        console.log(`Ви виграли автомобіль!`);
        break;
    case 2:
        console.log(`Ви виграли мотоцикл!`);
        break;
    case 3:
        console.log(`Ви виграли телефон!`);
        break;
    case 4:
        console.log(`Ви виграли стрибок без парашута!`);
        break;
    case 5:
        console.log(`Ви виграли подорож в один кінець!`);
        break;
    default:console.log(`Число не вірне... Подорож чекає на вас!`);
}