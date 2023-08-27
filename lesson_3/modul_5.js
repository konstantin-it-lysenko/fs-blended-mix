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

class User {
  constructor({ userName, age, numbersOfPost } = {}) {
    this.userName = userName;
    this.age = age;
    this.numbersOfPost = numbersOfPost;
  }

  getInfo() {
    return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
  }
}

const mango = new User({ age: 20, numbersOfPost: 10, userName: "mango" });
console.log(mango.getInfo());
console.log(typeof User);
