/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

    // YOUR CODE BELOW
/*     if (userGuess >= 101) {
        return ("Too High. Guesses must be between 1-100.");
    } else if (userGuess < -1) {
        return ("Too Low. Guesses must be between 1-100."); */

            // YOUR CODE ABOVE

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/
    // This should return a string that denotes the first guessed number
    // YOUR CODE ...

        /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */

let min = 1;
let max = 100;
let x ;
let callCount = 0;

function randomNumber(userGuess, computersNumber) {
    callCount += 1;
    if (userGuess >= 101) {
        return("Too high! Numbers must be between 1 and 100.");
    } else if (userGuess <= 0) {
        return("Too low! Numbers must be between 1 and 100.");
    };
    if (userGuess < computersNumber) {
        return("Higher");
    } else if (userGuess > computersNumber) {
        return("Lower");
    } else (userGuess === computersNumber)
        return(`Correct, it's ${computersNumber}! It only took you ${callCount} tries.`);
};

function startCompGuess(num) {
    x = num;
    return(`Is ${num} your number?`)
};

function newNumber(min, max) {
    console.log(min, max);
    x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
};

function compGuess(reply) {
    callCount += 1;
    console.log(x);
    if (reply === 'correct') {
        console.log(reply);
        return(`Yay, I got it! It took me ${callCount} tries!`);
    } else if (reply == 'lower') {
        max = x - 1
        console.log(reply);
        return(`Okay. How about ${newNumber(min, max)}?`);
    } else if (reply == 'higher') {
        min = x + 1
        console.log(reply);
        return(`Okay. How about ${newNumber(min, max)}?`);
    };
};