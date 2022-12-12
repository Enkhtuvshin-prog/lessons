
let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 19,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
];
//[{},{}]
// function student(){
//     let x = 0;
//     let z = {};
//     for(i=0; i<students.length; i++){
//         if(students[i].gender == 'male') {
//             x++
//         }
//            z.emegtei= students.length - x;
//            z.eregtei = x
//     }
//     return z;
// }
//[19,21,23]



// let a = 1;

// let student = (oyutan) => {
//     let x = 0;
//     let z = {};
//     for(i=0; i<oyutan.length; i++){
//         if(oyutan[i].gender == 'male') {
//             x++;
//         }
//            z.emegtei= oyutan.length - x;
//            z.eregtei = x;
//     }
//     return z;
// };

// let y =student(students);
// console.log(y);

// // nasni dundaj
// let nas = (ageS) =>{
//     let a =0;
//     for(i=0; i<ageS.length; i++){
//         a += ageS[i].age;
//     }
//     return  Math.floor(a/ageS.length);
// }
// let b= nas(students);
// console.log(b);

// // ovog nemj oruulah
// let lastN = (nameL)=>{
//     let ners = ["Bat", 'Grel', 'Bataa', 'Naraa', 'Saraa']
//     // let ners = (nameL[i].name 'ovgiig oruulna uu?')

//     for(i=0; i< nameL.length; i++){
//         nameL[i].lastname = ners[i];
//     }
//     return nameL;
// }
// let l = lastN(students)
// console.log(l)
// students[0].lastName = "bat";
// console.log(students)
// lastNames = ["Bataa", "Dorjoo", "Chimgee"]
// for(let i=0;i<students.length;i++){

// }
// let ovog = (students[i].name ovgiig oruulna uu?)

// ijil nastai suragchid


// let sameNas = (a)=>{

//     for(i=0; i<a.length; i++){
//         let b = [];
//         for(j=i+1; j<a.length; j++){
//             if( a[i].age == a[j].age){
//                     b.push(a[i], a[j]);
//                 console.log(b);
//             }
//         }
//     }
// }

// let z = sameNas(students);
// console.log(z);

// // ijil nas

//     let nas=[];
//     let uninas =[]
//     for(i=0; i<students.length; i++){
//         students[i].count = 0;
//         nas.push(students[i].age);
//         for(j=0; j<nas.length; j++){
//             if(!uninas.includes(nas[j])){
//                 uninas.push(nas[j])
//             }            
//             }
//         }

//         let general = [];
//         for(i=0; i<uninas.length; i++){
//             count = 0;
//             let nasTemp = [];
//             for(k=0; k<students.length; k++){
//                 if(uninas[i] == students[k].age){
//                     count++
//                 }
//             }
//             if(count>1) {
//                 for(let j=0; j<students.length; j++){
//                     if(students[j].age == uninas[i]){
//                         nasTemp.push(students[j]);
//                     }
//                 }
//                 general.push(nasTemp);
//             };
//         }

//         console.log(general);
//         console.log(nas);
//         console.log(uninas);
//animals
let animals = [{
    type: 'dog',
    sound: 'woof',
},
{ type: 'cow',
sound: 'moo',
},
{
    type: 'cat',
    sound: 'meow'
}
];
 let a = (amitan) => {
    let duu = ' ';
    for(i=0; i< amitan.length; i++){
         if(amitan[i].type === n){
             duu = amitan[i].sound;
            }
            else{
                duu = -1;
            }
        }
        return duu;
 }
//  let n = prompt("Ta amitni ner oruulna uu?");
let n = 'cat'
 let b = a(animals);
 console.log(b);

 // Suragchid
 let suragch = [{
    name: "Гончигсумлай", 
    birthOfYear: 1999, 
    hobby: "морь",
     single: false
 },
  { name: 'Дорж',
    birthOfYear: 2000,
    hobby: ' сагс тоглох',
    single: false,
},
{ name: 'Намуун',
    birthOfYear: 2000,
    hobby: 'шатар тоглох',
    single: true,
},
{ name: 'Дөлгөөн',
birthOfYear: 2004,
hobby: ' Mobile legend',
single: true,
}];
 
let x = (oyutan)=>{
    let nas = [];
    for(i=0; i<oyutan.length; i++){
        if(2022 - oyutan[i].birthOfYear >= 20){
            nas.push(oyutan[i]);
        } 
        
    }
    return nas;
}
let  age = x(suragch);
console.log(age);

// single & douple
 let single = (student) =>{
    let  nameS = [];
    for(i=0; i<student.length; i++){
        if(student[i].single === true){
            nameS.push(student[i]);
        }
    }
    return nameS;
 }
 let s = single(suragch);
 console.log(s);

 //mern object
 const users = [
    {
        name:  'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:  'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]
// 1bodlogo
    for(i=0; i<users.length; i++){
        console.log(users[i]);
    }

//2 bodlogo
let  e = (skill)=>{
    let manyskill =[];
    let max = 0;
    for(i=0; i<skill.length; i++){
        // console.log(skill[i].skills.length);

        manyskill.push(skill[i].skills);
        // console.log(skill[i].skills)
        if(max < manyskill[i].length){
            max = manyskill[i].length;
        }   
}
    for(j=0; j<skill.length; j++){
        // console.log(skill[j].name);
    let ner = [ ];
    if(max == skill[j].skills.length){
        ner.push(skill[j].name);
        // console.log(ner);
        return ner
    }
 }   
}

let urchadwar = e(users);
console.log(urchadwar);

// 3 bodlogo
let count = (point)=>{
    let arrTemp = [];
    for(i=0; i<point.length; i++){
        if(point[i].points >=50){
            arrTemp.push(point[i]);
        }
    }
    return arrTemp;
}
let onoo = count(users)
console.log(onoo);
//4bodlogo
function mern(swSkill){
    let skillName = [];
    for(i=0; i<swSkill.length; i++){
        if(swSkill[i].skills.includes('MongoDB')){
            skillName.push(swSkill[i].name);
        }
    }
    return skillName;
}
// let z = ['MongoDB', 'Express', 'React', 'Node'] ;
let Urchadvar = mern(users);
console.log(Urchadvar);

const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
console.log(arr)
//max-age 3hun
function maxNas(maxAge){
    let nasTemp = [];
    for(i=0; i<maxAge.length; i++){
        nasTemp.push(maxAge[i].age);
    }
    let compareNas = (a,b)=>(a>b ? -1:0);
    nasTemp.sort(compareNas);
    // return nasTemp
    let arr1 = nasTemp.slice(0, 3);
    // console.log(arr1);
    // console.log(arr1.length);    
    let arr2 = [];
    for(j=0; j<arr1.length; j++){
        for(n=0; n<maxAge.length; n++){
            if(arr1[j] == maxAge[n].age){
                arr2.push(maxAge[n].name)
            }
        }
    }
    return arr2;
}
let nasMax = maxNas(users);
console.log(nasMax);

