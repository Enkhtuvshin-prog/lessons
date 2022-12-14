
 const button = document.getElementsByTagName('button')[0];
 const taskName = document.getElementById('taskName');
 let todo= document.getElementById("groupTodo");
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

const cardItem =(text) =>{
        let item = `<div class="todo-list">
        <input type="text" name="" id="task readonly value = "${text}">
        <div class="icons">
            <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i>
            <i class="fa-sharp fa-solid fa-check" style="color: green;"></i>
            <i class="fa-sharp fa-solid fa-trash" style="color: red;"></i>
        </div>
</div>`;
return item;
// console.log(item)
};
 const  taskAdd =() =>{
    let text = taskName.value;
    if(text === ""){
        alert('Ta utga oruulaagui bna');
    } else{
        todo.innerHTML += cardItem(text)
    }
}
console.log(todo)
  button.addEventListener('click', taskAdd);
  document.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        taskAdd();
    }
  })