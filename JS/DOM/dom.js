
// const myBtn2 = document.getElementsByClassName('myBtn')[2];
// const myBtn1 = document.getElementsByClassName('myBtn')[1];
// const myBtn = document.getElementsByClassName('myBtn');
const myBtn = document.querySelectorAll('.myBtn');

const color = ['red', 'blue', 'green'];
let colorIndex = 0;
const body = document.getElementsByTagName('body')[0]; 
// const divs = document.getElementsByClassName('box')
const changeUngu = () =>{
    if(colorIndex >=3){
        colorIndex = 0;
    }
        body.style.backgroundColor = `${color[colorIndex]}`;
        colorIndex ++;
}
myBtn.addEventListener('click', changeUngu);
    // const changeColor = () =>{
    //     let red =Math.floor(Math.random() * 256);
    //     let green =Math.floor(Math.random() * 256);
    //     let blue =Math.floor(Math.random() * 256);

    // return `rgb(${red}, ${green}, ${blue})` 

const content = document.getElementsByTagName('body')[0]; 
const divs = document.getElementsByClassName('box')
 const change =() =>{
    for(i=0; i<divs.length; i++){
        let color = getColor();
        divs[i].style.backgroundColor = color;
        // divs[i].textContent
    }
 };
 const getColor = () =>{
            let red =Math.floor(Math.random() * 256);
        let green =Math.floor(Math.random() * 256);
        let blue =Math.floor(Math.random() * 256);
            return `rgb(${red}, ${green}, ${blue})` 
 };
//  myBtn.addEventListener('click', change);

 for(i=0; i<myBtn.length; i++){
     myBtn[i].addEventListener('click', change);
 }
//  myBtn1.addEventListener('click', change);
//  myBtn2.addEventListener('click', change);