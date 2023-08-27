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
