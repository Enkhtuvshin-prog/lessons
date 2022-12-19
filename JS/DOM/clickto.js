const btn = document.getElementsByTagName('button')[0];
const setBg = document.getElementsByTagName('p')[0];
// const changeColor = document.getElementById('changeColor');
// const change = document.querySelector('#changeColor');
const change = document.getElementsByTagName('p')[1]
console.log(change)



let changeBg = () =>{
    setBg.style.backgroundColor = bgColor();
    setBg.style.fontSize = '1.2rem'
    change.style.backgroundColor = "orange"
    change.style.margin = '10px'

}
const bgColor = ()=>{
    let red  = Math.floor(Math.random() * 256)
    let yellow  = Math.floor(Math.random() * 256)
    let blue  = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${yellow}, ${blue})`
}


btn.addEventListener('click', changeBg)