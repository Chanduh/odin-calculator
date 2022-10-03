const cache = [];



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

b7.onclick = () => handleInput('7');
b8.onclick = () => handleInput('8');
b9.onclick = () => handleInput('9');
b4.onclick = () => handleInput('4');
b5.onclick = () => handleInput('5');
b6.onclick = () => handleInput('6');
b1.onclick = () => handleInput('1');
b2.onclick = () => handleInput('2');
b3.onclick = () => handleInput('3');
b0.onclick = () => handleInput('0');
bDecimal.onclick = () => handleInput('.');


bMultiply.onclick = () => handleInputOpr('X');
bDivide.onclick = () => handleInputOpr('÷');
bSubtract.onclick = () => handleInputOpr('-');
bAdd.onclick = () => handleInputOpr('+');

bEquals.onclick = () => operateIt();
bDelete.onclick = () => deleteIt();

///////////////////////////////////

viewPort.innerHTML = `${cache[0]} ${cache[1]} ${cache[2]}`;




    function handleInput(input) {

        if (input === Number(input) && cache.length === 2) {// input is number
                let temp = '';
                temp = cache[2] // copy the curr string
                cache.pop(); // remove the curr item
                cache.push(temp+input) // repace it with the concat vers
            }
            else if (input === Number(input) && cache.length === 1) {
                let temp = '';

                temp = cache[0] // copy the curr string
                cache.pop(); // remove the curr item
                cache.push(temp+input) // repace it with the concat vers
            }
            else {
                cache.push(input)
            }
    }    
    
    function handleInputOpr() {

        
        if (cache.length === 3) { // if theres a nmber at curr
            cache[2] = Number(cache[2]); // curr = number not a string now
            operateIt(); // call operate, should operate and acc off the array
            cache.push(input); // new opearotr should be at [1] now
        }

        else if (cache.length === 2) { // theres nothing at curr, but an operator already selected
            cache.pop(); //remove old operator
            cache.push(input); // replace operator with input
        }
        else { // acc only as input
            cache[0] = Number(cache[0]); // make acc a number not a string
            cache.push(input); // push operator to cache at [1];

        }
    }

    function operateIt() {
        if (!cache[2]) return; // if thersr nothing to operate just ignore function invoction
        cache[2] = Number(cache[2]); // make curr a number not a string 

        if (cache[1] === 'X') cache[0] = cache[0] * cache[2];
        if (cache[1] === '÷') cache[0] = cache[0] / cache[2];
        if (cache[1] === '-') cache[0] = cache[0] - cache[2];
        if (cache[1] === '+') cache[0] = cache[0] + cache[2];

        cache.pop(); // remove the old operator and old current number 
        cache.pop();
    }

    function deleteIt() {
        if (cache[1] && cache[2] === Number(cache[2])) { // if equals or an operator has already been pressed
            return; // then just ignore this function
        }
        else if (cache[1] && cache[2] !== Number(cache[2])) { // if curr is still a string
            cache[2] = cache[2].toString().split('') // curr is now an array
            cache[2].pop(); // last number deleted
            cache[2] = cache[2].join(''); // its a string again
        }
    }

    function clearIt() {
        while (cache.length) { // delete everything inside of cache
	        cache.pop();
        }
    }       