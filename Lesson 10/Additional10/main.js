// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


addEventListener('click', (e) => {

    console.log(`Class name of element is ${e.target.className}`);
    console.log(`Tag name of element is ${e.target.tagName}`);
    console.log(`Id of element is ${e.target.id}`);
    console.log(`Width and height is ${e.target.clientWidth}*${e.target.clientHeight} `);

});

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
addEventListener('click', (e) => {

    let popUpWrap = document.body.getElementsByClassName('popUpWrap')[0];
    let popUpText = document.body.getElementsByClassName('popUpText')[0];
    popUpWrap.classList.toggle('on');
    popUpText.innerText =
        `Class name of element is ${e.target.className}
         Tag name of element is ${e.target.tagName}
         Id of element is ${e.target.id}
         Width and height is ${e.target.clientWidth}*${e.target.clientHeight}
    `;


});
// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
let printResult = (arr) => {

    let wrapForPrint = document.body.getElementsByClassName('wrapForPrint')[0];

    for (let user of arr) {
        let wrapPrintForCheckbox = document.createElement('p');
        wrapPrintForCheckbox.style.marginLeft = '10px';
        wrapForPrint.appendChild(wrapPrintForCheckbox);
        for (let userElement in user) {

            if (userElement !== 'address') {
                let printForCheckbox = document.createElement('p');
                printForCheckbox.style.margin = '0px';
                printForCheckbox.style.lineHeight = '10px';
                wrapPrintForCheckbox.appendChild(printForCheckbox);
                printForCheckbox.innerText += `\n${userElement} ${user[userElement]}`;
            } else if (userElement === 'address') {
                let printForCheckboxAddress = document.createElement('p');
                wrapPrintForCheckbox.appendChild(printForCheckboxAddress);
                printForCheckboxAddress.innerText += ` ${userElement}: `;
                for (let AddressElement in user.address) {
                    printForCheckboxAddress.innerText += ` \n -${AddressElement} ${user.address[AddressElement]} `;
                }
            }

        }

    }
};

let onlyFalse = document.body.getElementsByClassName('onlyFalse')[0];
onlyFalse.addEventListener('click', () => {
        let arrOnlyFalse = usersWithAddress.filter(value => value.status === false);
        printResult(arrOnlyFalse);


    }
);
// 2й - оставляет старше 29 лет включительно
let Over29 = document.body.getElementsByClassName('classOver29')[0];
Over29.addEventListener('click', () => {
        let arrOver29 = usersWithAddress.filter(value => value.age > 29);
        printResult(arrOver29);

    }
);
// 3й - оставляет тех у кого город киев
let kyivOnly = document.body.getElementsByClassName('classKyivOnly')[0];
kyivOnly.addEventListener('click', () => {
        let arrKyivOnly = usersWithAddress.filter(value => value.address.city.toLowerCase() === 'kyiv');
        printResult(arrKyivOnly);
    }
);


// Данные выводить в документ
//
//
//


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrWithImages = [
    'https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg',
    'https://klike.net/uploads/posts/2019-05/1559021799_1.jpg',
    'https://gr8auto.com.ua/wp-content/uploads/2019/11/bg-bmw-mobile.jpg',
    'https://luxury-trans.com.ua/img/about_us-min.jpg',
    'https://cdn2.autocentre.ua/wp-content/uploads/2019/05/ferrari-458-italia.jpg',
    'https://www.iphones.ru/wp-content/uploads/2017/03/mb_gt.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/09/122916_037145701590.jpg',
    'https://img2.goodfon.ru/wallpaper/nbig/a/42/audi-r8-avto-gold-mashina.jpg'
];
let sliderLeftArrow = document.getElementsByClassName('sliderLeftArrow')[0];
let sliderRightArrow = document.getElementsByClassName('sliderRightArrow')[0];
let sliderImg = document.getElementsByClassName('sliderImg')[0];
let counter = 0;


sliderLeftArrow.addEventListener('click', () => {
    if (counter-- === 0) {
        counter = arrWithImages.length - 1;
    }
    sliderImg.src = arrWithImages[counter];
});

sliderRightArrow.addEventListener('click', () => {
    if (counter++ === arrWithImages.length - 1) {
        counter = 0;
    }
    console.log(counter + 'R' + 'B');
    sliderImg.src = arrWithImages[counter];
    console.log(counter + 'R' + 'A');
});

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/
// або якось іншим способом змінює свій стан
let pForTest = document.getElementsByClassName('pForTest')[0];
pForTest.innerText = 'Text for testing';
pForTest.addEventListener('mousemove', (e) => {
        pForTest.addEventListener('mousedown', () => pForTest.style.fontWeight = '900'
        );
    }
);
pForTest.addEventListener('mouseup', (e) => {
    pForTest.style.fontWeight = '200';
});


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети,
// то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
//     лежащему с ним на одном уровне

