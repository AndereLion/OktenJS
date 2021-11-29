// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
//     або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content
let content = document.getElementById('content');
console.log(content.innerText);
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = '<p> content. New text.';
console.log(content.innerText);
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = '<p> rules. New text.';
console.log(rules.innerText);
// -- змініть кожному елементу колір фону на червоний
content.style.background = 'red';
rules.style.background = 'red';
let fc_rules = document.getElementsByClassName('fc_rules');
    for(e of fc_rules){e.style.background = 'red'};
// -- змініть кожному елементу колір тексту на синій
content.style.background = 'blue';
rules.style.background = 'blue';
for(e of fc_rules){e.style.background = 'blue'};
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.className);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for(e of fc_rules){e.style.background = 'red'};
