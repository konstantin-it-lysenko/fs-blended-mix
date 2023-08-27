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