// // const feedback = {
// //     good: 5,
// //     neutral: 10,
// //     bad: 3,
// // };

// // // const keys = Object.keys(feedback);
// // // console.log(keys);
// // // let totalFeedback = 0;
// // // for (const key of keys) {
// // //     // console.log(key);
// // //     console.log(feedback[key]);
// // //     totalFeedback += feedback[key];
// // // }
// // // console.log('totalFeedback: ', totalFeedback);

// // const values = Object.values(feedback);
// // // console.log(values);

// // // const cart = {
// // //     items:[],
// // //     getItems() {},
// // //     add(product) {},
// // //     remove(productName) {},
// // //     clear() {},
// // //     countTotalPrise() {},
// // //     increaseQuantity(productName) {},
// // //     decreaseQuantity(productName) {},
// // // };

// // // const a = ['a', 'b', 'c'];
// // // const b = [1, 2, 3];
// // // const c = [[1, 2], 'qwe', 1234]

// // // let d = [...a, ...b, ...c[0], c[1], c[2]];
// // // console.log(d);

// // // const obj1 = {a: 1, b: 2};
// // // const obj2 = {c: 3, d: 4}

// // // const obj3 = {
// // //     ...obj1,
// // //     ...obj2,
// // // }
// // // console.log(obj3);

// // // let sum = 0;
// // // function add(...args) {
// // //     console.log(args);
// // // }
// // // add(1, 2, 3, 4, 5)

// // // function test(...args){
// // //     console.log(args);
// // //     const firstElement = args.shift()
// // //     console.log(args);

// // //     return args.includes(firstElement)
// // // }
// // // console.log(test(2, 5, 7, 3, 1));

// // // function test(first,...args){
// // //     console.log(args);

// // //     return args.includes(first)
// // // }
// // // console.log(test(2, 5, 7, 3, 1));

// // // function test(...args){

// // //     const lastElement = args.pop()
// // //     return args.includes(lastElement)
// // //     console.log(args);
// // // }
// // // console.log(test(2, 5, 1, 7, 3, 1));

// // // const book = {
// // //   title: "The Last Kingdom",
// // //   author: "Bernard Cornwell",
// // //   genres: ["historical prose", "adventure"],
// // //   isPublic: true,
// // //   rating: 8.38,
// // //   price: "50$",
// // //   coverImage: "bkjbkbh",
// // // };

// // // const {title, author: authorName, genres, isPublic, rating, price="34$", coverImage} = book;
// // // console.log(price);
// // // console.log(authorName);
// // // console.log(book);

// // // const numbers = [1, 2, 3].concat([[4, 5, 6], [7, 8, 9]]);
// // const numbers = [...[1, 2, 3], 4, 5];
// // console.log(numbers);
// // console.log(Math.max(...numbers));
// // console.log(..."eqrg");

// // const [] = [1, 2, 3]

// // const user = {
// //   name: "Jacques Gluke",
// //   tag: "jgluke",
// //   stats: {
// //     followers: 5603,
// //     views: 4827,
// //     likes: 1308,
// //     a: {
// //       b: 0,
// //       c: {
// //         d: "bkjbkjbnlkbklj",
// //       },
// //     },
// //   },
// // };

// // const {
// //     name,
// //     tag,
// //     stats: { followers, views, likes,
// //         a: { b,
// //             c: { d}}},
// // } = user;
// // const { name: name2, tag:tag2, ...res} = user;
// // console.log(res);
// // console.log(name, tag, tag2);

// // const showProfileInfo = function (userProfile) {
// //     const { name, tag, location, ...restProps } = userProfile;

// //     // console.log(name, tag, location, avatar, followers, views, likes);
// //     console.log(restProps);
// //   };

// // //   const book = {
// // //     title: "The Last Kingdom",
// // //     author: "Bernard Cornwell",
// // //     genres: ["historical prose", "adventure"],
// // //     isPublic: true,
// // //     rating: 8.38,
// // //   };
// // // //   const accessType = book.isPublic ? "публічному" : "закритому";
// // // // const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// // //   const {title, author, genres, isPublic, rating} = book;
// // //   const accessType = isPublic ? "публічному" : "закритому";
// // //   const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// // // console.log(message);

// // const rgb = [200, 255, 100];

// // const [red, ...colors] = rgb;

// // console.log(red); // "200"
// // console.log(colors); // [255, 100]

// // // ✅ Все зрозуміло
// // // doStuffWithBook({
// // //     title: "The Last Kingdom",
// // //     numberOfPages: 736,
// // //     downloads: 10283,
// // //     rating: 8.38,
// // //     isPublic: true,
// // //   });

// // // function greet(name) {
// // //     return `Ласкаво просимо ${name}.`;
// // //   }
// // //   console.log(greet);

// //   // Колбек-функція
// // function greet(name) {
// //     console.log(`Ласкаво просимо ${name}.`);
// //   }

// //   // Функція вищого порядку
// //   function registerGuest(name, callback) {
// //     console.log(`Реєструємо гостя ${name}.`);
// //     callback(name);
// //   }

// //   registerGuest("Манго", greet);

// //   const user2 = {
// //     name: 'Kos',
// //     age: 50,
// //     friendsCount: 20,
// //     status: true,
// //   };

// //   const {friendsCount, status, ...user3} = user2;
// //   console.log(user3);

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
];

console.log(users.find((user) => user.friends.length === 1));
console.log(users.filter((user) => user.balance > 3000));
console.log(
  users.find((user) => user.balance > 3000 && user.gender === "female")
);
console.log(users.some((user) => user.age < 30));
console.log(users.every((user) => user.age > 30));

// let allSkills = [];
// for (let user of users) {
//   allSkills.push(user.skills);
// }

// console.log(allSkills);

// const friendsCount = users.filter((friend) => {
//   return friend.friends.length > 4;
// });
// console.log(friendsCount);

// const arr = users.map((user) => {
//   const { age } = user;
//   return age;
// });
// let newArray = [];
// for (const i of arr) {
//   if (i > 30) {
//     newArray.push(i);
//   }
// }
// const newArray = arr.filter((age) => {
//   return age > 30;
// });

// console.log(arr);
// console.log(newArray);

// // const arr = [];
// // users.forEach(({ name }) => {
// //   arr.push(name);
// // });
// // console.log(arr);

// const resultName = users.map(({ name, gender }) => {
//   return name;
// });
// console.log(resultName);

// const resultAge = users.map(({ age }) => {
//   return age;
// });
// console.log(resultAge);

// const friendsCount = users.map(({ friends }) => {
//   return friends.length;
// });
// console.log(friendsCount);

// const new1 = users.map(({ id, name, age }) => {
//   return { id, name, age };
// });
// console.log(new1);

// let message;
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
//   if (message.includes("spam") || message.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// // console.log(checkForSpam("Amazing SalE, only tonight!"));
// // console.log(message);

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   message = message.split(" ");
//   const count = message.length;
//   price = count * pricePerWord;
//   return price;
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 25));

// function slugify(title) {
//   // Change code below this line
//   const lower = title.toLowerCase();
//   const slug = lower.split(" ").join("-");
//   return slug;

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const totalPre = firstArray.concat(secondArray);
//   if (totalPre.length < maxLength) {
//     return totalPre;
//   } else {
//     return totalPre.slice(0, maxLength);
//   }
//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 5));

// const start = 3;
// const end = 7;

// // for (let i = start; i <= end; i += ) { // Change this line
// //   console.log(i);
// // }

// // function calculateTotal(number) {
// //   let total = 0;
// //   for (let i = 1; i <= number; i++) {
// //     total += i;
// //   }
// //   return total;
// // }

// // console.log(calculateTotal(9));

// const fruits = ["apple", "plum", "pear", "orange"];

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const i of order) {
//     total += i;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   string = string.split(" ");
//   let longest = "";
//   for (const item of string) {
//     if (item.length > longest.length) {
//       longest = item;
//     }
//   }
//   return longest;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));

// // function filterArray(numbers, value) {
// //   let number = [];
// //   for (const item of numbers) {
// //     if (item > value) {
// //       number.push(item);
// //     }
// //   }
// //   return number;
// // }
// // console.log(filterArray([1, 2, 3, 4, 5], 6));

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (const i of array1) {
//     for (const j of array2) {
//       if (i === j) {
//         newArray.push(i);
//       }
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function includes(array, value) {
//   // Change code below this line
//   for (let i of array) {
//     if (i === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 2));
