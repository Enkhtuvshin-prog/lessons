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
let arr = [ 43, 56, 23, 89, 88, 90, 99, 11, 652, 15, 290];
let sumN =0;
for(let d = 0; d<= arr.length-1; d++){
   sumN += arr[d];
}
console.log(sumN);
    
arr.pop();
console.log(arr)
arr.push(28);
console.log(arr)
arr.unshift(100)
console.log(arr)
arr.shift()
console.log(arr)

//  //simple array -1
 let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple',   'IBM', 'Oracle', 'Amazon'];
 console.log(itCompanies)
 for(let i=0; i <= itCompanies.length-1; i++){
    console.log(itCompanies[i].length);
 }
 for( n=0; n <= itCompanies.length-1; n++){
    console.log(itCompanies[n]);
}
 for( a=0; a <= itCompanies.length-1; a++){
    console.log(itCompanies[a].toUpperCase());
}

 console.log("facebook index:", itCompanies.indexOf("Facebook"))
console.log(itCompanies[0]);
 console.log(itCompanies[Math.floor(itCompanies.length/2) ]);
 console.log(itCompanies[itCompanies.length - 1] );
 console.log(itCompanies + " " + 'зэрэг мэдээллийн технологийн томоохон компаниуд.')
//  console.log(itCompanies[0][0]);
//  console.log(itCompanies[2].toUpperCase());

let cutX = itCompanies.slice(0, 3 );
console.log(cutX);
let cutL = itCompanies.slice(4, 7)
console.log(cutL);
let cutA = itCompanies.slice (3, 5)
console.log(cutA)
console.log(itCompanies)
itCompanies.shift();
console.log(itCompanies)
itCompanies.pop();
console.log(itCompanies);
 let data = ['Засгийн ', 'газарт', '6,4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', ' мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 
 'байдалд', 'ийм', 'их', 'хэмжээний ', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын',
 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж',  'байна'];
 let textN = 0;
 while (textN <= data.length - 1 ) {
if (data[textN][0] === 'н' ) {
console.log(data[textN]);
}
textN++;
}


let arrNumber = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let evenN = [], oddN = [];
for( let b = 0; b < arrNumber.length; b++){
   if(arrNumber[b] % 2 ===0){
      evenN.push(arrNumber[b]);
   } else if (arrNumber[b] %2 !== 0){
      oddN.push(arrNumber[b]);
   }
}
console.log(evenN);
console.log(oddN);

let x = [1, 2, 3, 4, 5]
let q = '';
for(let y = 0; y < x.length; y++){
    q= q + ' ' + x[y]
   console.log(q);
}

let arr1 =  [3, 45, 23, 78,34], 
       arr2 = [4, 2, 34, 4, 12,1];
let urjver = [];
for(let e=0; e<arr1.length; e++){
   urjver[e] = arr1[e]*arr2[e]
} 
console.log(urjver)

// ugugdsun massiv
let arrI = [4, 2, 34, 4, 1, 12, 1, 4];
let arrC = [];
let arrTemp = []
for(let g=0; g < arrI.length; g++){
   if(arrI[g] in arrTemp) {
      arrC.push(arrI[g]);//4
      console.log("davhardsan:", arrI[g]);
      
   }
   else {
      arrTemp.push(arrI[g]);//4,2,34

   }
}
console.log(arrTemp)

//duplicate counter
