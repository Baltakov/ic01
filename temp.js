// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
//   }
  
//   // Викликаємо функцію greet і виводимо результат у консоль
// //   console.log(greet("Манго")); // Ласкаво просимо Манго.
  
//   // Виводимо функцію greet у консоль, не викликаючи її
//   console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }
 


// const arr = [1, 2, 3, "1", "2", "3", 4,5,6]
// for(const i of arr){
//     console.log(i);
// }
// const newArr =[]
// for(let i=0; i<arr.length; i++){
//     if((typeof arr[i]) === "number"){
//         const arrInv = String(arr[i]);
//         newArr.push(arrInv)
//     }else{
//         const arrInv = Number(arr[i]);
//         newArr.push(arrInv)
//     }
// }
// console.log(newArr);

const arr = [1, [2,3], 4, [5,6], 7];
const newArr = [];
for(const i of arr){
    if(Array.isArray(i)){
        newArr.push(i[0], i[1])
    }else{
        newArr.push(i)
    }
}
console.log(newArr);


const array = ["a", 5, ["3", 7, 8], "45", [1, 3, 7, 8]];
const flatArray = [];
function farray(array) {
    function flatten(element) {
        if (Array.isArray(element)) {
            for (const i of element) {
                flatten(i);
            }
        } else {
            flatArray.push(element);
        }
    }
    flatten(array);
    return flatArray;
}

farray(array);
console.log('if array is', array, `\n`,'flatArray is', flatArray);


// const arr = [1,2,3,3,3,4,5];
// const arrCopy = arr.slice();
// console.log(arrCopy);
// const newArr = arr.splice(2,2)
// console.log(arr);

// const arr=[1,2,3,4,5]
// const arr1=[]
// const length = arr.length
// for(let i=0; i<length; i+=1){
//     const num=arr.pop()
//     const num1=arr1.unshift(num)
// }   
// console.log(arr);
// console.log(arr1);

// const array1 = [1, 2, 3];

// const array2 = array1;

// console.log(array1 === array2)
// console.log([5, 6, 7] === [5, 6, 7])

// array1[0] = 10;

// array2[2] = 5;

// // console.log(array1)

// console.log(array1)
// console.log(array2);
// const array3 = array2

// console.log(array3)
// array3[1] = 100;

// console.log(array1)

// array2.length = 0;

// console.log(array3)

// array1[2] = 1000;
// console.log(array3)
// console.log(array1[0])

// console.log(array3.length)

// let array1 = [1, 3, 5]
// let array2 = array1;

// array1[0] = 50;
// console.log(array1)
// console.log(array2)

// array1 = [9, 90, 900]
// array2 = array1;

// console.log(array1)
// console.log(array2)

// const a = [1, 2, 3]
// const b = a
// console.log(a === b) // true
// const c = [1, 2, 3]
// const d = [1, 2, 3]
// console.log(c === d) //false
// console.log(c[0] === d[0]) //true

// const e = [1, 2, [3, 4]]
// const f = [1, 2, [3, 4]]
// console.log(e[2] === f[2]) // false 
// console.log(e[0] === f[0]) // true
// console.log(e[2][0]) // 3


// function add(a, b){
//     if(typeof a !== "number" || typeof b !== "number"){
//         return "one of the operands is not a number"
//     }
//     return a+b;
// }
// console.log(add(2,4)); 
// console.log(add("2",4)); 





// function transform(...args){
//     const invArr = [];
//     for(const arg of args){
//         if(typeof arg === "number"){
//             invArr.push(String(arg))
//          }else{
//         invArr.push(Number(arg))
//          }
//     }
//     return invArr;
// }
// console.log(transform(5, 7, "2", "3", 10, 2, "20"));


// function message1(){
//     console.log("it is great mark!");
// }
// function message2(){
//     console.log("it is bad mark!");
// }
// function message3(){
//     console.log("it is good mark!");
// }
// function checkMark(mark, unsuccess, success){
//     if(mark>=10){
//         success()
//     }else{
//         unsuccess()
//     }
// }
// checkMark(8, message2, message1)
// checkMark(11, message2, message1)
// checkMark(12, message2, message3)


// const arr=[10,20,30,40,50]
// function logger(element){
//     console.log(element);
// }
// for(const i of arr){
//     logger(i)
// }
// for(let i=0; i<=arr.length; i++){
//     logger(arr[i])
// }
// 1
// function logger2(element, index, array){
//     console.log("element", element);
//     console.log("index", index);
//     console.log("array", array);
// }
// arr.forEach(logger2)
// 2
// arr.forEach(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })


// const numbers = [1,2,3,4,5];
// const numbers2 = [];

// numbers.forEach(function(element){
//     numbers2.push(element*10)
// })
//     // console.log(numbers2);



// const add1 = function(a, b){
//     return a+b;
// }

// const add2 = (a, b) => {   //
//     return a+b;
// }

// const add3 = (a, b) => a+b

// function add4(a, b){
//     return a+b;
// }

// const playlist = {
//  name,
//  rating: 10,
//  trackCount: 3,
//  tracks: [1, 2, 3],
//  getName(){
//     console.log('это getName');
//  },
//  addTrack(track){
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length
//  }   
// };
// playlist.addTrack(4)
// playlist.getName()
// console.log(playlist);

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
//     friend.newprop = 555
// }
// console.log(friends);

// const getAllNames = function(allFriends){
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name)
//     }
// }
// console.log(getAllNames(friends));

// const hotel = {
//     name: 'HOTEL',
//     stars: 5,
//     capacity: 100,
//     showName(){
//         console.log(this.name);
//     },
//     changeCapacity(value){
//         this.capacity=value;
//     },
// };
// hotel.showName();
// hotel.changeCapacity(200)
// console.log(hotel.capacity);

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: false,
    rating: 0,
    data: {
        a: 1,
        b: {
          test: 'test!!!',
          test1: {
            d: 10
          }
        },
        c: 3
    }
  };
//   console.log(book['data']['b']['test']);



  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  console.log(obj.a);
  console.log(obj['a']);
  const key = 'a';
  console.log(obj[key]);

//   const x = Object.keys(obj);
//   for (const key of x) {
//     console.log(key);
//   }
//   for (const key in obj) {
//    console.log(key);
//   }

const array1 = [
    {
        a: 1,
        b: 2,
        c: 3,
      },
      {
        a: 4,
        b: 5,
        c: 6,
      },
  ];

//   const obj3 = {};
//   obj3.a = [];
//   console.log(obj3);
const obj1 = array1[0];
const obj1Keys = Object.keys(obj1)
console.log(obj1Keys);

const total = {};
for (const key of obj1Keys) {
   total[key] = []; 
}
console.log(total);

const student = {
    name: 'Alona',
    homeworks: [],
    getName(){
        console.log(this.name);
    },
    getHomeworks(){
        console.log(this.homeworks);
    },
    addHomework(subject, mark){
        
    }
};
student.getName();
student.getHomeworks();