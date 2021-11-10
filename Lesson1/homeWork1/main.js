/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write*/
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let number1 = 1;
let number10 = 10;
let numberMinus999 = -999;
let number123 = 123;
let PI = 3.14;
let number2Dot7 = 2.7;
let number16 = 16;
let boooleanTrue = true;
let booleanFalse = false;
console.log(`${hello} ${owu} ${com} ${ua} ${number1} ${number10} ${numberMinus999} ${number123} ${PI} ${number2Dot7} ${number16} ${boooleanTrue} ${boooleanTrue} ${booleanFalse}`);
alert(`${hello} ${owu} ${com} ${ua} ${number1} ${number10} ${numberMinus999} ${number123} ${PI} ${number2Dot7} ${number16} ${boooleanTrue} ${boooleanTrue} ${booleanFalse}`);
document.write(`<h1>${hello} ${owu} ${com} ${ua} ${number1} ${number10} ${numberMinus999} ${number123} ${PI} ${number2Dot7} ${number16} ${boooleanTrue} ${boooleanTrue} ${booleanFalse}</h1>`);


//- Переприсвоїти кожній змінній з завдання значення на довільне.
//  Вивести кожну змінну за допомогою: console.log , alert, document.write
hello = 'hello2';
owu = 'owu2';
com = 'com2';
ua = 'ua2';
number1 = 11;
number10 = 1010;
numberMinus999 = -999999;
number123 = 123123;
PI = 14.3;
number2Dot7 = 7.2;
number16 = 61;
boooleanTrue = false;
booleanFalse = true;
console.log(`${hello} ${owu} ${com} ${ua} ${number1} ${number10} ${numberMinus999} ${number123} ${PI} ${number2Dot7} ${number16} ${boooleanTrue} ${boooleanTrue} ${booleanFalse}`);
alert(`${hello} ${owu} ${com} ${ua} ${number1} ${number10} ${numberMinus999} ${number123} ${PI} ${number2Dot7} ${number16} ${boooleanTrue} ${boooleanTrue} ${booleanFalse}`);
document.write(`<h1>${hello} ${owu} ${com} ${ua} ${number1} ${number10} ${numberMinus999} ${number123} ${PI} ${number2Dot7} ${number16} ${boooleanTrue} ${boooleanTrue} ${booleanFalse}</h1>`);


//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Роман';
let lastName = 'Сенишин';
let middleName = 'Ігорович';
let person = `${firstName} ${lastName} ${middleName}`;

/*
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".*/
let myName = prompt("Введіть ваше ім'я!");
let myPatronymicName = prompt("Введіть як вас по батькові!");
let myAge = prompt("Введіть ваш вік!");

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);


/*
- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    В однакових виразах не використовувати однакові оператори!!!

5 !== 6 -> true
5 > 6 -> false
5 == 6 -> false
5 != 6 -> false
10 == 10 -> true
10 === 10 -> true
10 != 10 -> false
10 > 10 -> false
10 < 10 -> false
123 < '123' -> false
123 <= '123' -> true
*/


/*
- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let a = 5;
document.write(str + a + "<br/>");
Виведе: 205
Тому, що: str+a перетвориться у сроку, а "<br/>" буде сприйматись як перехід на новий рядок наступного тексту.

document.write(str - a + "<br/>");
Виведе:15
Тому, що: строки не працюють зі знаком мінус, що в свою чергу призведе до математичної операції 20-5.Ситуація з "<br/>" аналогічна як і вище.

document.write(str * "2" + "<br/>");
Виведе:40
Тому, що: аналогічно як і вище.

document.write(str / 2 + "<br/>");
Виведе:10
Тому, що: аналогічно як і вище.

*/
