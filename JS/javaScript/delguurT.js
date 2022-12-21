//delguurin tailan
const data = [
    {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000 , casherId:1, date: '2022-11-01'},
    {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54000 , casherId:2, date: '2022-11-01'},
    {productName:"Zairmag", unitPrice:1000, amount: 28, totalPrice: 28000, casherId:1, date: '2022-11-01'},
    {productName:"Coffee", unitPrice:450, amount: 38, totalPrice: 17100, casherId:1, date: '2022-11-01'},
    {productName:"GreenTea", unitPrice:3000, amount: 40, totalPrice: 120000, casherId:1, date: '2022-11-01'},
    {productName:"CocaCola", unitPrice:4000, amount: 25, totalPrice: 100000, casherId:1, date: '2022-11-01'},
    {productName:"Sprite", unitPrice: 4300, amount: 60, totalPrice: 258000, casherId:1, date: '2022-11-01'},
    {productName:"Haribo", unitPrice:5000, amount: 18, totalPrice: 90000, casherId:1, date: '2022-11-01'},
    {productName:"Mentos", unitPrice:1500, amount: 45, totalPrice: 67500, casherId:1, date: '2022-11-01'},
    {productName:"Shoco", unitPrice:3000, amount: 58, totalPrice: 174000, casherId:1, date: '2022-11-01'},
    {productName:"Bonaqu", unitPrice:1800, amount: 60, totalPrice: 108000, casherId:1, date: '2022-11-01'},
    {productName:" Fanta", unitPrice:4300, amount: 80, totalPrice: 344000, casherId:1, date: '2022-11-01'},
    {productName:"Dirol", unitPrice:1000, amount: 18, totalPrice: 18000, casherId:1, date: '2022-11-01'},
    {productName:"Colcate", unitPrice:4500, amount: 18, totalPrice: 81000, casherId:1, date: '2022-11-01'},
    {productName:"PS oo", unitPrice:4000, amount: 40, totalPrice: 160000, casherId:1, date: '2022-11-01'},
    {productName:"Toson bal", unitPrice:400, amount: 40, totalPrice: 16000, casherId:1, date: '2022-11-01'},
    {productName:"Uzgen bal", unitPrice:800, amount: 40, totalPrice: 32000, casherId:1, date: '2022-11-01'},
    {productName:"Chihewch", unitPrice:20000, amount: 10, totalPrice: 200000, casherId:1, date: '2022-11-01'},
    {productName:"Tseneglegch", unitPrice:15000, amount: 15, totalPrice: 225000, casherId:1, date: '2022-11-01'},
    {productName:"Dewter", unitPrice:2000, amount: 35, totalPrice: 70000, casherId:1, date: '2022-11-01'},
    {productName:"Temdeglelin dewter", unitPrice:8000, amount: 40, totalPrice: 160000, casherId:1, date: '2022-11-01'},
    {productName:"Talh", unitPrice:2500, amount: 40, totalPrice: 100000, casherId:1, date: '2022-11-01'},
    {productName:"Kimchi", unitPrice:4000, amount: 40, totalPrice: 160000, casherId:1, date: '2022-11-01'},
    {productName:"Hiam", unitPrice:4000, amount: 20, totalPrice: 80000, casherId:1, date: '2022-11-01'},
    {productName:"Belen goimon", unitPrice:4000, amount: 40, totalPrice: 160000, casherId:1, date: '2022-11-01'},
    {productName:"Undug", unitPrice:500, amount: 80, totalPrice: 40000, casherId:1, date: '2022-11-01'},
    {productName:" Suu", unitPrice:4000, amount: 60, totalPrice: 240000, casherId:1, date: '2022-11-01'},
    {productName:"Tarag", unitPrice:4000, amount: 50, totalPrice: 200000, casherId:1, date: '2022-11-01'},
    {productName:"Iogurt", unitPrice:3200, amount: 40, totalPrice: 128000, casherId:1, date: '2022-11-01'},
];
//Niit Bor dun
function niitBor (totalSales){
    let sum = 0;
    for(i=0; i< totalSales.length; i++){
        sum +=totalSales[i].totalPrice;
    }
    return sum;
}
let totalBor = niitBor(data);
console.log(`Niit borluulalt: ${totalBor}`);
// Niit Bor baraani too
let sumNumber = 0;
let totalAmount = data;
for(i=0; i<totalAmount.length; i++){
    sumNumber += totalAmount[i].amount
}
console.log(`Niit bor baraani too hemjee: ${sumNumber}`);
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a - b);
arr.sort(compareFn);
console.log(arr);

//ХИ зарагдсан 5 бараа
let mostSales = [];
let saleTemp = [];
let saleS = () =>{
    for(i=0; i<data.length; i++){
        mostSales.push(data[i].totalPrice);
    }
    const saleSort = ((a, b) =>b - a);
        mostSales.sort(saleSort);
        saleTemp = mostSales.slice(0, 5);
        console.log(saleTemp);
    let productNer = [];
    for(j=0; j<saleTemp.length; j++){
        for(n=0; n<data.length; n++){
            if(saleTemp[j] === data[n].totalPrice){
                productNer.push(data[n])
            }
        }
    }
    return productNer.slice(0,5);
}
let mostBor= saleS (data);
console.log('ХИ зарагдсан бараа БО:', mostBor)

//ХБ зарагдсан 5 бараа БО
let leastArr = [];
leastArr = mostSales.slice(-5);
let leastBaraa = [];
// console.log(leastArr);
function  leastBO(leastSale){
    for(i=0; i<leastArr.length; i++){
        for(j=0; j<leastSale.length; j++){
            if(leastArr[i] === leastSale[j].totalPrice){
                leastBaraa.push(leastSale[j])
            }
        }
    }
    return leastBaraa;

}
let leastBor =leastBO(data);
console.log('ХА зарагдсан 5 бараа БО', leastBor);

//ХИ зарагдсан 5 бараа bor.too hemjee;
function  mostAmount(tooHemjee){
    let sumAmount = [];
    let arrAmount =[];
    for(i=0; i<tooHemjee.length; i++){
        sumAmount.push(tooHemjee[i].amount);   
    }
    const amountSort = ((a, b) => b-a);
    sumAmount.sort(amountSort);
    arrAmount = sumAmount.slice(0, 5)
    console.log(arrAmount)
    let baraaNer = [];
    for(j=0; j<arrAmount.length; j++){
        for(k=0; k<tooHemjee.length; k++){
            if(arrAmount[j] === tooHemjee[k].amount){
                baraaNer.push(tooHemjee[k]);
            }
        }
    }
    return baraaNer
}
let niitAmount =mostAmount(data);
console.log('ХИ зарагдсан 5 бараа тоо хэмжээгээр: ', niitAmount);

// HI zaragdsan 10 baraa huwiar
let arr1 = [], salesPercent = [];
let niitOrlogo = totalBor;
arr1 = mostSales.slice(0, 10);
console.log("baraa une:", arr1)
console.log(arr1)
let ezlehhuvi = (baraa) =>{
    let arrName = [];
    for(i=0; i<arr1.length; i++){
        for(j=0; j<baraa.length; j++){
            if(arr1[i] === baraa[j].totalPrice){
                arrName.push(baraa[j].productName);
            }
        }
    }
      console.log(arrName)
      for(n=0; n<arr1.length; n++){
        salesPercent.push(Math.round((arr1[n]/niitOrlogo)*100));
      }
      return arrName + ':'+ salesPercent;
    //   console.log(salesPercent)
    }
let baraaNer = ezlehhuvi(data);


console.log(baraaNer);

const dataSort = ((a, b) => b.totalPrice-a.totalPrice);
data.sort(dataSort);
console.log("sortlogdson:", data);
