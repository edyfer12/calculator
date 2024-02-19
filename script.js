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

    //**********************ALGORITHMS - PERFORM OPERATIONS ON MULTIPLE NUMBERS ********************** */ 
    /*
        EXAMPLE: 123 + 1231 + 121 + 1

        Capture the reference of the number buttons (0 to 9)
        Capture reference of the textbox
        Create variable that stores the first number
        Create variable that stores the operator
        Create an array of digits that is able to store more than one value when buttons are clicked
        Capture reference of the operator buttons (+-/*)
        Create an array of numbers and operators that is able to then perform arithmetic operations

        Loop through the nodelist containing number buttons
            For each number inside the nodelist (all the number buttons can be accessed), 
            1. User clicks '1', '2' and '3' buttons that belong to the nodelist of number buttons
                1. Push '1', '2', '3' to the digits array => digits = ['1', '2', '3']
                1. Does arithmetic array not include firstNumber?
                    1. Store the value of digits array into the first number variable 
                        => firstNumber = digits = '1','2','3';
                    1. Join together all the digits with '' and save into firstNumber 
                        => firstNumber = digits.join('') = '123'
                    1. Convert to Number and save into firstNumber
                        => firstNumber = +firstNumber = 123
                    1. Display firstNumber to textbox => textbox-element.value = firstNumber
            2. User clicks '1', '2', '3' and '1' buttons that belong to the nodelist of number buttons
                2. Push '1', '2', '3' and '1' to the digits array => digits = ['1', '2', '3', '1']
                2. Is arithmetic[lastIndex - 1] EQUAL to firstNumber(123) and arithmetic[lastIndex]('+') to operatorName?
                    2. Store the value of digits array into the second number variable
                        => secondNumber = digits = '1', '2', '3', '1'
                    2. Join together all the digits with '' and save into the secondNumber
                        => secondNumber = digits.join('') = '1231'
                    2. Convert to Number and save into secondNumber
                        => secondNumber = +secondNumber = 1231
                    2. Display secondNumber to textbox = textbox.value = secondNumber
            3. User clicks '1', '2' and '1' on the number buttons
                3. Push '1', '2', and '1' on the digits array => digits = ['1', '2', '1']
                3. Is arithmetic[lastIndex - 1] EQUAL to secondNumber and arithmetic[lastIndex] EQUAL to operator?
                    3. Store value of digits array into the firstNumber variable
                        => firstNumber = '1', '2', '1'
                    3. Join together all the items with '' and store into the firstNumber variable
                        => firstNumber = digits.join('') = '121'
                    3. Convert to Number and save to firstNumber => firstNumber = +firstNumber = 121
                    3. Display firstNumber to textbox = textbox.value = firstNumber 

        Loop through the nodelist containing operator buttons
            For each operator inside the nodelist (all the operator buttons can be accessed),
            1. User clicks '+' that belong to the nodelist of operator buttons,
                Slice all items in the digits array => digits = []
                1. Does arithmetic array not include firstNumber?
                    1. Push firstNumber into the arithmetic array => arithmetic = [firstNumber] = [123]
                    1. Store the operator button value into the operatorName variable => operatorName = '+'
                    1. Push the operatorName variable into the arithmetic array => [firstNumber, operatorName] 
                    => [123, '+']
                2. Does arithmetic[lastIndex - 1] EQUAL to firstNumber(123) && arithmetic[lastIndex] equal to operatorName('+')?
                    2. Push secondNumber into the arithmetic array 
                        => arithmetic = [firstNumber, operator, secondNumber] = [123, '+', 1231]
                    2. Store the operator button value into the operatorName variable => operatorName = '+'
                    2. Push the operatorName variale into the arithmetic array => [firstNumber, operatorName, secondNumber, operatorName]
                        => [123, '+', 1231, '+'] 
                3. Does arithmetic[lastIndex - 1] EQUAL to secondNumber(1231) and arithmetic[lastIndex] equal to operatorName(+)?
                    3. Push the firstNumber into the arithmetic array
                        => arithmetic = [firstNumber, operator, secondNumber, operator] = [123, '+', 1231, '+', 121]
                    3. Store the operator button value into the operatorName variable 
                        => operatorName = '+'
                    3. Push the operatorName variable into the arithmetic array 
                        => [firstNumber, operatorName, secondNumber, operatorName]
                        => [123, '+', 1231, '+', 121, '+']

    */

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
            //Push each digit into the digits array
            digits.push(digit.textContent);
            //If arithmetic array not include firstNumber,
            if(!arithmetic.includes(firstNumber)){
                //Store the value of digits array into the first number variable 
                firstNumber = digits;
                //Join together all the digits with '' and save into firstNumber 
                firstNumber = digits.join(''); 
                //Convert to Number and save into firstNumber
                firstNumber = +firstNumber;
                //Display firstNumber to textbox
                output.value = firstNumber;
            }
            //If arithmetic[lastIndex - 1] EQUAL to firstNumber and arithmetic[lastIndex] to operatorName,
            else if(arithmetic[arithmetic.length - 2] === firstNumber &&
                arithmetic[arithmetic.length - 1] === operatorName){
                //Store the value of digits array into the second number variable
                secondNumber = digits;
                //Join together all the digits with '' and save into the secondNumber
                secondNumber = digits.join('');
                //Convert to Number and save into secondNumber
                secondNumber = +secondNumber;
                //Display secondNumber to textbox = textbox.value = secondNumber
                output.value = secondNumber;
            }
            //If arithmetic[lastIndex - 1] EQUAL to secondNumber and arithmetic[lastIndex] equal to operatorName,
            else if(arithmetic[arithmetic.length - 2] === secondNumber &&
                 arithmetic[arithmetic.length - 1] === operatorName){
                //Store the firstNumber into the arithmetic array
                firstNumber = digits;
                //Join together all the digits with '' and save into the secondNumber
                firstNumber = digits.join(''); 
                //Convert to Number and save into secondNumber
                firstNumber = +firstNumber;
                //Display secondNumber to textbox = textbox.value = secondNumber
                output.value = firstNumber;
            }
        });
    });
    //If a user clicks an equal button, 
    equal.addEventListener('click', () => {
        //Push the final operand into the arithmetic array
            /* If the items of the last index and one before in the arithmetic array is operatorName and firstNumber
             respectively, */
        if(arithmetic[arithmetic.length - 1] === operatorName && arithmetic[arithmetic.length - 2] === firstNumber){
                //Push the secondNumber to the arithmetic array
            arithmetic.push(secondNumber);
        }
            /* If the items of the last index and one before in the arithmetic array is operatorName and secondNumber
             respectively, */ 
        else if(arithmetic[arithmetic.length - 1] === operatorName && arithmetic[arithmetic.length - 2] === secondNumber){
                //Push the firstNumber to the arithmetic array
            arithmetic.push(firstNumber);
        }
        //Push the equal sign into the arithmetic array
        arithmetic.push(equal.textContent);
        //Extract the last item in the index from arithmetic array and store into the secondNumber variable
        secondNumber = arithmetic.slice(arithmetic.length - 2, arithmetic.length - 1);
        //Extract the arithmetic array from the first index to the index where operator is final and store into firstNumber 
        firstNumber = arithmetic.slice(0, arithmetic.lastIndexOf(operatorName));   
        //Print the final result to the textbox
        output.value = operate(firstNumber,secondNumber,operatorName);
    });
    //Loop through the nodelist of operator buttons +-/*,
    operators.forEach((operator) => {
        //When the operator is clicked,
        operator.addEventListener('click', () => {
            //Remove all digits in the digits array
            digits.splice(0,digits.length);
            //If arithmetic array does not include firstNumber,
            if(!arithmetic.includes(firstNumber)){
                //Push firstNumber into the arithmetic array
                if(firstNumber !== undefined){
                    arithmetic.push(firstNumber);
                }
                //Store the operator button value into the operatorName variable
                operatorName = operator.textContent;
                //Push the operatorName variable into the arithmetic array 
                if(firstNumber !== undefined){
                    arithmetic.push(operatorName);
                }
            }
            //If arithmetic[lastIndex - 1] EQUAL to firstNumber AND arithmetic[lastIndex] equal to operatorName,
            else if(arithmetic[arithmetic.length - 2] === firstNumber && 
                arithmetic[arithmetic.length - 1] === operatorName){
                //Push secondNumber into the arithmetic array 
                arithmetic.push(secondNumber);
                //Store the operator button value into the operatorName variable
                operatorName = operator.textContent;
                //Push the operatorName variale into the arithmetic array 
                arithmetic.push(operatorName);
            }
            else if(arithmetic[arithmetic.length - 2] === secondNumber && 
                arithmetic[arithmetic.length - 1] === operatorName){
            //If arithmetic[lastIndex - 1] EQUAL to secondNumber and EQUAL to arithmetic[lastIndex] equal to operatorName?
                //Push the firstNumber into the arithmetic array
                arithmetic.push(firstNumber);
                //Store the operator button value into the operatorName variable 
                operatorName = operator.textContent;
                //Push the operatorName variable into the arithmetic array   
                arithmetic.push(operatorName);
            } 
            console.log(arithmetic);
        });
    });
    
    
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();