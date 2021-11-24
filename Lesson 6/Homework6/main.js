// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(`Знайшов та вивів довижину настипних стрінгових значень:hello world, lorem ipsum, javascript is cool`);
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(`Перевів до великого регістру наступні стрінгові значення
 'hello world', 'lorem ipsum', 'javascript is cool'`);
str1 = str1.toLocaleUpperCase();
str2 = str2.toLocaleUpperCase();
str3 = str3.toLocaleUpperCase();
console.log(str1);
console.log(str2);
console.log(str3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(`Перевів до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'`);
str1 = str1.toLocaleLowerCase();
str2 = str2.toLocaleLowerCase();
str3 = str3.toLocaleLowerCase();
console.log(str1);
console.log(str2);
console.log(str3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str = str.trim();
console.log(`Є "брудна" стрінга let str = ' dirty string   ' . 
Почистив її від зайвих пробілів. ${str}`);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let strForStringToArray = 'Каждый охотник желает знать';
let stringToArray = (str) => {
    let arr = str.split(' ');
    document.writeln(`<br><b>${arr}</b>`)
};
document.writeln(`Написав  функцію strForStringToArray, яка перетворює рядок на масив слів.'Каждый охотник желает знать'`);
stringToArray(strForStringToArray);

// - Напишіть функцію delete_characters(str, length),
// яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let deleteCharacters = (str, length) => {
    return str.slice(0, length);
};
let length = 6;
let strForDeleteCharacters = 'Кожен мисливець бажає знати';
document.write(`<br>Написав функцію delete_characters(str, length),
 яка повертає підрядок, що складається із зазначеної кількості символів.<br> <b>${deleteCharacters(strForDeleteCharacters, length)}</b>`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strForInsertDash = "HTML JavaScript PHP";
let insertDash = (str) => {
    return (str.replaceAll(' ', '-')).toLocaleUpperCase();
};
document.writeln(`<br>Написав функцію insertDash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
При цьому всі символи рядка перевів у верхній регістр.<br><b>${insertDash(strForInsertDash)}</b>`);

// - Напишіть функцію, яка приймає рядок як аргумент
// і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstCharacterToUpperCase = (str) => {

    return str[0].toUpperCase() + str.slice(1);
};
let strForFirstCharacterChange = 'java (вимовляється Джава) — об\'єктно-орієнтована мова програмування';
document.writeln(`<br>Написав функцію, яка приймає рядок як аргумент
і перетворює регістр першого символу рядка з нижнього регістру у верхній.<br><b>${firstCharacterToUpperCase(strForFirstCharacterChange)}</b>`);
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//-Перший варіант.
let capitalize = (str) => {
    let strReturn = '';
    let arrReturn = str.split(' ');
    for (let i = 0; i < arrReturn.length; i++) {
        arrReturn[i] = (arrReturn[i])[0].toUpperCase() + arrReturn[i].slice(1) + ' ';
        strReturn += arrReturn[i];
    }
    return strReturn;
};
//-Другий варіант.
let capitalize2 = (str) => {
    let arrReturn = str.split('');
    arrReturn[0]=arrReturn[0].toUpperCase();
    for (let i = 0; i < arrReturn.length - 1; i++) {
           if (arrReturn[i] === ' ') {
               arrReturn[i + 1]=arrReturn[i + 1].toUpperCase();
        }
    }
    return arrReturn.join('');
};

let strForCapitalize = 'програмування — процес проектування, написання, тестування, зневадження і підтримки комп\'ютерних програм.';
let strForCapitalize2 = 'програмування — процес проектування, написання, тестування, зневадження і підтримки комп\'ютерних програм.';
document.write(`<br>Перший варіант.Написав функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.<br><b>${capitalize(strForCapitalize)}</b>`);
document.write(`<br>Другий варіант.Написав функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.<br><b>${capitalize2(strForCapitalize2)}</b>`);
