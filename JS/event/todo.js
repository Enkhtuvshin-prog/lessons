const addBtn =  document.getElementById('add-btn')
 const taskName = document.getElementById('taskName');
 let grouptodo = document.getElementById("groupTodo");
 let select = document.getElementById('priority')
console.log(select);
const allTask =[];
const  addlist = () =>{
    let text = taskName.value;
    let pr = select.value;
    const newTask = {
        name: text,
        status: false,
        priority:pr
    }
    allTask.push(newTask);
    taskAdd();
 addBtn.addEventListener('click', addlist)
 const deleteTodo = (index) => {
    // console.log("II", index);
    allTask.splice(index, 1);
    taskAdd();
}};
   
  const checkBox =(index) =>{
    
    // let inp = grouptodo.children[index].children[0];
    let inp = grouptodo.children[index];
    // console.log(inp)
    if(inp.classList.contains('line')){
        inp.classList.remove('line');
        inp.style.backgroundColor =' rgb(235, 234, 234)'

    }else{
        inp.classList.add('line')
        inp.style.backgroundColor ='#F0B27A '
    }
  }

//   const editTask =(index) =>{
//         let inpEdit = grouptodo.children[index].children[0];
//         // console.log(inpEdit)
//         if(inpEdit.hasAttribute('readonly')){
//             inpEdit.removeAttribute('readonly'); 
//             inpEdit.classList.add('fa-save')       
//         }else{
//             inpEdit.setAttribute('readonly')
//             inpEdit.classList.add('fa-pen')       
//             ;
//         }

//   }
const editTask= (index) =>{
    let inp = grouptodo.children[index].children[1].children[0].children[0];
    // console.log(inp)
            inp.classList.toggle("fa-pen");
        inp.classList.toggle("fa-save");
                let inpEdit = grouptodo.children[index].children[0];
        // console.log(inpEdit)
        if(inpEdit.hasAttribute('readonly')){
            inpEdit.removeAttribute('readonly'); 
        }else{
            inpEdit.setAttribute('readonly', 'readonly')   ;
        }
}

const taskAdd = () =>{
    grouptodo.innerHTML = '';
    for(i=0; i <allTask.length; i++){
        const check = allTask[i].status ? "line" : "";
        const item = 
        `<div class="todo-list ${allTask[i].priority} ">
                <input type="text" name="" id="task" readonly value="${allTask[i]}">
                <div class="icons">
                    <button class="edit" onclick = "editTask(${i})" >  <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i> </button>                
                    <button class="check" onclick = "checkBox(${i})"  ><i class="fa-sharp fa-solid fa-check" style="color: green;"></i></button>
                    <button class="delete" onclick = "deleteTodo(${i})" ><i class="fa-sharp fa-solid fa-trash" style="color: red;"></i></button>
                </div>
        </div>`;
    grouptodo.innerHTML += item;
    }
}
