//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [12, 42, 646, 25523, 526, 235, 6236, 235236, 626, 236];

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'Book1',
    pages: 200,
    genre: 'Romance',
};


//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'Book1',
    pages: 200,
    genre: 'Romance',
    authors: 'Ben,Tom,Poll',
};

//4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let bookArr = [
    {
        name: 'Book1',
        pages: 200,
        genre: 'Romance',
        authors: 'Ben,Roy',
    },
    {
        name: 'Book2',
        pages: 300,
        genre: 'Classic',
        authors: 'Bond',
    }, {
        name: 'Book3',
        pages: 400,
        genre: 'Romance',
        authors: 'PollJack',
    }, {
        name: 'Book4',
        pages: 500,
        genre: 'Poetry',
        authors: 'No name',
    }];
for(let i = 0;i<bookArr.length;i++){
    console.log(bookArr[i]);
}

/*5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значення площі зберігати в змінній s.*/
const height = 23;
const width = 10;
const squareArea = (a,b)=>a*b;
let s = squareArea(height,width);
console.log(s);

/*6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
результат помістіть у змінну v.*/
const heightC = 10;
const dc = 4;
const cylinderVolume = (a,b)=>a*b*Math.PI;
let v = cylinderVolume(heightC,dc);
console.log(v);

/*7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
*/
const triangleA = 3;
const triangleB = 4;
const findHypotenuse = (a,b)=>Math.sqrt(a**2+b**2);
let hypotenuseC = findHypotenuse(triangleA,triangleB);
console.log(hypotenuseC);