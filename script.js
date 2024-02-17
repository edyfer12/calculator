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
    //Capture the reference to the buttons where class name is "small numbers". This is aimed to capture
    //a group of buttons that are just numbers from 0 to 9
    const numbers = document.querySelectorAll('.small.numbers');
    //Capture the reference to the text box so the number gets outputted to the user
    const output = document.querySelector('#display'); 
    //Create an array that will be used to store multiple numbers in one container. The numbers in an array will
    //be used for displaying multiple digits on a textbox
    const firstNumber = [];
    //Create a variable that saves the first number joined together from the array that stores the first numbers
    let operandFirst;
    //Declare a variable that capture the reference to the operator buttons
    let operators = document.querySelectorAll('.small.operators');
    
    //For each number button in the numbers nodelist,
    numbers.forEach((number) => {
        //If a user clicks on a number button, 
        number.addEventListener('click', () => {
            //Populate the numbers in an array that stores numbers if the second numbers array does not exist
            if(!secondNumber){
                firstNumber.push(number.textContent);
            }
            //If the first array does exist, push the number in the second array
            //Remove the comma between the numbers and display the number on a text box
            output.value = firstNumber.join("");
            //Store the output's value into the variable that saves the first number's item joined
            operandFirst = output.value;
            //For each operator button in the operators nodelist,
            operators.forEach((operator) => {
                //If the operator button is clicked,
                operator.addEventListener('click', () =>{
                //Declare an array that store in the digits after the operator button is pressed 
                const secondNumber = [];
                    //and the number is clicked
                });
            });
        });
    });
    
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();