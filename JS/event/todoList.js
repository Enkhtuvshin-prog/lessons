
//  const addBtn = document.getElementsByTagName('button')[0];
const addBtn =  document.getElementById('add-btn')
 const taskName = document.getElementById('taskName');
 let grouptodo = document.getElementById("groupTodo");
//  const listed = () =>{
//     let el = `<div class="todo-list">
//         <input type="text" name="" id="task">
//         <div class="icons">
//             <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i>
//             <i class="fa-sharp fa-solid fa-check" style="color: green;"></i>
//             <i class="fa-sharp fa-solid fa-trash" style="color: red;"></i>
//         </div>
// </div>`;
//     let el_section = document.createElement("div");
//     let inp = document.getElementById("taskNer").value;
//     el_section.innerHTML = el;
//     grouptodo.appendChild(el_section);
//     el_section.getElementsByTagName("input")[0].value = inp
//  }
//  button.addEventListener('click', listed)
const ognoo = document.getElementsByTagName('span')[0];
const yearDay = () =>{
     day = new Date().getDay();
     month = new Date().getMonth();
     year = new Date().getFullYear();

     ognoo.textContent = `${year}-${month}-${day}`
}
setInterval(yearDay);
const ustgah = (e) => {
    alert("Ta ustgahdaa itgeltei bna uu?");
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child)
}

const cardItem = (text) =>{ 
    const item = 
    `<div class="todo-list">
            <input type="text" name="" id="task" readonly value="${text}">
            <div class="icons">
            <button class="edit" onclick = "edit(this)" >  <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i> </button>                
            <button class="check" onclick = "checkBox(this)"  ><i class="fa-sharp fa-solid fa-check" style="color: green;"></i></button>
            <button class="delete" onclick = "ustgah(this)" ><i class="fa-sharp fa-solid fa-trash" style="color: red;"></i></button>
            </div>
    </div>`;
    return item;
}
const taskAdd = () => {
    let text = taskName.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{
        grouptodo.innerHTML += cardItem(text);
    }
}
addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
});
 
//checked
const checkBox =() =>{
    let checked = check;
    let red = 'red';
    let green = 'green'
    if(checked === "checked"){
        checked.style.color = `${green}`
    }else{
        checked.style.color = `${red}`

    }
    return checked ;
}


// const checked = document.createElement('div');
// div.innerHTML = checkBox
// const checkBox = ()=>{
//     let span = document.createElement("SPAN");
//     let txt =document.createTextNode("\u00D7")
//     span.className = 'close';
//     span.appendChild(txt);
// }


 