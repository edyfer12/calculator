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
    //Create variable that captures the reference to the clear button
    const clear = document.querySelector('.clear');
    //Create variable that is able to store in the name of operator button
    let operatorName;
    //Declare an array that stores the operator and operands
    const arithmetic = [];
    //Create an array called digits that stores digits in one container
    const digits = [];
    //Create a total variable that will store the calculated values for display
    //Set to 0
    let total = 0;
    //Create variable result and set value to 0
    let result = 0;
    //Create variable isAccumulated and set value to false
    let isAccumulated = false;

    //Loop through the nodelist for the number buttons from 0 to 9,
    numbers.forEach((digit) => {
        //If a user clicks on a number button, 
        digit.addEventListener('click', () => {
            //Set the isAccumulated to false
            //isAccumulated = false;
            //If the isAccumulated is true, set to true
            if(isAccumulated === true){
                isAccumulated = true;
            }
            else{
                //Otherwise, set to false
                isAccumulated = false;
            }
            //Push each digit into the digits array
            digits.push(digit.textContent);
            //If arithmetic array not include firstNumber,
            if(arithmetic.length === 0){
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
    //If a user clicks the Clear button, empty the display value in the textbox and erase the entire arithmetic array
    clear.addEventListener('click', () => {
        output.value = '';
        arithmetic.splice(0,arithmetic.length);
        //Empty the digits array
        digits.splice(0,digits.length);
        //Set the first number to undefined
        firstNumber = undefined;
        //Set the second number to undefined
        secondNumber = undefined;
        //Set the operator name to undefined
        operatorName = undefined;
        //Set total to 0
        total = 0;
        //Set isAccumulated to false
        isAccumulated = false;
    });
    //If a user clicks an equal button, 
    equal.addEventListener('click', () => {
        //If isAccumulated is true, push the secondNumber in the array
        if(isAccumulated === true){
            arithmetic.push(firstNumber);
        }
        //Push the final operand into the arithmetic array
            /* If the items of the last index and one before in the arithmetic array is operatorName and firstNumber
             respectively and isAccumulated is false, */
        else if(isAccumulated === false && arithmetic[arithmetic.length - 1] === operatorName 
            && arithmetic[arithmetic.length - 2] === firstNumber ){
                //Push the secondNumber to the arithmetic array
            arithmetic.push(secondNumber);
        }
            /* If the items of the last index and one before in the arithmetic array is operatorName and secondNumber
             respectively, isAccumulated is false */ 
        else if(isAccumulated === false && arithmetic[arithmetic.length - 1] === operatorName && arithmetic[arithmetic.length - 2] === secondNumber){
                //Push the firstNumber to the arithmetic array
            arithmetic.push(firstNumber);
        }
        //Save the original value of the firstNumber in case the user makes a mistake when hitting the firstNumber Op secondNumber Op Equal
        let originalFirstNumber = firstNumber;
        //Save the original value of the secondNumber in case the user makes a mistake when hitting the firstNumber Op secondNumber Op firstNumber Op Equal
        let originalSecondNumber = secondNumber;
        //If isAccumulated is false
        if(isAccumulated === false){
            //Push the equal sign into the arithmetic array 
            arithmetic.push(equal.textContent);
            //Extract the last item in the index from arithmetic array and store into the secondNumber variable
            secondNumber = arithmetic[arithmetic.length - 2];
            //Extract the arithmetic array from the first index to the index where operator is final and store into firstNumber 
            firstNumber = arithmetic.slice(0, arithmetic.lastIndexOf(operatorName)); 
            /*Use the array reduce method to return a single value for the firstNumber array. 
                Initial_value for the reduce method to 0 as a second parameter
                Include the callback function as the first parameter
                Inside the callback function, include
                    accumulator as the first parameter, accumulator = initial_value = 0
                    current_item as second parameter 
                    current_index as third parameter
            */  
        //For example, array is [1, '+', 120, '-', 12, 'X' ,123] 
            firstNumber = firstNumber.reduce((accumulator, current_item, current_index) => {
            //If current_index is an odd number, do not store values in the accumulator and 
            //return accumulator to move to next current_item
            if(current_index % 2 === 1){
                return accumulator;
            }
            //If current_index is an even number and is at least 2,
            else if(current_index % 2 === 0 && current_index >= 2){
                    //If array_name[current_index - 1] = '+',
                    if(firstNumber[current_index - 1] === '+'){
                        //set the accumulator to current accumulator value added by current_item
                        accumulator += current_item;
                    }
                    //If array_name[current_index - 1] = '-',
                    else if(firstNumber[current_index - 1] === '-'){
                        //set the accumulator to current accumulator value subtracted by current_item
                        accumulator-= current_item;
                    }
                    //If array_name[current_index - 1] = 'X',
                    else if(firstNumber[current_index - 1] === 'X'){
                        //set the accumulator to current accumulator value multiplied by current_item
                        accumulator *= current_item;
                    }
                    //If array_name[current_index - 1] = '÷',
                    else if(firstNumber[current_index - 1] === '÷'){
                        //set the accumulator to current accumulator value divided by current_item
                        accumulator /= current_item;
                    }
                    //Return accumulator
                    return accumulator;
            }
                //If current_index is 0, 
            else if(current_index === 0){
                //set the accumulator to current accumulator value added by current_item
                accumulator += current_item;
                return accumulator;
            }
            }, 0);
        }
        /*If the secondNumber is 0 and operatorName is ÷, display the error message "Cannot divide by zero" on textbox
        return the value -1 to terminate the display function*/
        if(operatorName === '÷' && secondNumber === 0){
            output.value = 'Cannot divide by 0';
            return -1;
        }
        //If secondNumber, operatorName, firstNumber does not have an undefined value,
        if(secondNumber !== undefined && firstNumber !== undefined && operatorName !== undefined){ 
            //If the operatorName is '+',
            if(operatorName === '+' && isAccumulated === false){
                //Initially, store operate() function into the result variable
                result = operate(firstNumber, secondNumber, operatorName);
                //Set isAccumulated to true
                isAccumulated = true;
            }
            //If isAccumulated is true, store the previous result value added by the secondNumber into the result
            else if(operatorName === '+' && isAccumulated === true){
                result += secondNumber;
            } 
            //If the operatorName is '-',
            else if(operatorName === '-' && isAccumulated === false){
                //Initially, store operate() function into the result variable
                result = operate(firstNumber, secondNumber, operatorName);
                //Set isAccumulated to true
                isAccumulated = true;
            }
            //If isAccumulated is true, store the previous result value added by the secondNumber into the result
            else if(operatorName === '-' && isAccumulated === true){
                result -= secondNumber;
            }  
            //If the operatorName is 'X',
            else if(operatorName === 'X' && isAccumulated === false){
                //Initially, store operate() function into the result variable
                result = operate(firstNumber, secondNumber, operatorName);
                //Set isAccumulated to true
                isAccumulated = true;
            }
            //If isAccumulated is true, store the previous result value added by the secondNumber into the result
            else if(operatorName === 'X' && isAccumulated === true){
                result *= secondNumber;
            }  
            //If the operatorName is '÷',
            else if(operatorName === '÷' && isAccumulated === false){
                //Initially, store operate() function into the result variable
                result = operate(firstNumber, secondNumber, operatorName);
                //Set isAccumulated to true
                isAccumulated = true;
            }
            //If isAccumulated is true, store the previous result value added by the secondNumber into the result
            else if(operatorName === '÷' && isAccumulated === true){
                result /= secondNumber;
            }   
            //Print the final result to the textbox
            output.value = result;
            //Empty the arithmetic array
            arithmetic.splice(0,arithmetic.length);
            //Empty the digits array
            digits.splice(0,digits.length);
            //Set the output value as the firstNumber
            firstNumber = result;
            //result = 0;
            total = 0;
            arithmetic.push(firstNumber);

        }
        //If the item in the first index has an undefined second number and an equal sign on the second index,
        else if(arithmetic[0] === secondNumber && secondNumber === undefined && arithmetic[1] === '='){ 
            //Set first number to undefined to reset the value and start new calculation
            firstNumber = undefined;
            //Reset the arithmetic array by removing equal sign and secondNumber
            arithmetic.splice(0,2);
        }
        /*If the equal sign is the last index, undefined second number being the second last index, operator name 
        located on the third last and first defined number as the fourth last index*/
        else if(arithmetic[arithmetic.length - 1] === '=' && arithmetic[arithmetic.length - 2] === secondNumber
        && secondNumber === undefined && arithmetic[arithmetic.length - 3] === operatorName && 
        arithmetic[arithmetic.length - 4] === firstNumber && firstNumber !== undefined){
            //Pop the last item in the arithmetic array that is an equal sign so user can enter a new second number
            arithmetic.pop();
            //Pop the next last item in the arithmetic array which is an undefined second number
            arithmetic.pop();
        }
        /*If the equal sign is the last index, undefined first number being the second last index, operator name
        is located on the third last position and undefined second number is positioned on the fourth last index*/
        else if(arithmetic[arithmetic.length - 1] === '=' && arithmetic[arithmetic.length - 2] === firstNumber &&
        firstNumber == undefined && arithmetic[arithmetic.length - 3] === operatorName && 
        arithmetic[arithmetic.length - 4] === secondNumber && secondNumber !== undefined){
            //Pop the last item in the arithmetic array that is an equal sign
            arithmetic.pop();
            //Pop the next last item in the arithmetic array that is an undefined first number
            arithmetic.pop();
        }
        //If the first number is the first index and the equal is second item in array
        else if(arithmetic[0] === firstNumber && arithmetic[1] === '='){
            //Pop the last item in the array
            arithmetic.pop();
        }
        //If the last index is an equal sign and the previous index has a second number that is undefined of the arithmetic array,
        else if(arithmetic[arithmetic.length - 1] === '=' && arithmetic[arithmetic.length - 2] === secondNumber &&
        secondNumber === undefined){
            //Pop the last item that is an equal sign
            arithmetic.pop();
            //Pop the second last item that is a secondNumber
            arithmetic.pop();
            //Replace the firstNumber with the original first number value
            firstNumber = originalFirstNumber;
            //Replace the secondNumber with the original second number value
            secondNumber = originalSecondNumber;
        }
    });
    //Loop through the nodelist of operator buttons +-/*,
    operators.forEach((operator) => {
        //When the operator is clicked,
        operator.addEventListener('click', () => {
            //Remove all digits in the digits array
            digits.splice(0,digits.length);
            if(arithmetic.length == 0){
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
            //If the arithmetic length is 1,
            else if(arithmetic.length === 1){
                //Store operator button value into the operatorName variable
                operatorName = operator.textContent;
                //Push the operatorName into the arithmetic array
                arithmetic.push(operatorName);
                //Set the secondNumber to undefined
                secondNumber = undefined;
            }
            //If arithmetic[lastIndex - 1] EQUAL to firstNumber AND arithmetic[lastIndex] equal to operatorName,
            else if(arithmetic[arithmetic.length - 2] === firstNumber && 
                arithmetic[arithmetic.length - 1] === operatorName){
                //If th secondNumber is not undefined,
                if(secondNumber !== undefined){
                    //Push secondNumber into the arithmetic array 
                    arithmetic.push(secondNumber);
                }
                //If item of index 0 is firstNumber, item of last index is secondNumber and length of arithmetic array is 3 
                if(arithmetic[arithmetic.length - 1] === secondNumber && 
                    arithmetic[0] === firstNumber && arithmetic.length === 3){
                        //If the operator between two operands is +,
                        if(operatorName === '+'){
                            //Add current total value by first number and second number
                            total += firstNumber + secondNumber
                            //Display the total value on the textbox
                            output.value = total;
                            //Store the result value in total variable
                            result = total;
                        }
                        //If the operator between two operands is -,
                        else if(operatorName === '-'){
                            //Add current total value and subtract first number and second number
                            total += firstNumber - secondNumber;
                            //Display the total value on the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is +,
                        else if(operatorName === 'X'){
                            //Add current total value and multiply first number by second number
                            total += firstNumber * secondNumber
                            //Display the total value on the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is -,
                        else if(operatorName === '÷'){
                            //Add current total value and dvide first number and second number
                            total += firstNumber / secondNumber;
                            //Display the total value on the textbox
                            output.value = total;
                        }
                
                }
                //If item of last index is secondNumber and item of two before last index is firstNumber,
                else if(arithmetic[arithmetic.length - 1] === secondNumber && 
                    arithmetic[arithmetic.length - 3] === firstNumber
                     && arithmetic.length > 3){
                        if(operatorName === '+'){
                            //Add current total value by secondNumber
                            total += secondNumber;
                            //Display the total value to the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is -,
                        else if(operatorName === '-'){
                            //Subtract current total value by second number
                            total -= secondNumber;
                            //Display the total value to the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is +,
                        else if(operatorName === 'X'){
                            //Multiply current total value by second number
                            total *= secondNumber;
                            //Display the total value on the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is -,
                        else if(operatorName === '÷'){
                            //Divide current total value by second number
                            total /= secondNumber;
                            //Display the total value on the textbox
                            output.value = total;
                        }
                }
                //Store the operator button value into the operatorName variable
                operatorName = operator.textContent;
                //If the secondNumber does exist before the operator
                if(arithmetic[arithmetic.length - 1] === secondNumber){
                    //Push the operatorName variale into the arithmetic array 
                    arithmetic.push(operatorName);
                }

                operatorName = operator.textContent;
                //If item of last index of the arithmetic array is an operator,
                //Replace the item wih new value
                if(arithmetic.lastIndexOf(operator.textContent)){
                    arithmetic[arithmetic.length - 1] = operatorName;
                }
                if(secondNumber !== undefined){
                    firstNumber = undefined;
                }
                
            }
            //If arithmetic[lastIndex - 1] EQUAL to secondNumber and EQUAL to arithmetic[lastIndex] equal to operatorName?
                //Push the firstNumber into the arithmetic array
            else if(arithmetic[arithmetic.length - 2] === secondNumber && 
                arithmetic[arithmetic.length - 1] === operatorName){
                
                //arithmetic.push(firstNumber);
                if(firstNumber !== undefined){
                    arithmetic.push(firstNumber);
                    //Store the operator button value into the operatorName variable 
                    arithmetic.push(operatorName);
                }
                //If item of last index is firstNumber and item of 2nd last index is secondNumber while length is greater than 3
                if(arithmetic[arithmetic.length - 2] === firstNumber && 
                    arithmetic[arithmetic.length - 1] === operatorName
                    && arithmetic.length > 3){
                        
                        //If operator between two operands is +
                        if(operatorName === '+'){
                            //Add current total value by firstNumber
                            total += firstNumber;
                            //Display the total value to the textbox
                            output.value = total;
                        }
                        //If operator between two operand is -
                        else if(operatorName === '-'){
                            //Subtract current total value by firstNumber
                            total -= firstNumber;
                            //Display the total value to the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is +,
                        else if(operatorName === 'X'){
                            //Multiply current total value by first number
                            total *= firstNumber;
                            //Display the total value on the textbox
                            output.value = total;
                        }
                        //If the operator between two operands is -,
                        else if(operatorName === '÷'){
                            //Divide current total value by first number
                            total /= firstNumber;
                            //Display the total value on the textbox
                            output.value = total;
                        }
                } 
                operatorName = operator.textContent;
                //If item of last index of the arithmetic array is an operator,
                //Replace the item wih new value
                if(arithmetic.lastIndexOf(operator.textContent)){
                    arithmetic[arithmetic.length - 1] = operatorName;
                    if(firstNumber !== undefined){
                        secondNumber = undefined;
                    }
                }
                //Push the operatorName variable into the arithmetic array   
                else if(secondNumber !== undefined){
                    secondNumber = undefined;
                }
            }  
        });
    });
    
    
}
//Add a function call to execute an task responsible for displaying value on the calculator
display();