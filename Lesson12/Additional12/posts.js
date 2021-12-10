let user = JSON.parse(localStorage.getItem('user'));


let divWrapForPosts = document.createElement('div');
divWrapForPosts.classList.add('divWrapForPosts');
document.body.appendChild(divWrapForPosts);


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
        return response.json();
    })
    .then(posts => {
        for (let post of posts) {


            if (post.userId === user.id) {

                let divForPost = document.createElement('div');
                divForPost.classList.add('divForPost');
                divWrapForPosts.appendChild(divForPost);


                for (let postElement in post) {
                    let p = document.createElement('p');
                    divForPost.appendChild(p);
                    p.innerText = `${postElement} ${post[postElement]}`
                }

                let buttonToComments = document.createElement('button');
                buttonToComments.innerText = 'To comments';
                divForPost.appendChild(buttonToComments);
                buttonToComments.addEventListener('click', () => {


                    localStorage.setItem('userPost', JSON.stringify(post));
                    window.location.href = 'comments.html';
                })
            }
        }

    });