// var A = 5;
// let a = 5 + 6;
// console.log(a);
// console.log("This is first line");
// let b = 6;
// b = b + 10;
// alert(b);
// document.write("<br>" + "<p>This paragraph is generated within js file</p>");
// const c = 10;
// alert(c);
// demo = "asdf";
// console.log(demo);

// var avg = function (a,b){
//     console.log((a+b/2));
// }
// avg(5000,6000)

// var sum = (e, f) => {
//     return e + f;
// }
// var c = Sum(5, 6);
// console.log(c);


// setTimeout(function (){
//     console.log("Hello");
// });
// var fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit){
//     console.log(fruit);
// });

// (function (){
//     console.log("hello");
// });

// var numbers = [65, 44, 12, 4];
// var newarray = numbers.map(myFunction)

// function myFunction(num) {
//     return num = 10;
// }

// console.log(newarray);

// var numbers = [175, 50, 25];
// var val = numbers.reduce(myFunc);
// function myfunc(total, num){
//     return total - num;
// }
// console.log(val);

// function fetchData(){
//     console.log("Fetching data..");
//     setTimeout(() => {
//         console.log("Data fetched!");
//         const data = { name:"John",age:30};
//         console.log(data);
//     }, 2000)
// }
// fetchData();
// console.log("Fetching data,please wait..");


// function greet(name, callback){
//     console.log('Hello, ${name}!');
//     callback();
// }
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greet("John", sayGoodbye);

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Success!');
     }, 1000);    
    });
    promise.then(function(value){
        console.log(value);//Output: Sucess!
    
    }).catch(function(error){
        console.log(error);
    });
