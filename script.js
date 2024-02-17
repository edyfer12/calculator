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
    //For each number button in the numbers nodelist,
    numbers.forEach((number) => {
        //If a user clicks on a number button, 
        number.addEventListener('click', () => {
            //Populate the numbers in an array that stores numbers
            firstNumber.push(number.textContent);
            //Remove the comma between the numbers and display the number on a text box
            output.value = firstNumber.join("");
            //Store the output's value into the variable that saves the first number's item joined
        });
    });
    //Convert the value of the variable consisting of first numbers into an integer
    //Create an array that will store numbers which is the second number after user clicks on an operator
    //Create a variable and store reference to the operator buttons
    //Create a variable that is able to store the value of the operator button
    //Create a variable that is able to store the joined items of the second numbers array
    //Loop through the nodelist that contains the operators where user decides to perform a calculation,
        //If the user clicks on one of the operators,
            //Store the value of the operator button into the variable created 
            //Loop through the numbers nodelist,
                //If the number is clicked,
                    //Populate the number that is of the second number array
                    //Display the number on the text box with the comma removed between the numbers
                    //Store the joined value of the second array into the variable 
    //Capture the reference to the equal button
    //Convert the 
    //If the user clicks on the equal button, 
        //If the button clicked is an '+' sign,
            //Add two numbers together
            //Display the output on the textbox showing the total of two numbers added
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();