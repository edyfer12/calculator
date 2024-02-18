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

//Create a function that will be used to display the numbers on the small screen above the calculator
function display(){
    //Declare a variable called firstNumber that will be used to store the first number
    let firstNumber;
    //Declare a variable called secondNumber that will be used to store the second number
    let secondNumber;
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
    //Create an array called digits that stores digits in one container
    const digits = [];

    //Loop through the nodelist for the number buttons from 0 to 9,
    numbers.forEach((digit) => {
        //If a user clicks on a number button, 
        digit.addEventListener('click', () => {
            //If the arithmetic array has no first number,
            if(!arithmetic.includes(firstNumber)){
                //Push digit into digits array
                digits.push(digit.textContent);
                //Join the digits from the array with '' converted to number and assign to firstNumber variable
                firstNumber = +digits.join('');
                //Output the value of firstNumber variable onto the textbox
                output.value = firstNumber;
            }
            //If the operator in an arithmetic array is an index of last index and first number is one index before last index, 
            else if(arithmetic.indexOf(arithmetic.length - 1) === operatorName &&
            arithmetic.indexOf(arithmetic.length - 2) === firstNumber){
                //Push new digits into the digits array
                digits.push(digit.textContent);
                //Join the digits together with '' converted to number and assign to secondNumber variable
                secondNumber = +digits.join('');
                //Output the value of secondNumber variable onto the textbox
                output.value = secondNumber;
            }
            //If the operator in an arithmetic array is an index of last index and second number is one index before last index, 
            else if(arithmetic.indexOf(arithmetic.length - 1) === operatorName &&
            arithmetic.indexOf(arithmetic.length - 2) === secondNumber){
                //Push the digits into the digits array
                digits.push(digit.textContent);
                //Join the digits together with '' converted to number and assign to firstNumber variable
                firstNumber = +digits.join('');
                //Output the value of firstNumber variable onto the textbox
                output.value = firstNumber;
            }
        });
    });
    //If a user clicks an equal button, 
    equal.addEventListener('click', () => {
        output.value = operate(firstNumber,secondNumber,operatorName);
    });
    //Loop through the nodelist of operator buttons +-/*,
    operators.forEach((operator) => {
        //When the operator is clicked,
        operator.addEventListener('click', () => {
            //Pop all digits in the digits array
            digits.splice(0,digits.length);
            //Assign the text content of the operator button into the operatorName variable
            operatorName = operator.textContent;
            //If the arithmetic item does not include a first number or arithmetic item, second number
            //has an index of last index, then push first number into the arithmetic array
            if(arithmetic.indexOf(arithmetic.length - 1) === secondNumber || 
            !arithmetic.includes(firstNumber)){
                arithmetic.push(firstNumber);
            }
            //If the second number variable exists,
            if(secondNumber){
                //Push the arithmetic array with the second number
                arithmetic.push(secondNumber);
            } 
            arithmetic.push(operatorName);
        })
    });
    
    
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();