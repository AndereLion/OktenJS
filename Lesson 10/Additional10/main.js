// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let email1 = 'someemail@gmail.com';
let email2 = 'someeMAIL@gmail.com';
let email3 = 'someeMAIL@i.ua';
let email4 = 'some.email@gmail.com';
let email5 = '@gmail.com';
let email6 = 'some.emailgmail.com';
let email7 = 'some.email@.gmail.com';
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let emailValidation = (mail) => {
    if (mail.indexOf('@') < 0) {
        return 'Email повинен містити сивмол @';
    }
    if (mail[mail.indexOf('@') + 1] === '.') {
        return 'Крапка повинна знаходить не менше ніж на другому символі після @'
    }
    if (mail.indexOf('@') <= 0) {
        return 'Ви не ввели дані до @'
    }
    return `Email ${mail.toLowerCase()} is ok `;
};
console.log(emailValidation(email1));
console.log(emailValidation(email2));
console.log(emailValidation(email3));
console.log(emailValidation(email4));
console.log(emailValidation(email5));
console.log(emailValidation(email6));
console.log(emailValidation(email7));


// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular',
            'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws',
            'docker', 'git', 'sass']
    }
];

console.log('Відсортував масив в спадаючому порядку за кількістю елементів в полі modules');
console.log(coursesArray.sort((a, b) =>b.modules-a.modules ));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb)) // 5
let symb = "о", str = "Астрономия это наука о небесных объектах";
let count = (str, symb) => {
    let arr = str.split('');
    let countSymb = 0;
    for (let a of arr) {
        if (a === symb) {
            countSymb += 1;
        }
    }
    return countSymb;
};
document.writeln(`Написав функцію count(str, stringsearch), 
яка повертає кількість символів stringsearch у рядку str.<br> <b> ${count(str, symb)}</b>`);
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let strForCutString = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString = (str, n) => {
    let getCount=0;
    for (let i = 0; i <str.length ; i++) {
        if(str[i]===' '){
            getCount++;
            if(getCount===n){
                return str.slice(0,i);
            }
        }
    }
    return 'Please enter correct number of words';
};
document.writeln(`<br> Написав функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів. <br><b>${cutString(strForCutString, 5)}</b>`);


