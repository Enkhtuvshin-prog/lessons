const display = document.getElementById('calc');
const numbersBtn = document.querySelectorAll('.numbers');
const operatorBtn = document.querySelectorAll('.operator');
console.log(operatorBtn);
const equal = document.getElementById('result');
let firstNum = null;
let secondNum = null;
let uildel = null;
let result = 0;



 //number

 numbersBtn.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const value = event.target.innerText;
        console.log(value);
        display.value += value;
    });
 });



 //opr

 operatorBtn.forEach((btn)=>{
    btn.addEventListener('click', (ev)=>{
        uildel =  ev.target.innerText;
        firstNum = display.value;
        display.value = "";

    })



    // btn.addEventListener("click", (ev)=>{
    //  uildel = ev.target.textContent;
    //  firstNum = display.value;
    //  console.log(firstNum);
    //  display.value = "";
    // });
 });

 
 //add
 function add(a,b){
    return a + b;
 }

 //sub
 function sub(a,b) {
    return a-b;
 }


 //div 
 function div( a, b) {
    return a/b;
    // console.log(a/b);
 }
//  let a = div(9, 3)

 //mul 
 function mul(a,b) {
    return a*b;
 }


 //uildel
 function operator() {
    secondNum = display.value;
    console.log("seondnum", secondNum);
    if(firstNum && secondNum && uildel){
        console.log("biylesen");
        switch(uildel){
           case "+": return add(parseFloat(firstNum), parseFloat(secondNum));
           case "-": return sub(parseFloat(firstNum), parseFloat(secondNum));
           case  "/": return div(parseFloat(firstNum), parseFloat(secondNum));
           case "*": return mul(parseFloat(firstNum), parseFloat(secondNum));
            default: break;
        }
    }
 }


 //equal result
 equal.addEventListener("click",()=>{
    result = operator();
    display.value = result;
 });

 //AC
 const clr= ()=>{
    display.value = '';
 }


