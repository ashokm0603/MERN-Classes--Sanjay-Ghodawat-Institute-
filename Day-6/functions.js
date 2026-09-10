//Normal Function
function display() {
  console.log("This is normal function");
}

display();

//Normal Function with parameters  -> when where we want to give input to the function than we need to do with function with parameter
function addition(a, b, c, d) {
  console.log(a + b + c + d);
}
addition(10, 20, 30, 40);
addition(10, 150, 90, 80);

//Normal Function with return type  -> When ever we want to result of the function for farther operations then we need to use Function with return type
function getDetails() {
  return {
    name: "ravi",
    age: 25,
    email: "ravi@gmail.com",
    phone: 9874561230,
  };
}

console.log(getDetails());

let result = getDetails();
console.log(result);

///functional expression
let fun = function () {
  console.log("This is functional expression");
};

fun();

///functional expression with parameter
let details = function (name, role) {
  console.log("NAME: ", name);
  console.log("ROLE :", role);
};
details("Ayan", "Developer");
details("Gouri", "WEB DEVELOPER");

//immediate invoking function/self calling function
(function () {
  console.log("immediate invoking function/self calling function");
  let password = "admin@!232";
  let username = "user@123";
  return password + " " + username;
})();

//immediate invoking function/self calling function with parameter
(function (password, username) {
  console.log("immediate invoking function/self calling function");
  console.log(password);
  console.log(username);
})("admin#$123","admin@123");




//Arrow function   ( ES 6) 
let arrowFun=()=>{
    console.log("This is arrow function");
}

arrowFun();
// arrowFun();
// arrowFun();
// arrowFun();


//Nested function
function outerFunction(){
    console.log("outer Function is called");
    let count=10
    function innerFunction(){
        console.log("inner Function is called");
        console.log(count);   
    }
    innerFunction()
}
outerFunction();

//  higher order function   :Any function that will accept another function as a parameters
//callback function     : Any function which is passed as a value to the higher order function


function homePage(r,l){
    console.log("This is home page");
}
function login(){
    console.log("User login Successfully");
}
function register(){
    console.log("User Register Successfully");
}

homePage(register() ,login())