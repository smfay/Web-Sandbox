
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

// Lots of ways to define functions inside an object
let myObject = {
    x:5,
    y:10,
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


console.log(myObject);