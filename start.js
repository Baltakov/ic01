
// const message = "Invalid input data";
// const invoice = prompt("Please insert yours service invoice");
// const tip = prompt("Please insert tip percentage");

// if (invoice === null || tip === null) {
//   alert("Canseled");
// } else {
//   const invoiceNumber = Number(invoice);
//   const tipNumber = Number(tip);
//   if (invoiceNumber < 0 || isNaN(invoiceNumber) || tipNumber < 0 
//     || tipNumber > 100 || isNaN(tipNumber)) {
//     alert(message);
//   } else { 
//     const tipAmount = invoice * tip * 0.01;
// const totalSum = Number(invoice) + tipAmount;
// alert(`Tipe amount: ${tipAmount.toFixed(2)}\nTotal sum to pay: ${totalSum.toFixed(2)}`);
//   }
// }




// const message2 = prompt("insert any word");
// const length = message2.length;
// if ( length%2 !==0){
//   const index = Math.floor(length/2);
//   console.log(message2[index]);
// }else{
//   const index2 = length/2;
//   console.log(`${message2[index2 - 1]}${message2[index2]}`);
// }
  





// Write the code which verify user rights.
// Step 1. Check login
// Ask user for a login // use prompt()
// If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// If it’s another string – then show “I don’t know you”.
// If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// For an empty string or cancelled input, show “Canceled.”
// For login “User” correct password is “UserPass”, for “Admin” correct password is “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// If the current time in hours is more then 5.00 and less then 20:
// For “User” show “Good day, dear User!”
// For “Admin” show “Good day, dear Admin!”
// In other way:
// For “User” show “Good evening, dear User!
// For “Admin” show “Good evening, dear Admin!”

// P.S.: щоб отримати інформацію про поточний час для реалізації п. 3 завдання, створіть змінну: const hours = new Date().getHours()

const login = prompt("insert login");
const hours = new Date().getHours()
if (login === "User"){
  const password = prompt("insert password")
  if(password === null || password === ""){
    alert("Canceled");
  }else if(password === "UserPass"){
    if(hours > 5.00 && hours< 20.00){
      alert("Good day, dear User!")
    }else{
      "Good evening, dear User!"}
  }else{
        alert("Wrong password")}
}else if (login === "Admin"){
  const password = prompt("insert password")
  if(password === null || password === ""){
    alert("Canceled");
  }else if(password === "RootPass"){
    if(hours > 5.00 && hours< 20.00){
      alert("Good day, dear Admin!")
    }else{
      "Good evening, dear Admin!"}
  }else{
        alert("Wrong password")}
}else if(login === null || login === "") {
  alert("Canceled");
}else if (login.length<4){ 
  alert("I don't know any users having name length less than 4 symbols");
} else {
  alert("I don’t know you")
}



// const string = "12345";
// for (let i=1; i<=10; i+=1){
//   console.log(i);
// }
// let newString = "";
// for (let i=string.length-1; i>=0; i-=1){
//   // console.log(string[i]);
//   newString += string[i];
// }
// console.log(newString);

// const string2 = "12345";
// let newString2 = "";
// for (let i=0; i<string2.length; i+=1){
//   newString2 += string2[i];
//   if(i<string2.length-1){
//     newString2 += "*";
//   }
// }

// console.log(newString2);

// const string3 = "123qwer876ghj";
// let total = 0;
// for(let i=0; i<string3.length; i+=1){
//   const num = Number(string3[i]);
//  if(!isNaN(string3[i]) ){
//   total +=num;
//  }
// }
// console.log(total);