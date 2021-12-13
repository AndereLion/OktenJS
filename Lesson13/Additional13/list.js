if (JSON.parse(localStorage.getItem('items'))) {
    let getList = JSON.parse(localStorage.getItem('items'));

    for (const item of getList) {
        let divForItem = document.createElement('div');
        document.body.appendChild(divForItem);
        divForItem.classList.add('divForItem');
        for (const element in item) {
            if (element === 'itemImg') {
                let img = document.createElement('img');
                divForItem.appendChild(img);
                img.style.width = '150px';
                img.src = `${item[element]}`;
            } else {
                let p = document.createElement('p');
                divForItem.appendChild(p);
                p.innerText = `${element} ${item[element]}`;
            }
        }
        let buttonFotClear = document.createElement('button');
        buttonFotClear.innerText = 'Clear';
        buttonFotClear.classList.add('buttonFotClear');
        divForItem.appendChild(buttonFotClear);
        buttonFotClear.addEventListener('click', () => {

            let items = JSON.parse(localStorage.getItem('items'));

            for (let i = 0; i < items.length; i++) {
                if (items[i].itemName === item.itemName) {
                    console.log(items[i].itemName);
                    items.splice(i, 1);
                    localStorage.setItem('items', JSON.stringify(items));
                    location.reload();
                }
            }
        });
    }
    let buttonClearLocalStorage = document.body.getElementsByClassName('buttonClearLocalStorage')[0];
    buttonClearLocalStorage.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}