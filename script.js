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
        case 'X':
        return multiply(firstNumber, secondNumber);
        break;
    //If a user inputs two numbers and clicks a / button, call the divide function
        case '÷':
        return divide(firstNumber, secondNumber);
        break;
    }
}
//Create an object that stores the operators. Each operator is a method
const operator = {
    //Set the add method and the value is num1 + num2
    add: function(num1,num2){
        return num1 + num2;
    },
    //Set the minus method and the value is num1 - num2
    minus: function(num1,num2){
        return num1 - num2;
    },
    //Set the multiply method and the value is num1 * num2
    multiply: function(num1, num2){
        return num1 * num2;
    },
    //Set the divide method and the value is num1 / num2
    divide: function(num1,num2){
        return num1 / num2;
    }
};
//Create a function that will be used to display the numbers on the small screen above the calculator
function display(){
    //Capture the reference to the buttons where class name is "small numbers". This is aimed to capture
    //a group of buttons that are just numbers from 0 to 9
    const numbers = document.querySelectorAll('.small.numbers');
    //Capture the reference to the text box so the number gets outputted to the user
    const output = document.querySelector('#display'); 
    //Declare a variable that capture the reference to the operator buttons
    let operators = document.querySelectorAll('.small.operators');
    //Create variable that captures the reference to the equals sign button
    const equal = document.querySelector('.small.equal');
    //Create variable that is able to store in the name of operator button
    let operatorName;
    //Declare an array that stores the operator and operands
    const arithmetic = [];

    //For each number button in the numbers nodelist,
    numbers.forEach((number) => {
        //If a user clicks on a number button, 
        number.addEventListener('click', () => {
            
        });
    });
    //If a user clicks an equal button, 
    equal.addEventListener('click', () => {
        output.value = operate(operandFirst,operandSecond, operatorName);
    });
    //For each operator button in the operators nodelist,
    operators.forEach((operator) => {
        //When the operator is clicked,
        operator.addEventListener('click', () => {
            
        })
    });
    
    
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();