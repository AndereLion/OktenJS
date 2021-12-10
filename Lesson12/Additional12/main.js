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
            buttonUser.innerText = 'btnUser';
            divForUser.appendChild(buttonUser);
            let divAbsolute = document.createElement('div');
            buttonUser.addEventListener('click', (e) => {
                let d = document.getElementsByClassName('divAbsolute');
                if (d[0]) {
                    d[0].innerHTML = '';
                    document.body.removeChild(d[0]);
                }
                divAbsolute.classList.toggle('divAbsolute');
                document.body.appendChild(divAbsolute);
                if (d[0]) {
                    divAbsolute.style.left = `330px`;
                    divAbsolute.style.top = `${e.pageY - 250}px`;

                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => {
                            return response.json();
                        })
                        .then(posts => {

                            for (let post of posts) {
                                if (post.userId === user.id) {
                                    let divForPost = document.createElement('div');
                                    divForPost.classList.add('postElement');
                                    divAbsolute.appendChild(divForPost);
                                    let buttonForPost = document.createElement('button');
                                    buttonForPost.innerText = 'To comments';

                                    for (let postElement in post) {
                                        let p = document.createElement('p');

                                        p.innerText = `${postElement} ${post[postElement]}`;
                                        divForPost.appendChild(p);

                                    }

                                    divForPost.appendChild(buttonForPost);
                                    let divAbsoluteForComment = document.createElement('div');
                                    buttonForPost.addEventListener('click', () => {


                                            let d = document.getElementsByClassName('divAbsoluteForComment');

                                            divAbsoluteForComment.classList.add('divAbsoluteForComment');
                                            document.body.appendChild(divAbsoluteForComment);

                                            divAbsoluteForComment.style.left = `330px`;
                                            divAbsoluteForComment.style.top = `${e.pageY - 250}px`;


                                            document.body.appendChild(divAbsoluteForComment);
                                            fetch('https://jsonplaceholder.typicode.com/comments')
                                                .then(response => {
                                                    return response.json();
                                                })
                                                .then(comments => {

                                                    for (let comment of comments) {
                                                        if (comment.postId === post.id) {

                                                            let divForComment = document.createElement('div');
                                                            divForComment.classList.add('commentElement');
                                                            divAbsoluteForComment.appendChild(divForComment);

                                                            for (let commentElement in comment) {
                                                                let p = document.createElement('p');

                                                                p.innerText = `${commentElement} ${comment[commentElement]}`;
                                                                divForComment.appendChild(p);

                                                            }


                                                        }
                                                    }
                                                });


                                        }
                                    );
                                    divAbsoluteForComment.addEventListener('click', () => {
                                        divAbsoluteForComment.remove();

                                    });

                                }
                            }
                        });
                }
            })
        }
    });
