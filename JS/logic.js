//conditional
let age = 18;
if (age >= 18) {
console.log('Та насанд хүрсэн байна');
} else {
console.log('Та хүүхдээрээ байна');
}
let weekNumber = 6;
let weekName;
if (weekNumber == 1) {
weekName = 'Даваа';
} else if (weekNumber == 2) {
weekName = 'Мягмар';
} else if (weekNumber == 3) {
weekName = 'Лхагва';
} else if (weekNumber == 4) {
weekName = 'Пүрэв';
} else if (weekNumber == 5) {
weekName = 'Баасан';
} else if (weekNumber == 6) {
weekName = 'Бямба';
} else if (weekNumber == 5) {
weekName = 'Ням';
} else{
    weekName = "buruu too"
}    
    console.log(weekName);

if (age >= 18) {
console.log('Таны нас:', age);

console.log('Та насанд хүрсэн байна.');
}
let gender = 'male';
if (gender === 'male' && age>=18){
console.log('Насанд хүрсэн эрэгтэй');
 }


let eligible = false,
required = true;
console.log(!eligible);
console.log(!required);

//1bodlogo
let a = 85, b = 75, c = 96, d = 69;
let sum = 0;
if(a > 80){
    sum += a;
}
if(b > 80){
    sum = sum + b;
}
if(c > 80){
    sum = sum + c;
}
if(d > 80){
    sum = sum + d;
} console.log("sum =", sum);

//2bodlogo
let e = 3, f = 7, g = 2, h = 4;
let urgver = 1;
 if( e < 5 ){
    urgver = urgver*e;
 } 
 if( f < 5 ){
    urgver = urgver*f;
 } 
 if( g < 5 ){
    urgver = urgver*g;
 } 
 if( h < 5 ){
    urgver = urgver*h;
 }  console.log(urgver)
 //1
 let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; // false
let ix = 4 != "4"; //true
let x = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log(iix)
//2
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3);//false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12);//false
let nine = !(4 > 3 && 10 > 12);//true
let ten = !(4 === "4");//true
console.log(eight)

//XB
let k = 120, l = 33, q = 17, w = 12;
let hb;
if(k <= 50){
    hb = k;
}
if(l <= 50){
    hb = l;
}
if(q <= 50){
    hb = q;
}
if(w <= 50){
    hb = w;
}
console.log(hb)

 //ternary ashiglah
 let r = 3000, t = 27500, y = 100000;
 let dun = 0;

 dun += r >=5000 && r<=30000 ? r + r*0.15 : r + r*0.2;
 dun += t >=5000 && t<=30000 ? t + t*0.15 : t + t*0.2;
 dun += y >=5000 && y<=30000 ? y + y*0.15 : y + y*0.2;

// if (t>=5000 && t<=30000){
//     dun += t + t * 0.15
// } else{
//     dun += t + t *0.2
// }
 console.log(dun);
 if(!0) {
    console.log("yes");
 }
 else {
    console.log("no")
 }
 let o = 96, p = 108, z = 89;
 let aver;
 if(o >=89 ){
    aver = o;
 } else (o<=89) {
    aver = o + 3;
 }
 console.log(aver);
 
  