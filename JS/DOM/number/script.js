const btnAgain = document.getElementsByClassName('btn again')[0];
console.log(btnAgain);
const number = document.getElementsByClassName('number')[0];
const guess = document.getElementsByClassName('guess')[0];
const btnCheck = document.getElementsByClassName('btn check')[0];
const body = document.getElementsByTagName('body')[0]
const score = document.getElementsByClassName('score')[0];
const highscore = document.getElementsByClassName('highscore')[0];
// // btnCheck.addEventListener('click', ()=>{
//     number.innerHTML = Math.floor(Math.random() * 20);
// })

let onoo = 20;
let success = 0;
let guessNumber = () =>{
    // let  x =  (number.innerHTML = Math.floor(Math.random()*21));
    let  x =  (number.innerHTML = 13);
    let e= guess.value;
    if(e==x){
        alert("Ta zuw taalaa ");
        body.style.backgroundColor = '#60b347';
        onoo++
        success++
    } else if(x<e){
        alert(' ih too bna');
        body.style.backgroundColor = '#222';
        onoo --;

    }else{
        alert('baga too bna');
        body.style.backgroundColor = '#222';
        onoo --;
    }
    score.innerHTML = onoo;
    if(onoo==0){
        alert('ta hojigdloo');
    }
    highscore.innerHTML = success;
}
btnCheck.addEventListener('click', guessNumber);
// btnCheck.addEventListener('click', x)
// console.log(x);
let start = () =>{
    highscore.innerHTML = success;
    console.log(highscore.innerHTML);
    onoo = 20;
    x = '?';
    console.log(x);
    console.log(onoo);
}
btnAgain.addEventListener('click', start);

