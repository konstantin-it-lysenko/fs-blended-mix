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

//TODO: № 7 for...of =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа./*  */

// function caclculateAverage(...args) {
//   //const args = arguments; // операція без rest
//   //let totalCount = args.length;
//   let totalCount = 0;
//   let sum = 0;

//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }

//     sum += arg;
//     totalCount += 1;
//     //totalCount = args.length;
//   }
//   return sum / totalCount;
// }

// console.log(caclculateAverage(10, 10, 20, 200));


//TODO: № 8 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const someArray = [22, 11, 34, 5, 12, 13, 14, 15];

// function totalArray(array) {
//   const newArray = [];

//   for (let i = 0; i < array.length - 1; i += 1) {
//     newArray.push(array[i] + array[i + 1]);

//   }
//   return newArray;
// }

// console.log(totalArray(someArray));



//TODO: № 9 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
// const musicStyles = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// function logItems(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         console.log(`${i + 1} - ${arr[i]}`);
//     }
// }

// logItems(musicStyles);

//TODO: № 10 ==============================================================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.
// 1
// function formatMessage(message, maxLength) {
//     if (message.length > maxLength) {
//         const newArr = message.split('')
//         newArr.length = maxLength;
//         const updatedStr = newArr.join('');
//         return `'${updatedStr}...'.`;
//     } else {
//         return `'${message}'.`;
//     }
// }
// 2
// function formatMessage(message, maxLength) {
//     return message.length > maxLength ? message.slice(0, maxLength) + '...' : message;

// }
// 3
// function formatMessage(message, maxLength) {
//     if (message.length > maxLength) {
//         return message.split('').slice(0, maxLength).join('') + '...';
//     }
//     return message;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.



//TODO: додаткове) ==========================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = 'Opera';

// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }
