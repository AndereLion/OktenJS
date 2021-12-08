// є масив -
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let favorites = [];
for (let user of users) {
    let div = document.createElement('div');
    div.classList.add('divForUser');
    document.body.appendChild(div);
    for (let element in user) {
        let p = document.createElement('p');
        p.innerText = `${element} ${user[element]}`;
        div.appendChild(p);
    }
    let buttonAddToMyFavorites = document.createElement('button');
    buttonAddToMyFavorites.addEventListener('click', () => {
        favorites.push(user);
        localStorage.setItem('MyFavorites', JSON.stringify(favorites));


    });
    buttonAddToMyFavorites.innerText = 'To my favorites';
    div.appendChild(buttonAddToMyFavorites);
}
console.log(favorites);


// Створити сторніку favorites.html
// при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.