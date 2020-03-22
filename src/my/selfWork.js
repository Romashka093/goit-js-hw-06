// import users from "./../js/users.js";

// ("use strict");
// console.table(users);
// /* объект = {}; */
// /* массив = []; */
// /* шаблон любого метода: */
// array.method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });

// /* все параметри кроме item не обязательны: */
// array.method(item => {
//   // логика которая будет применяться на каждой итерации
// });

// /* metod map - кастомный */
// const map = (array, callback) => {
//   const resultArray = [];

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     const result = callback(element);

//     resultArray.push(result);
//   }
//   return resultArray;
// };

// const names = map(users, user => {
//   return user.name;
// });
// console.log("names", names);

// /* metod map */
// const mapping = users.map(user => {
//   return user.name;
// });

// console.log("mapping", mapping);

// /* metod filter - кастомный */

// const filter = (array, callback) => {
//   const filtredArray = [];

//   for (let index = 0; index < array.length; index += 1) {
//     const passed = callback(array[index]);
//     if (passed) {
//       filtredArray.push(array[index]);
//     }
//   }
//   return filtredArray;
// };

// console.table(filter(users, user => user.gender === "male"));
// console.table(filter(users, user => user.gender === "female"));

// /* metod filter */
// // отличие от map: должен вернуть true или false, что-бы что-то записать

// const filtred = users.filter(user => {
//   return user.age <= 25;
// });
// console.log("filtred:", filtred);

// /* metod find - кастомный  */

// const find = (array, callback) => {
//   for (let index = 0; index < array.length; index += 1) {
//     const passed = callback(array[index]);

//     if (passed) {
//       return array[index];
//     }
//   }
// };
// console.log(
//   find(users, user => user.id === "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3")
// );

// /* metod find */
// // используется, когда нужно найти по идентификатору
// const found = users.find(user => {
//   return (user.gender = "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3");
// });
// console.log("found:", found);

// /* metod every and some - кастомный */
// /* metod every - кастомный */
// /* когда все элементы подходят под условие => возвращает true или false */
// const everyOne = users.every(user => {
//   return user.isActive;
// });
// console.log("everyOne:", everyOne);
// /* metod some - кастомный */
// /* когда хотябы один элемент подходит под условие => вернет true или false */
// const someOne = users.some(user => {
//   return user.isActive;
// });
// console.log("someOne:", someOne);

// /* metod reduce - кастомный */

// const reduce = (array, callback, initialValue = array[0]) => {
//   let accumulator = initialValue;

//   for (let index = 0; index < array.length; index++) {
//     accumulator = callback(accumulator, array[index]);
//   }
//   return accumulator;
// };

// console.log(
//   "total users age, by custom reduce:",
//   reduce(users, (acc, user) => acc + user.age, 0)
// );

// /* metod reduce */
// /* array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue) */

// const total = users.reduce((acc, user) => {
//   return acc + user.balance;
// }, 0);

// console.log("total users balance, by reduce:", total);

// const skills = users.reduce((acc, user) => {
//   acc.push(...user.skills);
//   return acc;
// }, []);
// console.log("skills:", skills);

// /* metod sort - кастомный */
// /* metod sort */
// // соритирует оригинал, по этому всегда нужно создавать копию и сортирует только числа

// const sortedBalance = [...users].sort((prevUser, nextUser) => {
//   return prevUser.balance - nextUser.balance;
// });
// console.table(sortedBalance);

// const sortedAge = [...users].sort((prevUser, nextUser) => {
//   return nextUser.age - prevUser.age;
// });
// console.table(sortedAge);

// /* metod forEach - кастомный */
// for (let index = 0; index < users.length; index++) {
//   console.log("users[index] :", users[index]);
// }
// /* metod forEach */
// users.forEach(user => {
//   console.log("user.name:", user.name);
// });
