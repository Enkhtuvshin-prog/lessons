
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


let sameNas = (a)=>{

    for(i=0; i<a.length; i++){
        let b = [];
        for(j=i+1; j<a.length; j++){
            if( a[i].age == a[j].age){
                    b.push(a[i], a[j]);
                console.log(b);
            }
        }
    }
}

let z = sameNas(students);
console.log(z);

// ijil nas

    let nas=[];
    let uninas =[]
    for(i=0; i<students.length; i++){
        students[i].count = 0;
        nas.push(students[i].age);
        for(j=0; j<nas.length; j++){
            if(!uninas.includes(nas[j])){
                uninas.push(nas[j])
            }
        //     let nasTemp = [];
        //     for(i=0; i<uninas.length; i++){
        //         count = 0;
        //         for(k=0; k<nas.length; k++){
        //             if(uninas[i] == nas[k]){
        //                 count ++
        //             }
        //         }
        //         nasTemp.push(`${nas[k]}: ${count}`);

        //     }
            
            }
        }

        let general = [];
        for(i=0; i<uninas.length; i++){
            count = 0;
            let nasTemp = [];
            for(k=0; k<students.length; k++){
                if(uninas[i] == students[k].age){
                    count++
                }
            }
            if(count>1) {
                for(let j=0; j<students.length; j++){
                    if(students[j].age == uninas[i]){
                        nasTemp.push(students[j]);
                    }
                }
                general.push(nasTemp);
            };
           
            
            // nasTemp.push(`${nas[k]}: ${count}`);

        }

        console.log(general);
        console.log(nas);
        console.log(uninas);
        // console.log(nasTemp)
    // console.log(x)
    