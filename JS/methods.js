//methods
// function carS(carBrands){
//     let brands = [];
//     for(i=0; i<carBrands.length; i++){
//         if(carBrands[i][0].charAt(0)  == 'A'){
//         brands.push(carBrands[i])
//         }
//     }
//     return brands;
// }
// let n = prompt(" Ta useg oruulna ")
// let x = carS([["Aston Martin Lagonda Ltd", "UK", 2016],
//     ["Audi", "Germany", 2016],
//     ["BMW", "Germany", 2016],
//     ["Chevrolet", "USA", 2016],
//     ["Dodge", "USA", 2016],
//     ["Ferrari", "Italy", 2016],
//     ["Honda", "Japan", 2016],
//     ["Jaguar", "UK", 2016],
//     ["Lamborghini", "Italy", 2016]
//     ]);
//     console.log(x);
//     // console.table(x);
// // 2 bodlogo
//     function car(carCountry){
//         let country = [];
//         for(i=0; i<carCountry.length; i++){
//             if(carCountry[i][1]  == 'USA'){
//             country.push(carCountry[i])
//             }
//         }
//         return country;
//     }
//     let y = car([["Aston Martin Lagonda Ltd", "UK", 2016],
//         ["Audi", "Germany", 2016],
//         ["BMW", "Germany", 2016],
//         ["Chevrolet", "USA", 2016],
//         ["Dodge", "USA", 2016],
//         ["Ferrari", "Italy", 2016],
//         ["Honda", "Japan", 2016],
//         ["Jaguar", "UK", 2016],
//         ["Lamborghini", "Italy", 2016]
//         ]);
//         console.log(y);
//  jishee       
        // let arrI = [4, 2, 34, 4, 1, 12, 1, 4];
        // let arrC = [];
        // let arrTemp = []
        // for(let g=0; g < arrI.length; g++){
        //    if(arrI[g] in arrTemp) {
        //       arrC.push(arrI[g]);//4
        //       console.log("davhardsan:", arrI[g]);
              
        //    }
        //    else {
        //       arrTemp.push(arrI[g]);//4,2,34
        
        //    }
        // }
        // console.log(arrTemp)
        
 // 3 bodlogo
  function mashin(carBrands) {
    // let arrTemp = [];
    let arrCountry = [];
    for(i=0; i<carBrands.length; i++){
        arrCountry.push(carBrands[i][1]);
        // if(carBrands[i][1] == arrCountry[i]){
        //     console.log(arrCountry[i])
        // }

    } 
    let uniqueCountry = [];
    for(let i=0;i<arrCountry.length; i++){
        if(!uniqueCountry.includes(arrCountry[i])){
            uniqueCountry.push(arrCountry[i]);
        }
    }
    console.log(uniqueCountry);
    let cntArray=[];
    for(let i=0;  i<uniqueCountry.length; i++){
        counter = 0;
        for(let j=0; j<arrCountry.length; j++){
            if(uniqueCountry[i] == arrCountry[j]){
                counter++;
            }
        }
        cntArray.push(`${uniqueCountry[i]}:${counter}`);
    }
    return cntArray;
    // return arrCountry;
  }
  let z = mashin([["Aston Martin Lagonda Ltd", "UK", 2016],
  ["Audi", "Germany", 2016],
  ["BMW", "Germany", 2016],
  ["Chevrolet", "USA", 2016],
  ["Dodge", "USA", 2016],
  ["Ferrari", "Italy", 2016],
  ["Honda", "Japan", 2016],
  ["Jaguar", "UK", 2016],
  ["Lamborghini", "Italy", 2016]
  ]);
  console.log(z.join(", "))


 // shopping cart
//  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// const shoppCart = shoppingCart.unshift('Meat');
// console.log(shoppCart);
//  console.log(shoppingCart);
//  const shoppPush = shoppingCart.push('Sugar');
//  console.log(shoppingCart);
//  const shoppDelete = shoppingCart.splice(4, 1);
//  console.log(shoppingCart)
//  const  shoppChange = shoppingCart.splice(3, 1, 'Green Tea');
//  console.log(shoppingCart);
// // reverse a number
// const numberS = [4, 5, 3, 6, 1];
// console.log('reverse number:', numberS.reverse());
// //parameterize a string
// const textT =["This", 'is' ,'Where', 'I', "Begin"];
// console.log(textT.join('-'))
// 6 bodlogo
// const q =["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай",  "Бальбийгомбо", "Баатар" ];
// const line =q.splice(8, 0, 'Tsetseg', 'Nergui')
// console.log(q);
// const queueLine = q.slice(0, 10);
// console.log(queueLine)
//8 bodlogo
// let r= [2, 4, 6, 7, 8, 5, 1]

// const index = r.indexOf( 6);
// if (index > -1) { // only splice array when item is found
//   r.splice(index, 1); // 2nd parameter means remove one item only
// }

// console.log(r); 
// 9 bodlogo
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a - b);
arr.sort(compareFn);
console.log(arr);