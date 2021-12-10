// // Отримати відповідь з цього ресурсу , та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/posts
// //     зробити кнопку до кожного поста.
// при кліку на яку виводяться в окремий блок всі коментарі поточного поста

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
        let divAbsolute = document.createElement("div");
        let button = document.createElement('button');
        button.innerText = 'To comments';
        divForUser.appendChild(button);


        button.addEventListener('click', (e) => {
            localStorage.setItem('Post', JSON.stringify(user));
            window.location.href = 'posts.html';
        });
    }
};
xhr.send();