const display = document.querySelector('.display');
const inputDisplay = document.querySelector('.inputedText');
const nums= document.querySelectorAll('.btn-number');
const operators= document.querySelectorAll('.btn-operator');
const Equals = document.querySelector('.equals');
const answerDisplay = document.querySelector('.answerText');
const Delete = document.querySelector('.Backspace');
const SpecialOutput = document.querySelector('.special-functions');
const Clear = document.querySelector('.Clear');
const On = document.querySelector('#switchOn');
const degree = document.querySelector('#deg');
const sin = document.querySelector('#sin');
const cos = document.querySelector('#cos');
const tan = document.querySelector('#tan');
const exponent = document.querySelector('#exponent');
const square = document.querySelector('#square');
const squareRoot = document.querySelector('#square-root');
const log = document.querySelector('#log');
const answer = document.querySelector('#answer');




On.addEventListener('click', () => {
   answerDisplay.innerText = '0';
   inputDisplay.innerText = ""
    SpecialOutput.innerText = ""
   
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        inputDisplay.innerText += operator.innerText;  
    })    
})

nums.forEach(num => {
    num.addEventListener('click', () => {
        inputDisplay.innerText += num.innerText;
    })
    
})

Equals.addEventListener('click', () => {
    answerDisplay.innerText = eval(inputDisplay.innerText)
})

Delete.addEventListener('click', () => {
    inputDisplay.innerText = inputDisplay.innerText.substr(0, inputDisplay.innerText.length - 1)
})

Clear.addEventListener('click', () => {
    inputDisplay.innerText = ""
    answerDisplay.innerText = ""
    SpecialOutput.innerText = ""
})

sin.addEventListener('click', () => {
    inputDisplay.innerText = Math.sin(inputDisplay.innerText * Math.PI / 180);
    SpecialOutput.innerText = "sin"
})

cos.addEventListener('click', () => {
    inputDisplay.innerText = Math.cos(inputDisplay.innerText * Math.PI / 180);
    SpecialOutput.innerText = "cos"
})

tan.addEventListener('click', () => {
    inputDisplay.innerText = Math.tan(inputDisplay.innerText * Math.PI / 180);
    SpecialOutput.innerText = "tan"
})

deg.addEventListener('click', () => {
     inputDisplay.innerText = (inputDisplay.innerText) * (180/Math.PI);
})

exponent.addEventListener('click', () => {
    let x = inputDisplay.innerText;
    let exp = 1;
    for (let i = x; i > 1; i--) {
       exp *= i;
       answerDisplay.innerText = exp;
        SpecialOutput.innerText = "!"
    }
})

square.addEventListener('click', () => {
    answerDisplay.innerText = Math.pow(inputDisplay.innerText, 2);
    inputDisplay.innerText += "^2"
})

squareRoot.addEventListener('click', () => {
    answerDisplay.innerText = Math.sqrt(inputDisplay.innerText);
})

answer.addEventListener('click', () => {
   
    inputDisplay.innerText = answerDisplay.innerText
})
})
