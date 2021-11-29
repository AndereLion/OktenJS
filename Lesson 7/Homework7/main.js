// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
console.log(`Створив функцію конструктор для об'єктів User з полями id, name, surname , email, phone`);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrOfUsers = [];
arrOfUsers[0]=new User(3, 'Ben', 'Benks', 'Benmail@com', 911);
arrOfUsers[1]=new User(2, 'Men', 'Menks', 'Menmail@com', 912);
arrOfUsers[2]=new User(1, 'Pen', 'Penks', 'Penmail@com', 913);
arrOfUsers[3]=new User(4, 'Den', 'Denks', 'Denmail@com', 914);
arrOfUsers[4]=new User(5, 'Ron', 'Renks', 'Renmail@com', 915);
arrOfUsers[5]=new User(6, 'Shon', 'Senks', 'Senmail@com', 916);
arrOfUsers[6]=new User(10, 'Poll', 'Penks', 'Penmail@com', 917);
arrOfUsers[7]=new User(8, 'Deni', 'Denks', 'Denmail@com', 918);
arrOfUsers[8]=new User(9, 'Meni', 'Menks', 'Menmail@com', 919);
arrOfUsers[9]=new User(7, 'Keni', 'Kenks', 'Kenmail@com', 920);
console.log('Створив пустий масив, наповнив його 10 об\'єктами new User(....)');
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
console.log('Взяв масив arrOfUsers[] з попереднього завдання, та відфільтрував ,' +
    '\nзалишивши тільки об\'єкти з парними id (filter)');
console.log( arrOfUsers.filter(e=>e.id%2===0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('Взяв масив з  arrOfUsers[] з попереднього завдання, та відсортував його по id. по зростанню (sort)');
console.log(arrOfUsers.sort((a,b)=>a.id-b.id));
// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let arrForClient =[];
arrForClient[0]=new Client(12,'Martin','Bon','bonmail@com',5251,['oil','cola']);
arrForClient[1]=new Client(32,'Mark','MBon','bonmail@com',32521,['oil','potatoes','wine']);
arrForClient[2]=new Client(2,'Olga','Gon','bonmail@com',90621,['gum','cola']);
arrForClient[3]=new Client(6,'Stive','Vein','bonmail@com',35751,['water','watermelon']);
arrForClient[4]=new Client(34,'Andry','Liv','bonmail@com',373721,['sugar','meat']);
arrForClient[5]=new Client(11,'Ralf','Rain','bonmail@com',323781,['oil','cola','apple']);
arrForClient[6]=new Client(5,'Masin','Flower','bonmail@com',3021,['chicken','oil','cola']);
arrForClient[7]=new Client(1,'Katya','Cher','bonmail@com',364421,['potatoes','oil','cola','watermelon']);
arrForClient[8]=new Client(13,'Liza','Tans','bonmail@com',377431,['chees','oil','cola']);
arrForClient[9]=new Client(77,'Izabella','Ron','bonmail@com',425521,['oranges','oil','cola']);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

arrForClient.sort(( a, b ) =>a.order.length-b.order.length );
console.log(`Взяв масив (Client [] з попереднього завдання).
Відсортував його по кількості товарів в полі order по зростанню. (sort)`);
console.log(arrForClient);