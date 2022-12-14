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
    viewPort.innerHTML = `${currNum} ${operation} ${nextNum}`;

}

function clearIt() {
    currNum = '';
    nextNum = '';
    operation = '';
    display();

}

function deleteIT() {
    if (currNum !== Number(currNum)){
        currNum = currNum.split('');
        currNum.pop();
        currNum.join('')
        display();
    }
}


function handleNumInput(input) {

        if (operation === '') { //if operation exists
            currNum += input;
            display();
            }
        else { //if we've already got an operation chosen
            nextNum += input;
            display();
        }
        
    
}

function handleOpertion(input) {
    if (operation === '') {
        operation = input;
        currNum = Number(currNum);
        display();
        
}
    else {
        currNum = Number(currNum);
        nextNum = Number(nextNum);

        equals(input);
    }
}


function multiply(diffButton) {
    nextNum = Number(nextNum);
    currNum *= nextNum;
    currNum = currNum.toString();
    nextNum = '';
    if (diffButton) operation = diffButton;
    else if (!diffButton) operation = '';
    display();

}

function divide(diffButton) {
    nextNum = Number(nextNum);
    currNum /= nextNum;
    nextNum = '';
    if (diffButton) {
        operation = diffButton;
        equals()
    }
    else if (!diffButton) operation = '';
    currNum = currNum.toString();

    display();

}

function subtract(diffButton) {
    nextNum = Number(nextNum);
    currNum -= nextNum;
    currNum = currNum.toString();
    nextNum = '';
    if (diffButton) {
        operation = diffButton;
        equals()
    }
    else if (!diffButton) operation = '';
    display();

}

function add(diffButton) {
    nextNum = Number(nextNum);
    currNum += nextNum;
    currNum = currNum.toString();
    nextNum = '';
    if (diffButton) {
        operation = diffButton;
        equals()
    }
    else if (!diffButton) operation = '';
    display();

}

function equals(diffButton) {
    currNum = Number(currNum);
    nextNum = Number(nextNum);

    if (operation === 'X') multiply(diffButton);
    if (operation === '÷') divide(diffButton);
    if (operation === '-') subtract(diffButton);
    if (operation === '+') add(diffButton);
}