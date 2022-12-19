const btnAgain = document.getElementsByClassName('btn again')[0];
console.log(btnAgain);
const number = document.getElementsByClassName('number')[0];
console.log(number);
const guessNumber = document.getElementsByClassName('guess')[0];
// console.log(guessNumber);
// console.log(typeof(guessNumber));
const btnCheck = document.getElementsByClassName('btn check')[0];
console.log(btnCheck);

btnAgain.addEventListener('click', ()=>{
    number.innerHTML = Math.floor(Math.random() * 101);
})
 


// let inpNumber = () =>{
//     let a = parseInt(prompt('ta toogoo oruulna uu?'))
//     console.log(typeof(a));
//        guessNumber.value = a;
//        let n= typeof(guessNumber.value)
//        console.log(typeof(n));
//     if(  a<20 && a>=0 ){
//         alert('Zuw bna')
//     }else{
//         alert('Too oruulna uu?')
//     }
// }
// btnCheck.addEventListener('click', inpNumber);