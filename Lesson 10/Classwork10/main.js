//// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
let buttonConfirm = document.body.getElementsByClassName('buttonConfirm')[0];
buttonConfirm.addEventListener('click', () => {
    console.log(`Text from input 1 = ${document.forms.form1.input1.value}`);
    console.log(`Text from input 2 = ${document.forms.form1.input2.value}`);

});
let buttonSave = document.body.getElementsByClassName('buttonSave')[0];
buttonSave.addEventListener('click', () => {
    console.log(`Text from input 3 = ${document.forms.form2.input3.value}`);
    console.log(`Text from input 4 = ${document.forms.form2.input4.value}`);
});

// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
let inputRows = document.getElementsByClassName('inputRows')[0];
let inputColumns = document.getElementsByClassName('inputColumns')[0];
let inputFilling = document.getElementsByClassName('inputFilling')[0];
let buttonForInputRows = document.getElementsByClassName('buttonForInputRows')[0];
let divForTable = document.getElementsByClassName('divForTable')[0];

buttonForInputRows.addEventListener('click', () => {

    let table = document.createElement("table");
    table.style.border = '1px solid black';
    divForTable.appendChild(table);
    for (let i = 0; i < inputRows.value; i++) {
        let tr = document.createElement("tr");

        table.appendChild(tr);

        for (let j = 0; j < inputColumns.value; j++) {
            let td = document.createElement("td");
            td.style.border = '1px solid black';

            tr.appendChild(td);
            td.innerText = inputFilling.value;
        }
    }
});


// (Додатковачастина для завдання)//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку//
let arrNotGoodWords = [
    'badword1', 'badword2', 'badword3', 'badword4', 'badword5', 'badword6', 'badword7', 'badword8', 'badword9'
];
let badWordChecker = (word) => {
    for (let badWord of arrNotGoodWords) {
        if (word.toLowerCase() === badWord) {
            return true
        }
    }
    return false;

};

let inputBadWord = document.getElementsByClassName('inputBadWord')[0];

let buttonForBadWord = document.getElementsByClassName('buttonForBadWord')[0];
buttonForBadWord.addEventListener('click', () => {
    if (badWordChecker(inputBadWord.value)) {

        alert('Do not swear!!!')
    }
});
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let badWordCheckerUpgrade = (word) => {

    for (let badWord of arrNotGoodWords) {
        return word.includes(badWord);
    }
};
buttonForBadWord.addEventListener('click', () => {
    if (badWordCheckerUpgrade(inputBadWord.value)) {
        alert('Do not swear!!!')
    }
});

