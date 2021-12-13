// 7 Вывести всю, без исключения,
// информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
let userPost = JSON.parse(localStorage.getItem('userPost'));


let divForUserPost = document.createElement('div');
divForUserPost.classList.add('divForUserPost');
document.body.appendChild(divForUserPost);
for (let postElement in userPost) {

    let p = document.createElement('p');
    divForUserPost.appendChild(p);
    p.innerText = `${postElement} ${userPost[postElement]}`;

}
// 8 Ниже информации про пост,
// вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let divWrapForComments = document.createElement('div');
divWrapForComments.classList.add('divWrapForComments');
document.body.appendChild(divWrapForComments);


fetch(`https://jsonplaceholder.typicode.com/posts/${userPost.id}/comments`)
    .then(response => {
        return response.json();
    })
    .then(comments => {
        for (let comment of comments) {
            let divForComment = document.createElement('div');
            divForComment.classList.add('divForComment');
            divWrapForComments.appendChild(divForComment);


            for (let commentElement in comment) {
                let p = document.createElement('p');
                divForComment.appendChild(p);
                p.innerText = `${commentElement} ${comment[commentElement]}`
            }
        }


    });

