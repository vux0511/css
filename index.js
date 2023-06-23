// function test() {
//     setTimeout(() => console.log(1), 1000);
//     console.log(2);
//     console.log(3);
// }

// function httpGetAsync(url, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// httpGetAsync("https://picsum.photos/200/300", (data) => {
//     console.log(data);
// });

// test();

// const currentPromiss = new Promise((resolve, reject) => {
//     let condition = true;
//     if (condition) {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     } else {
//         reject("Error");
//     }
// });

// currentPromiss
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Array.prototype.map2 = function (callback) {
//     var length = this.length;
//     for (var i = 0; i < length; i++) {
//         callback(this[i], i);
//     }
// };

// var courses = ["Javascript", "PHP", "Ruby"];

// courses.map2(function (course, index) {
//     console.log(index, course);
// });

// courses.map2((course) => console.log(`<h2>${course}</h2>`));

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// var author = new User("Vũ", "Hoàng", "Avtar");
// var user = new User("Vũ", "Nguyễn", "Avtar");

// console.log(author);
// console.log(user);

// var promise = new Promise(function (resolve, reject) {
// Logic
// Thành công: resolve()
// Thất bại ; reject()
// Fake call API
//     resolve();
// });

// promise
//     .then(function () {
//         return 1;
//     })
//     .then(function (data) {
//         console.log(data);
//         return 2;
//     })
//     .then(function (data) {
//         console.log(data);
//         return 3;
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function () {
//         console.log("Failure");
//     })
//     .finally(function () {
//         console.log("Done");
//     });

// const sum = (a, b) => a + b;

// const getNewTodo = async (id) => {
//     let response = await fetch("https://api.publicapis.org/entries");
//     let data = await response.json();
//     return data;
// };

// getNewTodo.then((data) => {
//     console.log(data);
// });

// const sum = () => {
//     var a = 5;
//     let b = 5;

//     console.log(a + b);
// };

// sum();

// console.log(b);

// var array1 = ["a", "b", "c"];
// var array2 = ["d", "e", "f"];

// var array3 = array1.concat(array2);

// console.log(array3);

// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// var result = words.filter((word) => {
//     return word.length > 6;
// });

// console.log(words);
// console.log(result);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var find = array.find((e) => {
//     return e > 5;
// });

// console.log(array);
// console.log(find);

// var array = ["a", "b", "c"];

// array.forEach(function (element) {
//     console.log(element);
// });

// var array = [1, 2, 3];

// console.log(array.includes(2)); // > true
// console.log(array); // > Array [1, 2, 3]

// var beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison"));
// console.log(beasts.indexOf("bison", 2));
// console.log(beasts.indexOf("giraffe"));

var array = ["ant", "bison", "camel", "duck", "bison"];

array.forEach(function (element) {
    console.log(element);
});

// > "a"
// > "b"
// > "c"
