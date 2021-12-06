
// Strings
let myName = "Sean";
let myOtherName = 'Craig';
let myRealName = `George ${myName}`;

// Numbers
let myNumber = 5;
let myOtherNumber = 5.5;

// Boolean
let myBool = true;
let myOtherBool = false;

// random num
let randomNum = Math.random();
console.log(randomNum)

// Defining a function
function randomString(number1 = 0,number2 = 0) {
  console.log(number1, number2);
  return `${number1 + number2}`
}

// defining an object
let enemy = {
  health: 50,
  x: 5,
  y: 5,
}

// This is undefined
let myVariable;

let myNullVariable = null;

// Defining an array
let myArray = [
    { name: 'sean' },
    4,
    8,
    'hello',
];

// Indexing into the zero-th element of an array
console.log(myArray[1]);

// Lots of ways to define functions inside an object
let myObject = {
    x:5,
    y:10,
    pizza: { toppings: ['pepperoni', 'mushrooms' ]},
    myFunction: randomString,
    myOtherFunction: function giveEight() {
      return 5 + 3
    },
    someOtherFn() {
      return 5 + 6;
    },
    myArrowFn: () => {
      return 5 + 6;
    }
}

//string functions
let newString = `Lamp Shade and lemon`.replace(`L`,`m`).toUpperCase().split(``);

for(let i = 0; i < newString.length; i+=1) {
    let a = newString.join(`i`);
    console.log(a);
}

for (let character of newString){
    console.log(character)
}

console.log(myObject);
console.log(newString);
