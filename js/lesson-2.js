// Завдання 1:
/* Створіть масив styles з елементами 'jazz' і 'blues'
Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

Напишіть функцію logItems(array), яка приймає масив як аргумент
і виводить у консоль кожен його елемент у форматі:
"<номер елемента> - <значення елемента>".
Використайте цикл for для перебору елементів масиву.
Нумерація елементів повинна починатися з 1 (а не з 0). */

// Розв'язок 1:
const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === 'blues') {
//     styles[i] = 'classic';
//   }
// }
const index = styles.indexOf('blues');
if (index !== -1) {
  styles[index] = 'classic';
}
//console.log(styles);

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
//logItems(styles);

// Завдання 2:
/* Напишіть функцію checkLogin(array), яка:
Приймає масив логінів як аргумент.
Запитує ім'я користувача через prompt.
Перевіряє, чи є введене ім'я у переданому масиві.
Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
Якщо ім'я відсутнє – виводить повідомлення: "User not found". */

const logins = ['Peter', 'John', 'Igor', 'Sasha', 'Aida'];

// Розв'язок 2:
function checkLogin(array) {
  const userName = prompt("Назвіть ваше ім'я");
  array.includes(userName)
    ? alert(`Welcome, ${userName}!`)
    : alert('User not found');
}

//checkLogin(logins);

// Завдання 3:
/* Напишіть функцію caclculateAverage(),
яка приймає довільну кількість
аргументів і повертає їхнє середнє значення.
Додайте перевірку, що аргументи - це числа. */

// Розв'язок 3

function caclculateAverage(...array) {
  let sum = 0;
  let count = 0;
  for (const el of array) {
    if (typeof el === 'number') {
      sum += el;
      count++;
    }
  }
  return count > 0 ? sum / count : 0;
}
// console.log(caclculateAverage(10, 20, null, 'qwerty'));

// Завдання 4:
/* Напишіть функцію, яка сумуватиме сусідні числа
і пушитиме їх в новий масив.
Уточнення: складати необхідно перше число з другим, потім друге - з третім,
третє - з четвертим і так до кінця.
В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29]. */
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// Розв'язок 4:
function sumNeighbors(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    result.push(numbers[i] + numbers[i + 1]);
  }
  return result;
}
// console.log(sumNeighbors(someArr));

// Завдання 5:
/* Напишіть функцію findSmallestNumber(numbers),
яка шукає найменше число в масиві.
Додайте перевірку, що функція отримує саме масив, і
якщо функція отримує масив - поверніть з функції найменше число,
в іншому випадку - поверніть 'Sory, it is not an array!'.*/

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// Розв'язок 5:
function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return 'Sory, it is not an array!';
  }

  // let min = numbers[0];
  // for (const element of numbers) {
  //   if (element < min) {
  //     min = element;
  //   }
  // }
  // return min;
  return Math.min(...numbers);
}
//console.log(findSmallestNumber(numbers));

// Завдання 6:
/* Напишіть функцію findLongestWord(string), яка 
приймає довільний рядок, що складається лише зі слів, розділених
пробілами (параметр string), і повертатиме найдовше слово у реченні.

Скористайтесь цим прикладом виклику функції для перевірки її роботи:
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital' */

// Розв'язок 6:
function findLongestWord(string) {
  const array = string.split(' ');
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
}
// console.log(findLongestWord('London is the capital of Great Britain'));

// Завдання 7:
/* Напишіть скрипт, який для об'єкту user, послідовно:
1 - додасть поле mood зі значенням 'happy',
2 - замінить hobby на 'skydiving',
3 - замінить значення premium на false,
4 - виведе зміст об'єкта user у форматі
'<ключ>:<значення>' використовуя Object.keys() та for...of
*/

const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
};
// Розв'язок 7:
function userFileProcessing(obj) {
  obj.mood = 'happy';
  obj.hobby = 'skydiving';
  obj.premium = false;
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(`${key}:${obj[key]}`);
  }
}
// userFileProcessing(user);

// Завдання 8:
/* Є об'єкт, в якому зберігаються зарплати команди
Напишіть код для додавання усіх зарплат та
збережіть його результат в змінній sum.
Якщо об'єкт salaries пустий, то результат має бути 0 */

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
const salaries2 = {};

//Розв'язок 8:
function totalSalary(obj) {
  let sum = 0;
  const bills = Object.values(obj);
  for (const el of bills) {
    sum += el;
  }
  return sum;
}

// console.log(totalSalary(salaries));
// console.log(totalSalary(salaries2));

// Завдання 9:
/* Створіть об'єкт calculator з наступними методами:
read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей
 в об'єкті),
mult() - перемножає збереженні значення і повертає результат (з перевіркою 
на наявність властивостей в об'єкті),
винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
методи sum і mult мають повертати рядок 'No such propeties' */

// Розв'язок 9:

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  exist() {
    return Boolean(this.a && this.b);
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    }
    return 'No such propeties';
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    }
    return 'No such propeties';
  },
};
// console.log(calculator.exist());
// calculator.read(2);
// calculator.read(2, 3);
// console.log(calculator.exist());
// console.log(calculator.sum());
// console.log(calculator.mult());

// Завдання 10:
/* Напишіть функцію calcTotalPrice(fruits, fruitName),
яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
Функція рахує і повертає загальну вартість фрукта
з таким ім'ям, ціною та кількістю з об'єкта.

Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
назвою фрукта, це також треба урахувати. */

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

// Розв'язок 10:
function calcTotalPrice(fruits, fruitName) {
  let sum = 0;
  for (const obj of fruits) {
    if (obj.name === fruitName) {
      sum += obj.price * obj.quantity;
    }
  }
  return sum;
}
// console.log(calcTotalPrice(fruits, 'Банан'));
