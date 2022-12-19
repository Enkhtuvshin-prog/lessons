const ul = document.getElementsByTagName('ul')[0].children[0].innerHTML
// const aimagNames = document.getElementById('aimagNames')
  console.log(ul);
  const lastli = document.getElementsByTagName('li')[21].innerText
  console.log(lastli)
  const liSB = document.getElementById('aimag-315').innerHTML;
  console.log(liSB);
// style oruulah

// const li = document.getElementById('aimagNames');
// const li = document.getElementsByTagName('ul')[0].style.color = '#808B96'
// console.log(li);
const listStyle = document.getElementsByTagName('ul')[0].style.listStyle = 'none'
console.log(listStyle);
let change = document.getElementsByTagName('ul')[0].style.border = "1px solid black"
      change = document.getElementsByTagName('ul')[0].style.textAlign = 'center'
      change = document.getElementsByTagName('ul')[0].style.fontSize = '1.5rem'
      change = document.getElementsByTagName('ul')[0].style.padding = '20px'
      change = document.getElementsByTagName('ul')[0].style.margin = '0 auto'
      change = document.getElementsByTagName('ul')[0].style.backgroundColor = '#1A5276'
console.log(change);

//bg-color
let data = document.getElementsByTagName('ul')[0].children;
// console.log(data);
// for(i=0; i<data.length; i++){
//   if(data[i].id == 'aimag-101' || data[i].id == 'aimag-103' || data[i].id == 'aimag-104' ){
//     data[i].style.backgroundColor = 'white'
//   }
// }
for(i=0; i<data.length; i++){
  let bus = ''
  if(data[i].id >= 'aimag-101' && data[i].id < 'aimag-200'  ){
    data[i].style.backgroundColor = 'white'
   bus= data[i].innerText+':'+ 'Хангайн бүс'
  }
  if(data[i].id >= 'aimag-200' && data[i].id < 'aimag-300'  ){
    data[i].style.backgroundColor = '#D35400'
    bus= data[i].innerText+':'+ 'Баруун бүс'

  }
  if(data[i].id >= 'aimag-300' && data[i].id < 'aimag-400'  ){
    data[i].style.backgroundColor = '#D35400'
    bus= data[i].innerText+':'+ 'Зүүн бүс'

  }
  if(data[i].id >= 'aimag-400' && data[i].id < 'aimag-500'  ){
    data[i].style.backgroundColor = '#3498DB '
    bus= data[i].innerText+':'+ 'Төвийн бүс'

  }
  if(data[i].id > 'aimag-500'  ){
    data[i].style.backgroundColor = 'gray'
    bus= data[i].innerText+':'+ 'Улаанбаатар'

  }
  console.log(bus)
}