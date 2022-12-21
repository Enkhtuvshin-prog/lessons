const calc = document.getElementById('calc');
console.log(calc);
const numberBtn = document.getElementsByClassName('numbers');
console.log(numberBtn);
const operator = document.getElementsByClassName('operator');
console.log(operator);
let inp = calc.value;
// let input = [];
let numberData=(e) =>{
    inp += e.textContent;
    calc.setAttribute("value", inp);
}
console.log();
console.log(inp.length);

// let calculator = (inp) =>{
//     let too =[];
//     let oper =[];
//     for(i=0; i<inp.length; i++ ){
//         if(Number(inp[i])){
//             too.push(inp[i])
//         }else{
//             oper.push(inp[i])
//         }
//     }
//     return oper;
// }
// console.log(too);
// console.log(oper);


// let result;

// using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);
let clr =() =>{
    calc.value ="";
}