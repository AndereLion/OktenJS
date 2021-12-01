// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль
let emptyArrForClasses = [];

function classCounter(elements, startNumber, arrForClasses) {
    if (elements.length > startNumber) {
        if (elements[startNumber].className.length > 0) {
            elements[startNumber].className;
            arrForClasses.push(elements[startNumber].className);
        }
        return classCounter(elements, ++startNumber, arrForClasses);
    }
    return arrForClasses;
}
let elements = document.body.querySelectorAll('*');
console.log(classCounter(elements, 0, emptyArrForClasses));
