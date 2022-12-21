const calc = document.getElementById('calc');
console.log(calc);
const calculator = document.getElementsByTagName('form')[0]
console.log(calculator);


 // Function that display value
 function dis(val) {
    calc.value += val
}

let dataNumber =(event) =>{
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
       return calc.value += event.key;
    //    console.log(calc.value += event.key );
}

let  cal = calculator;
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = calc.value
        console.log(x);
        solve();
    }
}

// // Function that evaluates the digit and return result
function solve() {
    let x = calc.value
    console.log(x);
    let y = Math.calculator(x)
    calc.value = y
}

// // Function that clear the display
function clr() {
    calc.value = ""
}

// let scope = {
//     a: 3,
//     b: 4
// }
// math.evaluate('a * b', scope)