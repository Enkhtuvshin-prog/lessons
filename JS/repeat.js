//1-10 huretl hewleh
let count = 1;
while (count <= 10) {
console.log(count);
count = count + 1;
}
let c =0
while( c<=10){
    if(c %2 !== 0){
        console.log(c);
    }
    c = c + 1;
}
let a = 0;
while( a<=10){
    if(a %2 === 0){
        console.log(a);
    }
    a = a + 1;
}
let n = 100;
let sum = (n * (n+1))/2;
console.log(sum);
sum = 0;
while(n>0) {
    sum = sum + n;//100 + 99 
    n = n-1//99 98
}
console.log(`100 hurtelh toonii niilber: ${sum}`)
n = 1;
sum = 0
while(n<=100) {
    sum += n;
    n += 1 //
}
console.log(`100 hurtelh toonii niilber: ${sum}`);

//5 bodlogo
 

// 6 bodlogo
let aToo = prompt( "Ta toogoo oruulna uu?") ;
let isPrime = true;
if(aToo ===2){
    console.log("Mun")
} else{
    let i = 2;
    while( i < aToo){
        if ( aToo%i === 0){
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime){
        console.log("Mun")
    } else {
        console.log("bish");
    }
}

// 8 bodlogo
let  f =6;
let  factrl = 1;
while (f>0){
    factrl = factrl * f
    f = f - 1
}
console.log(factrl)


//9 bodlogo
let t = 1234;
let niilber = 0, huvaagch = 10;
//  23
// 12 bodlogo
// 3%10 ==3
// 23%10 ==3\
while(t>=1) {//235
    niilber += t%10//5 +3 + 2
    t = Math.floor(t/10)//23
}
console.log(niilber);
//12 bodlogo
let u = 89776, huv = 10;
let urwuuT = 0;
while(u >= 1){
    urwuuT = urwuuT + " " + u%10;
    // console.log("urwuuT =", u%10)
    u = Math.floor(u/10);
}
console.log(urwuuT)

