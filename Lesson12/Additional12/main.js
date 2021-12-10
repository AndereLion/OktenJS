// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку,
//     при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку,
//     при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        for (let user of users) {
            let divForUser = document.createElement('div');
            divForUser.classList.add('divForUser');
            document.body.appendChild(divForUser);

            for (let userElement in user) {
                if (userElement === 'address') {
                    let divForAddress = document.createElement('div');
                    divForUser.appendChild(divForAddress);
                    let p = document.createElement('p');
                    p.innerText = `${userElement}: `;
                    divForAddress.appendChild(p);
                    for (const userAddress in user.address) {
                        let p = document.createElement('p');
                        p.innerText = `-${userAddress} ${user.address[userAddress]}`;
                        divForAddress.appendChild(p);
                    }
                } else if (userElement === 'company') {
                    let divForCompany = document.createElement('div');
                    divForUser.appendChild(divForCompany);
                    let p = document.createElement('p');
                    p.innerText = `${userElement}: `;
                    divForCompany.appendChild(p);
                    for (const userCompany in user.company) {
                        let p = document.createElement('p');
                        p.innerText = `-${userCompany} ${user.company[userCompany]}`;
                        divForCompany.appendChild(p);
                    }
                } else {
                    let p = document.createElement('p');
                    p.innerText = `${userElement} ${user[userElement]}`;
                    divForUser.appendChild(p);
                }
            }
            let buttonUser = document.createElement('button');
            buttonUser.innerText = 'To posts';
            divForUser.appendChild(buttonUser);
            let divAbsolute = document.createElement('div');
            buttonUser.addEventListener('click', (e) => {

                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = 'posts.html';


            })
        }
    });
