// //TODO: № 1 ==============================================
// //Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// //TODO: № 2 ==============================================
// // Яким буде результат виклику функції?

// function f() {
//   console.log(this.name);
// }
// const foo = f.bind({ name: "Іван" }).bind({ name: "Juan" });

// foo();

//TODO: № 3 ==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//     action();
//     // return action;
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuatity.bind(item));// правильна відповідь
// callAction(item.getQuatity())// 2 правильний варіант

// //TODO: № 4 ==============================================

// // Функція askPassword приймає 2 колбека і викливає 1 із них в залежності від пароля
// function askPassword(ok, fail) {
//   let password = prompt("Password? 🤔");
//   if (password === "admin") ok();
//   else fail();
// }
// // Створити обект user з властивістю name і двома методами
// // loginOk() i loginFail()
// // ці методи виводять в консоль повідомлення у форматі
// // "<name> logged in" i "<name> failed to log in" відповідно
// // зроби виклик функції askPassword, прив`язавши в якості аргуметів методи обекта
// const user = {
//   name: "Poly",
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };
// const logOk = user.loginOk.bind(user);
// const logFi = user.loginFail.bind(user);
// // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(logOk, logFi);

//TODO: № 5 на class-и  =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// class User {
//   constructor({ userName, age, numbersOfPost } = {}) {
//     this.userName = userName;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;
//   }

//   getInfo() {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   }
// }

// const mango = new User({ age: 20, numbersOfPost: 10, userName: "mango" });
// console.log(mango.getInfo());
// console.log(typeof User);

//TODO: № 6 на class-и =============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер
// get clientData() має повертати оюект з переліченими властивостями
// set changeEmail(newEmail) який перезаписує почту користувача

// class Client {
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login
//         this.#email = email
//     }
//     get clientData() {
// return {login:this.#login , email:this.#email }
//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail
//     }
// }

// const newClient = new Client({login : "sheva", email : "email"})
// console.log(newClient);


// console.log(newClient.changeEmail = "kjhhkjhk");
// console.log(newClient.clientData.email);



// TODO: № 7 на class-и =============================================
// Напиши клас Notes який управляє колекцією нотаток у
// властивості items.
// Нотатка - це об'єкт із властивостями text і priority.
// Додай класу статичний властивість Priopity,
// який буде зберігати об'єкт із пріоритетами ("high" i "low").
// Додай методи addNote(note), removeNote(noteName)
// updatePriority(text, newPriority)

// class Notes {
//     static Priopity = {
//         high: "high",
//         low: "low"
// }
//     constructor() {
//         this.items = [];
//     }

//     addNote(note) {
//         return this.items.push(note);
//     }

//     removeNote(noteName) {
//         const indexEl = this.items.findIndex(item => item.text === noteName);
//         return this.items.splice(indexEl, 1);
//     }

//     updatePriority(text, newPriority) {
//         const newText = this.items.findIndex(item => item.text === text);
//         return this.items[newText].priority = newPriority;
//     }
// }

// const newNotes = new Notes()

// newNotes.addNote({text: "ковбаса", priority: Notes.Priopity.high})
//  console.log(newNotes.items)



//TODO: на class ======================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.
