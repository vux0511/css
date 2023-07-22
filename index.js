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

// var array = ["ant", "bison", "camel", "duck", "bison"];

// array.forEach(function (element) {
//     console.log(element);
// });

// > "a"
// > "b"
// > "c"

// function randomArray(length, min, max) {
//     let random = [];
//     while (random.length < length) {
//         let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//         if (!random.includes(randomNumber)) {
//             random.push(randomNumber);
//         }
//     }
//     return random;
// }

// let random = randomArray(95, 1, 100);

// let findNumber = [];
// for (let num = 1; num <= 100; num++) {
//     if (!random.includes(num)) {
//         findNumber.push(num);
//     }
// }

// findNumber.forEach((num) => {
//     console.log(num);
// });

// function generateRandomArray(length) {
//     var numberSet = new Set();

//     while (numberSet.size < length) {
//         var number = Math.floor(Math.random() * 100) + 1; // Chọn một số ngẫu nhiên từ 1 đến 100
//         if (!numberSet.has(number)) numberSet.add(number);
//     }

//     array = Array.from(numberSet);
//     return array;
// }

// function findMissingNumbers(array, count) {
//     var numberSet = new Set(array);
//     var missingNumbers = [];

//     for (var number = 1; number <= 100; number++) {
//         if (!numberSet.has(number)) {
//             missingNumbers.push(number);
//             if (missingNumbers.length >= count) {
//                 break;
//             }
//         }
//     }

//     return missingNumbers;
// }

// var array = generateRandomArray(95); // Tạo mảng gồm 95 số ngẫu nhiên
// console.log("Mảng: " + array);

// var missingNumbers = findMissingNumbers(array, 5); // Tìm 5 số không trùng
// console.log("Các số không trùng: " + missingNumbers);

// class StringHelper {
//     constructor(value) {
//         this.value = value;
//     }

//     concat(other) {
//         let result = "";
//         const valueChars = this.value.split("");
//         const otherChars = other.split("");

//         for (let i = 0; i < valueChars.length; i++) {
//             result += valueChars[i];
//         }

//         for (let i = 0; i < otherChars.length; i++) {
//             result += otherChars[i];
//         }

//         return result;
//     }

//     subString(startIndex, length) {
//         let result = "";
//         const valueChars = this.value.split("");

//         for (let i = startIndex; i < startIndex + length; i++) {
//             if (valueChars[i]) {
//                 result += valueChars[i];
//             }
//         }

//         return result;
//     }

//     distinct() {
//         let result = "";
//         const valueChars = this.value.split("");
//         const distinctChars = [];

//         for (let i = 0; i < valueChars.length; i++) {
//             if (!distinctChars.includes(valueChars[i])) {
//                 result += valueChars[i];
//                 distinctChars.push(valueChars[i]);
//             }
//         }

//         return result;
//     }

//     contains(substring) {
//         const valueChars = this.value.split("");
//         const substringChars = substring.split("");
//         const valueLength = valueChars.length;
//         const substringLength = substringChars.length;

//         for (let i = 0; i <= valueLength - substringLength; i++) {
//             let found = true;
//             for (let j = 0; j < substringLength; j++) {
//                 if (valueChars[i + j] !== substringChars[j]) {
//                     found = false;
//                     break;
//                 }
//             }
//             if (found) {
//                 return true;
//             }
//         }

//         return false;
//     }
// }

// const helper = new StringHelper("Hello");
// console.log(helper.concat(" World"));
// console.log(helper.subString(1, 3));
// console.log(helper.distinct());
// console.log(helper.contains("lo"));
// console.log(helper.contains("abc"));

function createTable(objects) {
    // Create the table element.
    var table = document.createElement("table");

    // Create the header row.
    var headerRow = document.createElement("tr");
    for (var property in objects[0]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = property;
        headerRow.appendChild(headerCell);
    }

    // Create the data rows.
    for (var object of objects) {
        var dataRow = document.createElement("tr");
        for (var property in object) {
            var dataCell = document.createElement("td");
            dataCell.textContent = object[property];
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }

    // Return the table element.
    return table;
}

var objects = [
    {
        name: "John Doe",
        age: 30,
        city: "New York",
    },
    {
        name: "Jane Doe",
        age: 25,
        city: "Los Angeles",
    },
];

var table = createTable(objects);

document.body.appendChild(table);
