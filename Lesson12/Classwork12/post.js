let post = JSON.parse(localStorage.getItem('Post'));


let divWrapForComments = document.createElement('div');
divWrapForComments.classList.add('divWrapForComments');
document.body.appendChild(divWrapForComments);


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
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

