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
        button.innerText = 'button';
        divForUser.appendChild(button);
        button.addEventListener('click', (e) => {
            let d = document.getElementsByClassName('divAbsolute');
            if (d[0]) {
                d[0].innerHTML = '';
                document.body.removeChild(d[0]);
            }
            document.body.appendChild(divAbsolute);
            divAbsolute.classList.toggle('divAbsolute');
            if (d[0]) {
                divAbsolute.style.left = `${e.pageX + 50}px`;
                divAbsolute.style.top = `${e.pageY - 150}px`;
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => {
                        return response.json();
                    })
                    .then(comments => {

                        for (let comment of comments) {
                            if (comment.id === user.id) {
                                let p = document.createElement('p');
                                p.innerText = `-${comment.body} `;
                                divAbsolute.appendChild(p);
                            }
                        }


                    });

            }
        });
    }
};
xhr.send();