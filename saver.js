

// subtract and equals dont do anything, add and divide work
// equals doesnt work
// delete doesnt work

// figure out how to view port currnum operation nextnum at once





let currNum = '';
let nextNum = '';
let operation = '';


const viewPort= document.getElementById('viewPort');

const bClear= document.getElementById('bClear');
const bDelete= document.getElementById('bDelete');

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


bClear.onclick = () => clearIt();

b7.onclick = () => handleNumInput('7');
b8.onclick = () => handleNumInput('8');
b9.onclick = () => handleNumInput('9');
b4.onclick = () => handleNumInput('4');
b5.onclick = () => handleNumInput('5');
b6.onclick = () => handleNumInput('6');
b1.onclick = () => handleNumInput('1');
b2.onclick = () => handleNumInput('2');
b3.onclick = () => handleNumInput('3');
b0.onclick = () => handleNumInput('0');
bDecimal.onclick = () => handleNumInput('.');


bMultiply.onclick = () => handleOpertion('X');
bDivide.onclick = () => handleOpertion('÷');
bSubtract.onclick = () => handleOpertion('-');
bAdd.onclick = () => handleOpertion('+');

bEquals.onclick = () => equals();
bDelete.onclick = () => deleteIt();





function display() {
    viewPort.innerHTML = `${currNum} ${operation} ${nextNum}`

}

function clearIt() {
    currNum = '';
    nextNum = '';
    operation = '';
    viewPort.innerHTML = '';

}

function deleteIT() {
    if (currNum !== Number(currNum)){
        currNum = currNum.split('');
        currNum.pop();
        currNum.join('')
        viewPort.innerHTML = 'currNum';

    }
}


function handleNumInput(input) {

        if (currNum !== Number(currNum)) { //if currNum is a string still
            currNum += input;
            viewPort.innerHTML = currNum;
        }
        else { //if we've already got an operation chosen
            nextNum += input;
            viewPort.innerHTML = nextNum;
        }
        
    
}

function handleOpertion(input) {
    if (currNum !== Number(currNum)) {
        operation = input;
        currNum = Number(currNum);
        viewPort.innerHTML = operation;

        
}
    else {
        nextNum = Number(nextNum);
        equals(input);
    }
}


function multiply(diffButton) {
    nextNum = Number(nextNum);
    currNum *= nextNum;
    viewPort.innerHTML = currNum;
    nextNum = '';
    if (diffButton) operation = diffButton;
    else if (!diffButton) operation = '';

}

function divide(diffButton) {
    nextNum = Number(nextNum);
    currNum /= nextNum;
    viewPort.innerHTML = currNum;
    nextNum = '';
    if (diffButton) operation = diffButton;
    else if (!diffButton) operation = '';

}

function subtract(diffButton) {
    nextNum = Number(nextNum);
    currNum -= nextNum;
    viewPort.innerHTML = currNum;
    nextNum = '';
    if (diffButton) operation = diffButton;
    else if (!diffButton) operation = '';

}

function add(diffButton) {
    nextNum = Number(nextNum);
    currNum += nextNum;
    viewPort.innerHTML = currNum;
    nextNum = '';
    if (diffButton) operation = diffButton;
    else if (!diffButton) operation = '';

}

function equals(diffButton) {
    if (operation === 'X') multiply(diffButton);
    if (operation === '÷') divide(diffButton);
    if (operation === '-') subtract(diffButton);
    if (operation === '+') add(diffButton);
}
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
        // page relo