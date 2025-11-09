// Завдання 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].
const numbers = [1, 2, 3, 4, 5];
// Розв'язок 1
const mapToSquares = numbers => numbers.map(number => number * number);
// console.log(mapToSquares(numbers));

// Завдання 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
// Розв'язок 2
const getValues = data => data.flatMap(obj => obj.values);
const getValues2 = data => data.map(obj => obj.values).flat();
// console.log(getValues(data));
// console.log(getValues2(data));

// Завдання 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.
const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// Розв'язок 3
const findTeenager = people => people.some(person => person.age < 20);
// console.log(findTeenager(people));

// Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.
const numbers2 = [2, 4, 6, 8, 10];
// Розв'язок 4
const isEven = numbers => numbers.every(number => number % 2 === 0);
// console.log(isEven(numbers2));

// Завдання 5
// Знайдіть перше непарне число
const numbers3 = [2, 1, 6, 8, 9, 10, 12];
// Розв'язок 5
const findFirstOdd = numbers => numbers.find(number => number % 2 !== 0);
// console.log(findFirstOdd(numbers3));

// Завдання 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
const numbersArray = [4, 2, 5, 1, 3];
// Розв'язок 6
const sortByAcs = numbers => numbers.toSorted((a, b) => a - b);
// console.log(sortByAcs(numbersArray));

// Завдання 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].
const stringArray = ['banana', 'orange', 'apple', 'pear'];
// Розв'язок 7
const sortedByAZ = strings => strings.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedByAZ(stringArray));

// Завдання 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].
const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// Розв'язок 8
const sortedByAgeAsc = users => users.toSorted((a, b) => a.age - b.age);
// console.log(sortedByAgeAsc(users));

// Завдання 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]
const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// Розв'язок 9
const filterAdult = user => user.filter(person => person.age > 20);
// console.log(filterAdult(user));

// Завдання 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.
const numbers4 = [1, 2, 3, 4, 5];
// Розв'язок 10
const getSum = numbers => numbers.reduce((sum, number) => (sum += number), 0);
// console.log(getSum(numbers4));

// Завдання 11
/* Розроби клас Calculator, який дозволяє виконувати арифметичні
  операції над числом за допомогою методів класу, підтримуючи
ланцюжковий виклик (method chaining).
===  Вимоги до класу Calculator ===
- Метод number(value)
Встановлює початкове значення для наступних обчислень.
Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
- метод getResult, Повертає поточний результат усіх операцій.
Не змінює значення, просто повертає його.
- метод add - Додає value до поточного значення.
Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
- метод substruct - Віднімає value від поточного значення. Повертає this.
- метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
- метод multiply -Множить поточне значення на value. Повертає this.
Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

Приклад використання:
const calc = new Calculator();
const result = calc
   .number(10)   // Встановлюємо початкове значення 10
   .add(5)       // Додаємо 5 (10 + 5 = 15)
   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
   .getResult(); // Отримуємо результат: 24

   console.log(result); // 24 */

// Розв'язок 11
class Calculator {
  number(value) {
    this.result = value;
    return this;
  }
  getResult() {
    return this.result;
  }
  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }
  divide(value) {
    if (value !== 0) {
      this.result /= value;
      return this;
    }
    console.log('Ділення неможливе');
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }
}
const calc = new Calculator();
const result = calc
  .number(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();
// console.log(result);
// const result2 = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(0)
//   .getResult();
// console.log(result2);

// Завдання 12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// Розв'язок 12
class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
  get login() {
    return this.#login;
  }
  get email() {
    return this.#email;
  }
}
const user1 = new Client('Aida', 'aida@ua');
// console.log(user1);
user1.email = 'aida@gmail.com';
// console.log(user1);

// Завдання 13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// Розв'язок 13
