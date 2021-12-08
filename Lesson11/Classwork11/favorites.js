let getFavorites = JSON.parse(localStorage.getItem('MyFavorites'));
for (const user of getFavorites) {
    let divForUser = document.createElement('div');
    document.body.appendChild(divForUser);
    divForUser.classList.add('divForUser');
    for (const element in user) {
        let p = document.createElement('p');
        divForUser.appendChild(p);
        p.innerText = `${element} ${user[element]}`;
    }

}