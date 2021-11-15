// --створити масив з:
//     - з 5 числових значень
let arr1 = [1,2,3,4,5];
// - з 5 стічкових значень
let arr2 = ['hi1','hi2','hi3','hi4','hi5'];
// - з 5 значень стрічкового, числового та булевого типу
let arr3 = [1,2,3,4,5,'hi1','hi2','hi3','hi4','hi5',true,false,true,false,true];
// - та вивести його в консоль
console.log(arr1,arr2,arr3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let emptyArr = [];
emptyArr[0]=5;
emptyArr[1]=4;
emptyArr[2]=3;
emptyArr[3]=2;
emptyArr[4]=1;
console.log(emptyArr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0;i<10;i++){
    document.write(`<div class="divs10">Hi number ${i}</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом
// і індексом всередині
for(let i = 0;i<10;i++){
    document.write(`<div class="divs10">Index is ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i2 = 0;
while (i2<20){
    document.write(`<h1 class="Iam">I am h1</h1>`);
    i2++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i3 = 0;
while (i3<20){
    document.write(`<h1>My index is ${i3}</h1>`);
    i3++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr10Numbers= [];
for(let i = 0;i<10;i++){
    arr10Numbers[i]= i;
    console.log(arr10Numbers[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr10Strings= [];
for(let i = 0;i<10;i++) {
    arr10Strings[i] = `Hello index number ${i}`;
    console.log(arr10Strings[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr10Boolean= [];
for(let i = 0;i<10;i++) {
    arr10Boolean[i] = i<5;
    console.log(arr10Boolean[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
let arr10Mix = [1,2,3,4,'Five','Six','Seven',true,false,true];
for(let i = 0;i<10;i++) {
    if(typeof arr10Mix[i]==='boolean'){console.log(arr10Mix[i])}
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
let arr10Mix2 = [1,2,3,4,'Five','Six','Seven',true,false,true];
for(let i = 0;i<10;i++) {
    if(typeof arr10Mix2[i]==='number'){console.log(arr10Mix2[i])}
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи
let arr10Mix3 = [1,2,3,4,'Five','Six','Seven',true,false,true];
for(let i = 0;i<10;i++) {
    if(typeof arr10Mix3[i]==='string'){console.log(arr10Mix3[i])}
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
// до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mixArr = [];
mixArr[0]=false;
mixArr[1]=true;
mixArr[2]=69;
mixArr[3]='Onix';
mixArr[4]='Man';
mixArr[5]=false;
mixArr[6]='true';
mixArr[7]=666;
mixArr[8]=888;
mixArr[9]='No';
for(let i = 0;i<10;i++) {
    console.log(mixArr[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
for(let i = 0;i<10;i++) {
    console.log(`Step: ${i}`);
    document.write(`<h2 class="h210">Step: ${i}</h2>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
for(let i = 0;i<100;i++) {
    console.log(`Step: ${i}}`);
    document.write(`<h2>Step: ${i}</h2>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log
// та document.write

//Так як в умові вказано іменно 100 ітерацій, то крок вивів окремо.
for(let i = 0;i<100;i++) {
    console.log(`Step: ${i*2}`);
    document.write(`<h2 class="h2Step2">Step: ${i*2}}</h2>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i = 0;i<100;i++) {
    if(i%2===0) {
        console.log(`Even step: ${i}`);
        document.write(`<h2>Even step: ${i}</h2>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i = 0;i<100;i++) {
    if(i%2!==0) {
        console.log(`Not even step: ${i}`);
        document.write(`<h2 class="notEvenStep">Not even step: ${i}</h2>`);
    }
}