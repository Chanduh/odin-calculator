// doc element by ID all buttons
const viewPort = document.getElementById('viewPort');
const clear= document.getElementById('clear');
const delete= document.getElementById('delete');

const b7= document.getElementById('b7');
const b8= document.getElementById('b8');
const b9= document.getElementById('b9');
const bMultiply= document.getElementById('bMultiply');

const b4= document.getElementById('b4');
const b5= document.getElementById('b5');
const b6= document.getElementById('b6');
const bDivide= document.getElementById('bDivide');

const b1= document.getElementById('b1');
const b2= document.getElementById('b2');
const b3= document.getElementById('b3');
const bSubtract= document.getElementById('bSubtract');

const bDecimal= document.getElementById('bDecimal');
const b0= document.getElementById('b0');
const bEquals= document.getElementById('bEquals');
const bAdd= document.getElementById('bAdd');

// add event listeners to all buttons


// operation is 
// doMath (crrentnumber, operation, number 2){
    // update current number to the result of this operation
        // display the current number on the viewport
//}


// let firstNumber = '';
// let secondNumber = '';
// let operation = '';

//a number is clicked - is current number a string?
    // yes - concat to current and display current
    // no - concat to second number, display second number

// when operation clicked, are there two numbers?
    // viewport update - operation
    // yes - nextnumber converted to num, update operation, invoke equals() 
    // no - update operation only 

// when equals is clicked, are there 2 numbers?
    // no - return current number;
    // yes - next number convertd to num
        // reassign current number to the result of the operation
        //  display current number
        // second number cleared to empty string

// delete
    // is there a nextNum? 
        // yes - nextNum string to array, arrayPOP, arrayjoin
        // no - is there a current num string?
            // no - clear calc
            // yes - string to array pop join


// clear
    // page reload