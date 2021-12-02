// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'Click';
button.id = 'text';
button.onclick = () => {
    button.style.display = 'none';

};
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
form1 = document.forms.form1;
form1.onsubmit = (e) => {
    e.preventDefault();
    if (form1.years18.value >= 18) {
        console.log('Your age is over 18');
    } else if (form1.years18.value < 18 && form1.years18.value > 0) {
        console.log('Your age is under 18');
    } else {
        console.log('Please enter correct value!');
    }
};
///////////////////////////
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.body.getElementsByClassName('menu')[0];
menu.onclick = () => {
    menu.classList.toggle('menuMini');
};


// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//
//
let comments = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit1'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit 2'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit 3'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit 4'},

];
for (let comment of comments) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let buttonForComment = document.createElement('button');
    li.innerText = `${comment.title} ${comment.body}`;
    document.body.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(buttonForComment);
    buttonForComment.addEventListener("click", () => {
        li.classList.toggle('comment');
    });
}
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/
// або якось іншим способом змінює свій стан
let pForTest = document.getElementsByClassName('pForTest')[0];
pForTest.innerText = 'Text for testing';
pForTest.addEventListener('mousemove', (e) => {
        pForTest.addEventListener('mousedown', () => pForTest.style.fontWeight = '900'
        );
    }
);
pForTest.addEventListener('mouseup', (e) => {
    pForTest.style.fontWeight = '200';
});