// function hi(){
//     console.log("Hello pinecone");
// }
// function sainuu(name){
//     console.log("hello " + name)
// }
// function add(a, b){
//     return a+b;
// }
// function huwaah(a, b){
//     return a/b;
// }
// function urjver(a, b){
//     return a*b;
// }

// hi();
// sainuu("Anu");
// let c = add(4, 7);
// console.log("C = " + c);
// let x = huwaah(15, 5);
// console.log("X = " + x);
// let y = urjver(15, 5);
// console.log("y = " + y);

// //func
// let t = (num) =>{
//     return num*num;
// };

// console.log(t(5))
// funct zohioh
function max(a, b){
    if(a>b) return a;
    else if(a<b) return b;
    else return "tentsuu"

}
let max_utga = max(2,4)
console.log(`max utga: ${max_utga}`);

//2bodlogo
function num(a, x){
    for(i = 0; i < x.length; i++){
        if(a==x[i]) return i;
    }
    return -1;
}
let y = num(2, [1, 2, 3, 4, 6, 8]);
console.log(y)

//3 bodlogo
function text(x, y){
    for(n =0; n < y.length; n++){
        if(x==y[n]) return n;
    }
    return -1;
}
let q = text( "l", ['h', 'e', 'l', 'l', 'o', 'h', 'l']) ;
console.log(q)

 // 4 bodlogo
 function random(a, b){
    let min, max;
    if(a>b) {
        max = a;
        min = b;
    }
    else {
        max = b;
        min = a;
    }
    return Math.round(Math.random()*(max-min)+min)
 }
 let z = random(2, 9)
 console.log(z)

 // 6 bodlogo
//  function sum(r, n){
//     for(i=0; i<n.length; i++){
//         r+=n[i]
//     }
//     return r;
//  }
//  let e = sum(0, [5, 7, 10, 34, 6, 16]);
// console.log(e);
// 5 bodlogo
function sum(r, q, n){
    for(i=0; i<n.length; i++){
       q = Math.round(r+=n[i]/n.length)
    }
    return q;
 }
 let e = sum(0, 0, [5, 7, 10, 34, 6, 16]);
console.log(e);
//7 bodlogo

// 8 bodlogo
function uppCase(c, v){
    for(i=0; i<c.length; i++){
        v =v + c[i].toUpperCase() + ' ';
    }
    return v;
}
let x = uppCase(['green', 'red', 'Hello'], ' ');
console.log(x);
//9 bodlogo
 function lowCase( c, d){
     for(i=0; i<c.length; i++){
         d = d + c[i].toLowerCase() + ' ';
        }
        return d;
 }
 let k =lowCase(['Gray', 'iroMan', 'SPIdERMan'], '') 
 console.log(k);

 //7 bodlogo anhni too oloh

 function primeN(a){
    if(a===2){
        return 2;
    } else{
        for(let x=2; x<a; x++){
            if(a%x === 0){
                return false
            }
            return true;
        }
        }
    }
 let b = primeN(67);
 console.log(b);

// tegsh sondgoi too ologch
function evenOdd(a,  even, odd){
    for(i=0; i<a.length; i++){
        if(a[i]%2 ===0){
             even = even + a[i]+ ' ';
             
            }
            else if (a[i]%2 !== 0){
                odd = odd + a[i]+ " ";
            }
        }
        return odd;
        return even;
}
let c = evenOdd([2, 5, 4, 6, 7, 11, 22], [], []);
console.log(c);

// array sorter
// function filterM(a){
//     let v = a.sort();
//     return v;
// }
// let s = filterM([4, 32, 2, 5, 8, -10, 20, 1, 0, -20]);
// console.log(s);
 
// array sorter
// const arr = [3, 1, 4, 1, 5, 9];
// const compareFn = (a, b) => (a > b ? -1 : 0);
// arr.sort(compareFn);
// console.log(arr)

let arr1 =[4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
let s = (a, b) => (a<b ? -1:0);
arr1.sort(s);
console.log(arr1)

// tip

