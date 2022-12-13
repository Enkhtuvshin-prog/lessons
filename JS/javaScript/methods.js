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
// RD
let x = 'АМ02022108';
function rd(registor){
    let result = ''
    let rdUseg =typeof(registor.slice(0, 2));
    let rdNumber = registor.substring(2, 10);
    if(registor.length === 10  &&  rdUseg == 'string'  && Number(rdNumber) ){
        result = true;
    } else{
        result = false;
    } 
    return result;
}
let rdugaar = rd(x);
console.log(rdugaar);
// tursun udur oldog
let birth =(birthDay) =>{
    let day;
    let bDay = birthDay.slice(6, 8);
    if(bDay<=31){
        day = bDay;
    } else{
        day = 'RD buruu bna';
    }
    return  day;
}
let tursunUdur = birth(x);
console.log(tursunUdur);
 //aimag oldog
 let usegS = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'У', 'Ц' ];
 let aimagS = ['Аrkhangai', ' Баян-Өлгий', 'Баянхонгор', 'Булган', 'Говь-Алтай', 'Дорноговь', 'Дорнод', 'Дундговь', 'Завхан', 'Өвөрхангай', 'Өмнөговь', 'Сүхбаатар', 'Сэлэнгэ', 'Төв', 'Увс', 'Ховд', 'Хөвсгөл', 'Хэнтий', ' Дархан-Уул', 'Орхон', 'Говьсүмбэр', 'Улаанбаатар', 'Улаанбаатар' ];
 let birthRegion = (region, useg, aimag) =>{
    //  console.log(useg[0])
    //  console.log(region.slice(0, 1));
    let tursunRegion = [];
    let firstUseg = region.slice(0, 1)
    for(i=0; i<useg.length; i++){
        if(firstUseg == (useg[i])){
            tursunRegion = aimag[i];
        } 
        else if(!useg.includes(firstUseg)) { 
            tursunRegion = 'RD buruu bna';
        }
    }
    return  tursunRegion;
 }
 let tursunAimag = birthRegion(x, usegS, aimagS );
 console.log(tursunAimag);
 
 // get regist info
 let registInfo =(registoR, useg, aimag) =>{
    let rdUseg = registoR.slice(0, 2),
        rdToo = registoR.slice(2, 10);
    let rd, birthregion, birthmonth, gender, birthYear;    
        if(registoR.length === 10 && typeof(rdUseg == 'string' && Number(rdToo))){
            rd = true;
        }else{
            rd = 'RD buruu bna'
        }
        console.log(`RD: ${rd}`);
        if(registoR[8]%2 == 0){
            gender = "Female";
        }else{
           gender = "Male";
        }
        console.log(`Gender: ${gender}`);
        for(i=0; i< useg.length; i++){
            if(rdUseg[0] == useg[i]){
                birthregion = aimag[i];
            } else if(!useg.includes(rdUseg[0])){
                birthregion = 'RD buruu bna'
            }
        }
        console.log(`Tursun aimag: ${birthregion}`);
        let month = rdToo.slice(2, 4),
            day = rdToo.slice(4,6);
        if(month[0]>1 && day<=31){
            birthYear = parseInt(rdToo.slice(0, 2))+ 2000;
            birthmonth = parseInt(month) - 20 + 'сар';
        }else{
            birthYear =parseInt(rdToo.slice(2, 4)) + 1900;
            birthmonth = month;
        }
        return birthYear + '.' + birthmonth + '.' + day;
 }
 let rdInfo = registInfo(x, usegS, aimagS);
 console.log(rdInfo);

 // palindromic ckecker
//  let b = y.split('');
//  let c = (a)=>{
//     let  c = [], d = [];
//     for(i=0; i<a.length; i++){
//        c = a.pop(a[i])
//        console.log(c)
//         d.push(c)
//     }
//     return d;

//  }
//  let palindromic = c(y);
//  console.log(palindromic);