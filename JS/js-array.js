//aaray
// let studentNames = ['boldo', 'dorjo', 'tsetsge', 'dulmaa'];
// let i = 0;
// while (i <= studentNames.length - 1 ) {
// if (studentNames[i][0] === 'd') {
// console.log(studentNames[i]);
// }
// i++;
// }
// let userBalance = [1000, 2000, 2500, 4000000]
//     let i = 0;
//     while (i < userBalance.length) {
//     userBalance[i] *= 1.15;
//     i++;
//     }
//     console.log(userBalance);
// Aaray of numbers
 
let studentAges = [10, 20, 15, 19, 18,19 ,19];
let i = 0;
let sum = 0;
while (i < studentAges.length) {
sum+=studentAges[i]
i++;
} 
let avarage = sum/studentAges.length
console.log(avarage);

// let arrayOfNumbers = [ 43, 56, 23, 89, 88, 90, 99, 11, 652, 15, 290];
// let max = 0;
// for( i = 0;  i<arrayOfNumbers.length; i++){
//     if(max < arrayOfNumbers[i]){
//         max =arrayOfNumbers[i]
//     // }else if(min > arrayOfNumbers[i]){
//     //     min = arrayOfNumbers[i]
//     }
// }
// console.log(max)
// let min = max;
// for( i = 0;  i < arrayOfNumbers.length; i++){
//     if(min > arrayOfNumbers[i]  ){
//         min = arrayOfNumbers[i]
//     }
// }
// console.log(min)

// // array ehend durin 1 too nemeh
// let arr = [ 43, 56, 23, 89, 88, 90, 99, 11, 652, 15, 290];
// arr.pop();
// console.log(arr)
// arr.push(28);
// console.log(arr)
// arr.unshift(100)
// console.log(arr)
// arr.shift()
// console.log(arr)
    
//  //simple array -1
 let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple',   'IBM', 'Oracle', 'Amazon'];
 console.log(itCompanies)
 for(let i=0; i <= itCompanies.length-1; i++){
    console.log(itCompanies[i].length);
 }
 for( n=0; n <= itCompanies.length-1; n++){
    console.log(itCompanies[n]);
}

 console.log("facebook index:", itCompanies.indexOf("Facebook"))
console.log(itCompanies[0]);
 console.log(itCompanies[Math.floor(itCompanies.length/2) ]);
 console.log(itCompanies[itCompanies.length - 1] );
 console.log(itCompanies[0][0]);
 console.log(itCompanies[2].toUpperCase());

