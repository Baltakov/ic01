// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function (item) {

//       totalPrice += item;
//     });

//     // Change code above this line
//     return totalPrice;
//   }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line            //firstArray.array.forEach(element => {
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// console.log(students.map((student) => student.courses));
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// console.log(students.flatMap((student) => student.courses));
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// console.log(students.filter((student) => student.score >= HIGH_SCORE));

// const worst = students.filter(({ score }) => score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(({ label }) => label === "blue"));
// console.log(colorPickerOptions.find(({ color }) => color === "#4CAF50"));
// colorPickerOptions.find((option) => option.label === "white");

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// console.log(fruits.every(({ amount }) => amount > 0)); // false

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);                                           // 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// function changeEven(numbers, value) {
//   // Change code below this line
//   let newNumbers = numbers.slice();
//   for (let i = 0; i < newNumbers.length; i += 1) {
//     if (newNumbers[i] % 2 === 0) {
//       newNumbers[i] = newNumbers[i] + value;
//     }
//     // newNumbers.push(numbers[i]);
//   }
//   return newNumbers;

//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// // console.log(newNumbers);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// // const planetsLengths = planets.map(item => item.length);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// console.log(books.flatMap(({ title }) => title));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((evenNumber) => evenNumber % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter((oddNumber) => oddNumber % 2 !== 0);
// console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(({ genres }) => genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// //                                 ({ rating }) => rating
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age < maxAge && user.age >= minAge);
};
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

console.log(
  getUsersWithFriend(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 27,
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 37,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 17,
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 47,
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 30,
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 20,
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 57,
      },
    ],
    "Briana Decker"
  )
);
