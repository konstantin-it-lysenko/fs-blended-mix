// 1. Lysenko
//TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const variable = 10;

// if (variable === 10) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно');
// }

// 2. Slavinska
//TODO: № 2 на тернарник ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const variable = 5;

// console.log(variable === 10 ? "Вірно" : "Невірно");
// DmytroPod
//TODO: № 3 на if...else if ===============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).
// const min = 60;
// if (min >= 0 && min < 15) {
//   console.log("Число належить до першої четверті");
// } else if (min >= 15 && min < 30) {
//   console.log("Число належить до другої четверті");
// } else if (min >= 30 && min < 45) {
//   console.log("Число належить до третьої четверті");
// } else if (min >= 45 && min < 60) {
//   console.log("Число належить до четвертої четверті");
// } else {
//   console.log("немає такої четрверті");
// }

//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// Elostay
// const num = 5;
// let result = "";
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "Такої пори року немає";
// }
// console.log("💖 ~ result:", result);

// TODO: № 5 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 11;
// const min = 0;
// let total = 0;
// for (let i = max; i >= min ; i -= 1) {
//   if (i % 2 === 0) {
//     total += i;
//     console.log("парні", i);
//   }
// }
// console.log(total);

//TODO: № 6  for...of ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [5, 35, 56, 12, 7, 80, 3];
// const numbers2 = 8;

// const findSmallerNumber = function (arr) {
//   if (!Array.isArray(arr)) {
//     return "is not array"; // Перевірка на масивність;
//   }

//   let minNumber = arr[0];

//   for (const number of arr) {
//     if (minNumber > number) {
//       minNumber = number;
//     }
//   }

//   return minNumber;
// };

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(numbers2));
