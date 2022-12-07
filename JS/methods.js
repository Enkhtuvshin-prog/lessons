
function carS(carBrands){
    let brands = [];
    for(i=0; i<carBrands.length; i++){
        // for(j=0; j<carBrands[i].length; j++){
        if(carBrands[i][0].charAt(0)  == n){
        // carA = carBrands[i[j]];
        brands.push(carBrands[i])
        }
        // }
    }
    return brands;
}
let n = prompt(" Ta useg oruulna ")
let x = carS([["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016]
    ]);
    console.log(x);
    // console.table(x);

