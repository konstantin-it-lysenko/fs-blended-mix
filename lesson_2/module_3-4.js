//TODO: № 1 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
//   greet() {
//     console.log(`hello ${this.name}`);
//   },
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   //   console.log(key, user[key]);
//   console.log(`${key}: ${user[key]}`);
// }
// user.greet();

//TODO: № 2 ==============================================================
//2. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }
// console.log(sum);

//TODO: № 3 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію,
// потім вирішимо простим способом

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// const findObject = (key, object) => key in object;

// !1 варіант
// const findObject = (key, object) => Object.keys(object).includes(key);

// console.log(findObject("name", obj));

//TODO: № 4 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// const multiplyNumeric = (obj) => {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//       }
//     }
//   }
//   return obj;
// !1 варіант
//   for (let key of Object.values(obj)) {
//     if (typeof key === "number") {
//       key *= 2;
//     }
//   }
//   return
// };
// console.log(multiplyNumeric(menu));

//TODO № 6 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//     const answer = prompt('Назви своє ім"я');
//     if (!answer) {
//         alert('Введіть своє ім"я'); return
//     }
//     return callback(answer);
// }

// function greet(name) {
//     alert(`Ти ${name}`)
// }

// console.log(letMeSeeYourName(greet));

// !Task 5
//TODO № 7 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

function makeProduct(name, price, callback) {
  const product = {
    id: Math.random(),
    name,
    price,
  };

  return callback(product);
}
const showProduct = (product) => product;
console.log(makeProduct("пельмені", 500, showProduct));
