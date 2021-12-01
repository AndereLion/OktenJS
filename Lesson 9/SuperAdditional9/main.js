// - З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let usersAddress = [];
for (let i = 0; i < users.length; i++) {
    usersAddress[i] = users[i].address;
}


// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
for (let user of users) {
    let divForUser = document.createElement('div');
    divForUser.classList.add('userWrap');
    divForUser.style.marginBottom = '20px';

    for (let element in user) {
        if (element !== 'address') {
            divForUser.innerText += ` ${element} ${user[element]} `;

            document.body.appendChild(divForUser);
        } else {
            for (let address in user.address) {
                divForUser.innerText += `\n ${address} ${user.address[address]} `;
                document.body.appendChild(divForUser);
            }
        }
    }
}
// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

for (let user of users) {
    let divForUser2 = document.createElement('div');
    divForUser2.style.marginBottom = '20px';
    document.body.appendChild(divForUser2);
    for (let element in user) {
        let divForElement = document.createElement('div');
        divForUser2.appendChild(divForElement);
        if (element === 'address') {
            divForElement.innerText = `${element} `;
            for (let elem in user.address) {
                divForElement.innerText += `\n  \u00A0 \u00A0${elem} ${user.address[elem]}`;
            }
        } else {
            divForElement.innerText = `${element} ${user[element]}`;
        }
    }
}

// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
// з блоками для кожної властивості
for (let user of users) {
    let divForUser2 = document.createElement('div');
    divForUser2.style.marginBottom = '20px';
    document.body.appendChild(divForUser2);
    for (let element in user) {
        let divForElement = document.createElement('div');
        divForUser2.appendChild(divForElement);
        if (element === 'address') {
            divForElement.innerText = `${element} `;
            for (let elem in user.address) {
                let pForAddressElement = document.createElement('p');
                pForAddressElement.innerText += `${elem} ${user.address[elem]}`;
                divForElement.appendChild(pForAddressElement);
            }
        } else {
            divForElement.innerText = `${element} ${user[element]}`;
        }
    }
}


//
//
//
// -Є масив котрий характеризує правила.

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let rulesClass = document.body.getElementsByClassName('rules');
for (let h2AndP of rulesClass) {
    h2AndP.innerHTML = h2AndP.innerHTML.replaceAll('<h2>', '<ul><h2>').replaceAll('</h2>', '</h2></ul>').replaceAll('p', 'li');
}
////////////////////////////////////////////////////////////////////
//Створити скрипт який ітерує цей масив,
// та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок,
//     текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let divWrapForRules = document.createElement('div');
document.body.appendChild(divWrapForRules);
for (let rule of rules) {
    let divForRule = document.createElement('div');
    divWrapForRules.appendChild(divForRule);
    let h2ForTitle = document.createElement('h2');
    h2ForTitle.innerText = rule.title;
    let pForBody = document.createElement('p');
    pForBody.innerText = rule.body;
    divForRule.appendChild(h2ForTitle);
    divForRule.appendChild(pForBody);
}