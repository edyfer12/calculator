//Declare an add function that will add two numbers returned
function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
//Declare a subtract function that will subtract two numbers returned
function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}
//Declare a multiply function that will multiply two numbers returned
function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}
//Declare a divide function that will divide two numbers returned
function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

//Declare a variable called firstNumber that will be used to store the first number
let firstNumber;
//Declare a variable called secondNumber that will be used to store the second number
let secondNumber;
//Declare a variable called operator that will be used to store the operator(+,-,/,*)
let operator;

//Create a function that will be used to perform a mathematical operation between two numbers
function operate(firstNumber,secondNumber, operator){
    //If a user inputs two numbers and clicks a + button, call the add function
    switch(operator){
        case '+':
        return add(firstNumber,secondNumber);
        break;
    //If a user inputs two numbers and clicks a - button, call the subtract function
        case '-':
        return subtract(firstNumber,secondNumber);
        break;
    //If a user inputs two numbers and clicks a * button, call the multiply function
        case '*':
        return multiply(firstNumber, secondNumber);
        break;
    //If a user inputs two numbers and clicks a / button, call the divide function
        case '/':
        return divide(firstNumber, secondNumber);
        break;
    }
}

//Create a function that will be used to display the numbers on the small screen above the calculator
function display(){
    
}