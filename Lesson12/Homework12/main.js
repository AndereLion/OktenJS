// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let requestURL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);

xhr.onload = () => {
    for (let user of JSON.parse(xhr.response)) {
        let divForUser = document.createElement('div');
        divForUser.classList.add('divForUser');
        document.body.appendChild(divForUser);
        for (let userElement in user) {
            let p = document.createElement('p');
            p.innerText = `-${userElement} ${user[userElement]}`;
            divForUser.appendChild(p);
        }
    }
};
    xhr.send();
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let requestURL2 = 'https://jsonplaceholder.typicode.com/comments';
const xhr2 = new XMLHttpRequest();

xhr2.open('GET', requestURL2);

xhr2.onload = () => {
    for (let user of JSON.parse(xhr2.response)) {
        let divForUser = document.createElement('div');
        divForUser.classList.add('divForUser');
        document.body.appendChild(divForUser);
        for (let userElement in user) {
            let p = document.createElement('p');
           p.innerText = `-${userElement} ${user[userElement]}`;
            divForUser.appendChild(p);
        }
    }
};
xhr2.send();