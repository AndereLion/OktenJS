// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.innerText = 'Hello. I am div.';
div.style.background = 'silver';
div.style.fontSize = '40px';
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);
// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu

let menu = document.getElementsByClassName('menu');
for (let m of menu) {
    for (let e of arr) {
        let li = document.createElement('li');
        li.innerText = e;
        m.appendChild(li);
    }
}
// Завдання робити через цикли.
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//
for (let e of coursesAndDurationArray) {

    for (let o in e) {
        const div = document.createElement('div');
        div.innerText = `${o} ${e[o]}`;
        document.body.appendChild(div);
    }
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let e of coursesAndDurationArray2) {

        let div = document.createElement('div');
        let  h1 = document.createElement('h1');
        let p = document.createElement('p');
        div.classList.add('item');
        h1.classList.add('heading');
        p.classList.add('description');
        h1.innerText =e.title;
        p.innerText = e.monthDuration;
        div.appendChild(h1);
        div.appendChild(p);
        document.body.appendChild(div);

}