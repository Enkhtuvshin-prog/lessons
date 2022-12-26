const screen = document.getElementById('calc');
console.log(calc);
const numberBtn = document.getElementsByClassName('numbers');
console.log(numberBtn);
const operator = document.getElementsByClassName('operator');
console.log(operator);
const equal = document.getElementsByClassName('btn-equal')[0];
console.log(equal);

numberBtn.forEach(element => {
    
});

// let inp = calc.value;
// // let input = [];
// let numberData=(e) =>{
//     inp += e.textContent;
//     calc.setAttribute("value", inp);
//     return inp;
// }


let clr =() =>{
    calc.value = " ";
}