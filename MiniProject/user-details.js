// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user
// на кнопку/ссылку которого был совершен клик ранее.

let userInfo = JSON.parse(localStorage.getItem('userTarget'));

let divUserInfo = document.createElement('div');
divUserInfo.classList.add('divUserInfo');
document.body.appendChild(divUserInfo);

for (let userInfoElement in userInfo) {
    let p = document.createElement('p');
    divUserInfo.appendChild(p);


    if (userInfoElement === 'address') {
        p.innerText = `${userInfoElement} :`;
        for (let address in userInfo.address) {


            if (address === 'geo') {
                let pForAddress = document.createElement('p');
                pForAddress.innerText = `-  ${address} :`;
                divUserInfo.appendChild(pForAddress);
                for (let geoElement in userInfo.address.geo) {

                    let pForGeoElement = document.createElement('p');
                    pForGeoElement.innerText = `- - ${geoElement} ${userInfo.address.geo[geoElement]}`;
                    divUserInfo.appendChild(pForGeoElement);
                }
            } else {


                let pForAddress = document.createElement('p');
                pForAddress.innerText = `  - ${address} ${userInfo.address[address]}`;
                divUserInfo.appendChild(pForAddress);
            }
        }
    } else if (userInfoElement === 'company') {
        p.innerText = `${userInfoElement}:`;
        for (let company in userInfo.company) {
            let pForCompany = document.createElement('p');
            pForCompany.innerText = `  - ${company} ${userInfo.company[company]}`;
            divUserInfo.appendChild(pForCompany);
        }
    } else {
        p.innerText = `${userInfoElement} ${userInfo[userInfoElement]}`;
    }
}
// 5 Добавить кнопку "post of current user", при клике на которую,
// появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

let buttonPostOfCurrentUser = document.createElement('button');
buttonPostOfCurrentUser.classList.add('buttonPostOfCurrentUser');
buttonPostOfCurrentUser.innerText = 'Post of current user';
document.body.appendChild(buttonPostOfCurrentUser);
let divForPostsWrap = document.createElement('div');
document.body.appendChild(divForPostsWrap);
buttonPostOfCurrentUser.addEventListener('click', () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}/posts`)
        .then(response => {
            return response.json();
        })
        .then(posts => {

            divForPostsWrap.classList.add('divForPostsWrap');

            for (let post of posts) {
                let divForPost = document.createElement('div');
                divForPostsWrap.appendChild(divForPost);
                divForPost.classList.add('divForPost');

                for (let postElement in post) {
                    if (postElement === 'title') {
                        let p = document.createElement('p');
                        divForPost.appendChild(p);
                        p.innerText = `${postElement} ${post[postElement]}`;
                    }




                }
                // 6 Каждому посту добавить кнопку/ссылку,
// при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

                let buttonPostDetails = document.createElement('button');
                buttonPostDetails.innerText = 'Post-details';
                divForPost.appendChild(buttonPostDetails);
                buttonPostDetails.addEventListener('click',()=>{

                    localStorage.setItem('userPost', JSON.stringify(post));
                    window.location.href = 'post-details.html';


                })
            }
        });
});

