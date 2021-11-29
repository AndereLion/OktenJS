//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let main_headerId = document.getElementById('main_header');
main_headerId.style.color = 'silver';
main_headerId.innerText = 'September-2021';
// b) робить шириниу елементу ul 400px
let ul = document.querySelector('ul');
ul.style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (let e of linkList) {
    e.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
let listElement2Text;
for (let e of listElement2) {
    listElement2Text = e.firstChild.innerText
}
console.log(listElement2Text);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.querySelectorAll('li');
for (let e of li) {
    e.style.background = 'gray';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.querySelectorAll('a');
for (let e of a) {
    e.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (let e of a) {
    if (e.innerHTML === 'link3') {
        e.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let e of a) {
    e.classList.add(`element_${e.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub_header = document.getElementsByClassName('sub-header');
for (let e of sub_header) {
    e.style.background = prompt('Please enter background color!');
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елементу = content 2 segment .
// Колір отримати з prompt()
for (let e of sub_header) {
    if (e.innerText === 'content 2 segment') {
        e.style.color = prompt('Please enter font color!');
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1');
for(let e of content_1){
 e.innerText = prompt('Please enter text for content_1 class');
}
console.log(content_1);
// l) отримати елементи p та змінити їм padding на 20px
let p = document.querySelectorAll('p');
for(let e of p){
    e.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for(let e of text2){
    e.innerText = 'sep-2021';
}