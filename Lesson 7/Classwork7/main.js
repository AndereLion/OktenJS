// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`);
    };
    this.info = function () {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, yearOfManufacture - ${this.yearOfManufacture} , maxSpeed - ${this.maxSpeed}, engineCapacity - ${this.engineCapacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`New maxSpeed is ${this.maxSpeed}`);

    };
    this.changeYear = function (newValue) {
        this.yearOfManufactured = newValue;
        console.log(`New year of manufactured is ${this.yearOfManufactured}`);

    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log('New driver is ');
        console.log(this.driver);
    }

}

let car = new Car('BMW', 'Germany', 2017, 260, 1980);
car.drive();
car.info();
car.increaseMaxSpeed(270);
car.changeYear(2018);
car.addDriver({name: 'Bond', age: 40, yearsOfExperience: 20});

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car2 {


    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`);
        };
    }

    info() {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, yearOfManufacture - ${this.yearOfManufacture} , maxSpeed - ${this.maxSpeed}, engineCapacity - ${this.engineCapacity}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`New maxSpeed is ${this.maxSpeed}`);

    };

    changeYear(newValue) {
        this.yearOfManufactured = newValue;
        console.log(`New year of manufactured is ${this.yearOfManufactured}`);

    };

    addDriver(driver) {
        this.driver = driver;
        console.log('New driver is ');
        console.log(this.driver);
    }
}

let car2 = new Car2('Audi', 'Germany', 2018, 265, 2198);
car2.drive();
car2.info();
car2.increaseMaxSpeed(280);
car2.changeYear(2019);
car2.addDriver({name: 'Max', age: 42, yearsOfExperience: 22});
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name,age,footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}
let cinderellas=[];
cinderellas[0]=new Cinderella('Olga',25,35);
cinderellas[1]=new Cinderella('Izabella',22,36);
cinderellas[2]=new Cinderella('En',28,37);
cinderellas[3]=new Cinderella('Alisa',21,42);
cinderellas[4]=new Cinderella('Dasha',29,38);
cinderellas[5]=new Cinderella('Monika',35,37);
cinderellas[6]=new Cinderella('Katy',25,40);
cinderellas[7]=new Cinderella('Roxi',27,37);
cinderellas[8]=new Cinderella('Jan',26,39);
cinderellas[9]=new Cinderella('Tanya',20,43);

class Prince {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
prince = new Prince('Leo',31,35);
cinderellas.find((cinderellas)=>{
    if(cinderellas.footSize===prince.shoe){
        console.log(`The winner is `);
        console.log(cinderellas);
    }
});