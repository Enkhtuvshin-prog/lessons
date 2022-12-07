//1-10 huretl hewleh
// let count = 1;
// while (count <= 10) {
// console.log(count);
// count = count + 1;
// }
// let c =0
// while( c<=10){
//     if(c %2 !== 0){
//         console.log(c);
//     }
//     c = c + 1;
// }
// let a = 0;
// while( a<=10){
//     if(a %2 === 0){
//         console.log(a);
//     }
//     a = a + 1;
// }
// let n = 100;
// let sum = (n * (n+1))/2;
// console.log(sum);
// sum = 0;
// while(n>0) {
//     sum = sum + n;//100 + 99 
//     n = n-1//99 98
// }
// console.log(`100 hurtelh toonii niilber: ${sum}`)
// n = 1;
// sum = 0
// while(n<=100) {
//     sum += n;
//     n += 1 //
// }
// console.log(`100 hurtelh toonii niilber: ${sum}`);

// //5 bodlogo
// let y = prompt("Ta toogoo oruulna uu?"); 
// let i = 1;
// let niilBer = 0;
// while(i<=y){
//     console.log(i)
//     niilBer +=i
//     i++
// } 
// console.log(`y hurtelh toonii niilber: ${niilBer}`);

// // 6 bodlogo
// let aToo = prompt( "Ta toogoo oruulna uu?") ;
// let isPrime = true;
// if(aToo ===2){
//     console.log("Mun")
// } else{
//     let i = 2;
//     while( i < aToo){
//         if ( aToo%i === 0){
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
//     if (isPrime){
//         console.log("Mun")
//     } else {
//         console.log("bish");
//     }
// }
  
//7 bodlogo


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

//10 bodlogo
// let x =0;
// let ax =  prompt("Ta toogoo oruulna uu?");
// let sumAX = 0;
// while(x<= ax){
//     if(x % 2 !==0){
//         console.log(x);
//     }
//     x++;  
//     if((x % 2!==0)) {

//         sumAX += x;
//     }
// }
// console.log( `sumAX hurtelh sondgoi toonuudin niilber: ${sumAX}`);

// //11 bodlogo
// let z =0;
// let az = prompt("Ta toogoo oruulna uu?");
// let sumAZ = 0;
// while(z<= az){
//     if(z % 2 ==0){

//         console.log(z);
//     }
//     z++;  
//     if((z % 2==0)) {

//         sumAZ += z;
//     }
//     }
// console.log( `sumAX hurtelh sondgoi toonuudin niilber: ${sumAZ}`);


// //12 bodlogo
// let u = 89776;
// // let len = u.lenght
// let urwuuT = 0;
// let unit = 0;
// while(u!==0){
//     unit = u % 10;
//     urwuuT = urwuuT * 10   + unit;
//     u = Math.floor(u/10);
// }
// console.log(urwuuT)
//  // 0-100 hurtelh tegsh too
// // let tegshToo = 0;
// // while(tegshToo<=100){
// //     if(tegshToo % 2 === 0){
// //         console.log(tegshToo)
// //     }
// //     tegshToo = tegshToo + 1;
// // }

// // 13 bodlogo
//  let num =764321;
//  let p = 0, m =0, s=0;
//  while(num !== 0){
//     p = num%10;
//     s = s*10 + p
//     if(p<10){
//         m +=p;
//     }
//     num = Math.floor(num/10);
//  }
//  console.log(s);
//  let ug = " ";

//  while(s !== 0){
//     p = s%10;
//     switch(p) {
//         case 0: {ug += "тэг " ; break}
//         case 1: {ug += " " +  " Нэг" ; break}
//         case 2: {ug += " " + "Хоёр " ; break}
//         case 3: {ug += " " + " Гурав" ; break}
//         case 4: {ug +=" " +  "Дөрөв" ; break}
//         case 5: {ug += " " + " Тав" ; break}
//         case 6: {ug += " " + "Зургаа "; break}
//         case 7: {ug += " " + " Долоо" ; break}
//         case 8: {ug += " " + " Найм" ; break}
//         case 9: {ug += " " + " Ес" ; break}
//     }
//     s = Math.floor(s/10);
//  }
//  console.log(ug);
 


// number digits
// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;
  
//     while (n / 10 >= 1) {
//         tsiper
//       n /= 10;
//       ++count;
//     }
  
//     return count;
//   }
  
//   console.log(digits_count(7543321));
  
//   console.log(digits_count(45798));

// guess the number

let i =0;
while (i<10){
    console.log(i);
    i = i + 3;
}
// pyramid 
// let rows = parseInt( prompt("Ta toogoo oruulna uu"))
//  for (let z = 0; z<rows ; z++);{
//     let output = " ";
//     for(let d =0; d<rows-z; d++ ) output += ' ';
//     for(let g =0; g<=z; g++ ) output += '*';
//     console.log(output);
    
//  }
// pyramid
let b, d, j;
for(b = 1; b<=10; b++){
    let output =' ';
    for(d=1; d<= (10 -b); d++){
        output += ' ';
    }
            for (j = 1; j<=b; j++)
            {
               output =output + " " + ("*");
            }
            console.log(output)
}

// square

let q = 5;
let res = "";
for(let t=1; t<=q; t ++ ){
    for(let c =1; c <= q; c ++)
    {
        if(t === 1 || t === q || c ===1 || c===q){
            res += "*" ;
        }else{
            res = res + " ";
        }
    }
    res = res+ "\n"
}
console.log(res);

// number digits
let num = 7655999999999;
let count = 0;
while( num != 0){
    num = Math.floor(num/10);
    count ++
}
 console.log(count);

// ugiig urwuulj unshih
let text = "fghjk" ;
let l = text.length - 1;
let revText = ' ';
while(l >=0){
    revText = revText + text[l];
    l--;
}
console.log(revText);

// convert string
let ug = "Hello WORld"
let useg = " ";
// console.log(ug.length)
for (let q = 0; q < ug.length; q++){
    let code = ug.charCodeAt(q);
    if( code >= 65 && code <= 90 ){
        useg += String.fromCharCode(code + 32);
    } else if( code>= 96 && code<= 122 ){
        useg += String.fromCharCode( code -32);
    }
    else {
        useg += ug[q]
    }
}
console.log(useg )
 // fibonacci
let s = 8;
 let p = 0, a = 1, sumF;
 for (k = 0; k<=s; k++){
    console.log(p);
    sumF = p + a;
    p=a;
    a = sumF
 }
 console.log( sumF);

 //duplicate counter
 let n = 187653;
 let dup = 0;
 
