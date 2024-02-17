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
    //Declare an array that stores the series of digits that occur after the operation
    const secondNumber = [];
    //Create variable where it stores the second operand 
    let operandSecond;
    //Create variable that captures the reference to the equals sign button
    const equal = document.querySelector('.small.equal');
    //Create variable that is able to store in the name of operator button
    let operatorName;
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

    //For each number button in the numbers nodelist,
    numbers.forEach((number) => {
        //Create variable where it indicates to user if the operator is clicked or not
        let operatorClicked = false;  
        //If a user clicks on a number button, 
        number.addEventListener('click', () => {
            //Populate the numbers in a first number array that stores digits that occurs before operation
            //if operator is not clicked
            if(!operatorClicked){
                firstNumber.push(number.textContent);
                //Remove the comma between the numbers and display the number on a text box
                output.value = firstNumber.join("");
                //Store the output's value into the variable that saves the first number's item joined
                //Convert to a number
                operandFirst = +output.value;
            }
            //Populate the numbers in the second number array that occur after operation if operator is clicked
            else {
                secondNumber.push(number.textContent);
                //Remove the comma between the numbers and display the number on a text box
                output.value = secondNumber.join('');
                //Store the output's value into the variable that saves the second number's item joined together
                //Convert to a number
                operandSecond = +output.value;
            }
        });
        //If a user clicks an equal button, 
        equal.addEventListener('click', () => {
            //If user has clicked a minus operator,
            if(operatorName === '-'){
                //Use the object method to subtract numbers between the operator
                //Display the final result on the textbox
                output.value = operator.minus(operandFirst, operandSecond);
            }
            //If user has clicked a plus operator,
            else if(operatorName === '+'){
                //Use the object method to add numbers between the operator and display the final result on the textbox
                output.value = operator.add(operandFirst,operandSecond);
            }
            //If user has clicked a multiply operator,
            else if(operatorName === '*'){
                //Use the object method to multiply numbers between the operator
                //Display the final result on the textbox
                output.value = operator.multiply(operandFirst, operandSecond);
            }
            //If user has clicked a divide operator,
            else{
                //Use the object method to divide numbers between the operator
                //Display the final result on the textbox
                output.value = operator.divide(operandFirst, operandSecond);
            }
        });
        //For each operator button in the operators nodelist,
        operators.forEach((operator) => {
            //When the operator is clicked,
            operator.addEventListener('click', () => {
                //Indicate to the user that the operator is clicked
                operatorClicked = true;
                //Store in the operator name
                operatorName = operator.textContent;
                console.log(operatorName);
            })
        });
    });
    
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();