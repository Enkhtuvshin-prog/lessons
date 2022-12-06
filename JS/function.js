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
let y = num(9, [1, 2, 3, 4, 6, 8]);
console.log(y)

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

 // 5 bodlogo
