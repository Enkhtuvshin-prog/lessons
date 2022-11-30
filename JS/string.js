//register number
//let reg = prompt( "Ta registorin dugaaraa oruulna uu?");
// let reg = prompt(" Ta registorin dugaara oruulna uu?")
// console.log(reg.length);
// console.log(reg.substring (0, 2));
let reg = "AD99080945"
let regLength = reg.length;
let regUseg = reg.substring (0, 2);
let regToo = reg.substring (2, 10);
console.log(regLength);
console.log(regUseg);
console.log(regToo);
if(typeof(regUseg =="string") &&  Number(regToo) && regLength===10){
    console.log("Tani registorin dugaar zuw bna");
} else{
     console.log("Tani registorin dugaar buruu bna");
}
console.log(typeof(regUseg)=="string", Number(regToo))
console.log(reg.charCodeAt(0));
if(reg.charCodeAt(0)>=65&&reg.charCodeAt(0)<92){
}
