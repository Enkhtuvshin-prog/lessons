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
//nearest number
// let n = parseInt(prompt('Ta tooogoo oruulna uu?'))
// console.log(Math.round(n));
//number sum
let n = 423;
let sum =0;
while(n>=1){
    sum =sum + (n%10);
    n = Math.floor(n/10)
}
console.log(sum);
//random number between
// let a = parseInt(prompt('Ta toogoo oruulna uu'));
// let b = parseInt(prompt('Ta toogoo oruulna uu'));
// if(a>b){
//     max=a;
//     min=b
// }else{
//     max = b;
//     min = a
// }
// let c = Math.random() *(max - min)+min;
// console.log(Math.round(c));

//simple assignment
let  r = Math.random()*101;
console.log(r);

// Validate phone number
// let phoneN = prompt("Ta phone number oruulna uu?");
// let phoneN = prompt('Ta utasnihaa dugaarig oruulna uu');
// let utasniDugaar = ''
// if(Number(phoneN)){
//     utasniDugaar = phoneN
// } else{
//     utasniDugaar = 'Ta utasni dugaara zuw oruulna uu'
// }
// console.log(utasniDugaar);

// let phonenumber = '';
// let i = +976;
// let j = phoneN.substring(0, 4);
// if(i==j && phoneN.length === 12){
//     phonenumber = 'Ta mongol ulsin utasni dugaarig zuw oruulsan bn'
// }else{
//     phonenumber = 'Ta mongol ulsin utasni dugaarig buruu oruulsan bn'
// }
// console.log(phonenumber);

// JS string
// escape sequences
let h = 'Hello I am "Enkhtuvshin"';
let g = 'I am Age here years old'
let w = ' This is the new line with tab and some \\';
console.log(h);
console.log(g);
console.log(w);

// phone number hewleh
// let ph= prompt('Phone number');
// let p = ph.substring(0, 2);
// let operator = ''
// if(p==99 || p==95){
//     operator = 'mobicom'
// }else if(p==88 || p==86 || p==80){
//     operator = 'unitel'
// }else if(p==98 || p==93 || p==78){
//     operator = 'gmobile'
// }else if(p==96 || p==90 || p==91){
//     operator = 'skytel'
// }else{
//     operator='Utasni dugaara buruu bna '
// }
// console.log(operator);

//ognoo hewleh
// let on = prompt('Ta onoo oruulna  uu?');
// let sar = prompt('Ta saraa oruulna uu?');
// let day = prompt('Ta udruu oruulna uu?');
// console.log(sar.length);
// if(day.length==1 ){
//    day = 00 + day
// }
//  if(sar.length == 1) {
//     sar = 00 + sar
// }
// else{
//     day= day
//     sar=sar
// }
// console.log(on+'-'+sar+'-'+day);

// simple assignment
let firstname = 'Enkhtuvshin';
let lastname = 'Dashnyam';
console.log(firstname.length+":"+lastname.length);
let fullname = lastname.concat('' , ' Enkhtuvshin')
console.log(fullname);
console.log(fullname.toLocaleLowerCase());
console.log(fullname.toLocaleUpperCase());

let a = 12345
console.log(escape(a));
