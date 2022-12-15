const addBtn =  document.getElementById('add-btn')
 const taskName = document.getElementById('taskName');
 let grouptodo = document.getElementById("groupTodo");

const allTask =[];
const  addlist = () =>{
    let text = taskName.value;
    allTask.push(text);
    taskAdd();

}
 addBtn.addEventListener('click', addlist)
 const deleteTodo = (index) => {
    // console.log("II", index);
    allTask.splice(index, 1);
    taskAdd();
  };
   
  const checkBox =(index) =>{
    
    // let inp = grouptodo.children[index].children[0];
    let inp = grouptodo.children[index];
    // console.log(inp)
    inp.style.backgroundColor ='green'
  }

  const editTask =(index) =>{
        let inpEdit = grouptodo.children[index].children[0];
        // console.log(inpEdit)
        if(inpEdit.hasAttribute('readonly')){
            inpEdit.removeAttribute('readonly');
            
        }else{
            inpEdit.setAttribute('readonly')
        }

  }

const taskAdd = () =>{
    grouptodo.innerHTML = '';
    for(i=0; i <allTask.length; i++){
        const item = 
        `<div class="todo-list">
                <input type="text" name="" id="task" readonly value="${allTask[i]}">
                <div class="icons">
                    <button class="edit" onclick = "editTask(${i})" >  <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i> </button>                
                    <button class="check" onclick = "checkBox(${i})"  ><i class="fa-sharp fa-solid fa-check" style="color: blue;"></i></button>
                    <button class="delete" onclick = "deleteTodo(${i})" ><i class="fa-sharp fa-solid fa-trash" style="color: red;"></i></button>
                </div>
        </div>`;
    grouptodo.innerHTML += item;
    }
}