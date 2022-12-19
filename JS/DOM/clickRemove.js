    const color =document.getElementById('colorSelect').children;
    const selectColor =document.getElementById('colorSelect');
console.log(color[2].value);
console.log(selectColor)
// const btn = document.getElementById('btn');
const btn =  document.getElementsByTagName('input')[0]
console.log(btn);
function myFunction() {
    const color =document.getElementById('colorSelect');
    color.remove();
  }

// function myFunction (){
//     for(i=0; i<color.length; i++){
//         if(color[i].value == "string"){
//          return color.remove();
//         }
//     }
// }
// btn.addEventListener('click', myFunction)