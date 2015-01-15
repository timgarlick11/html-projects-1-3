//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
  if (name === "Tyler") {
   return true; 
  }
   else {
    return false;
   }

}
isTyler(name);


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function() {
  var userName = prompt("What is your name?");
  return userName;
}
//getName();
 


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  var welcome = function() {
   var newName = getName();
   alert("Welcome " + newName);
}
  welcome();
  


//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here


//Next Problem



//What is the difference between arguments and parameters?

  var numbers = function(numOne, numTwo) {
    return numOne + numTwo;
  }
numbers(4,7);

paremters are variables inside the parentheses of the function statement
arguments are the data that is passed to the paremeters

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here 
  undefined, null, NaN, ""(empty string), and false.



//Next Problem



//Create a function called myName that returns your name

  var myName = function() {
    return "Tim";
  }
  myName();

//Now save the function definition of myName into a new variable called newMyName

   var myName = function() {
    return "Tim";
  }
  var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

 var outerFn = function() {
    return function() {
      return "Tim Garlick";
    } (); // this button is used to call the anonymous function
}
//outerFN(); this is calling the function but I am commenting it out so I can call it below with a function.
//Now save the result of invoking outerFn into a variable called innerFn.
 var innerFn = outerFn();


//Now invoke innerFn.

innerFn;