//🔸selector
const todoInput = document.querySelector('.todo-input') ;
const todoButton = document.querySelector('.todo-button') ;
const todoList = document.querySelector('.todo-list') ;

//🔸eventListener
todoButton.addEventListener('click', addTodo) ;         // adding eventlistener to add list
todoList.addEventListener('click', deleteCheck) ;      // adding eventlistener to delete list


//🔸funtions 
function addTodo(event) {      //🔸 Creating a function to add a list
    event.preventDefault() ;   //prevent from auto submitting

    const todoDiv = document.createElement("div") ;    //🔸create Div
    todoDiv.classList.add("todo") ;                    //add a class name todo in that Div.

    const newTodo = document.createElement('li') ;     //🔸 create Li
    newTodo.classList.add('todo-item') ;               // add class name todo-item in that Li.
    newTodo.innerText = todoInput.value  ;             // add text todoinput text typed in that Li.

    todoDiv.appendChild(newTodo) ;                  //🔸  Add newtodo as child inside todoDiv 

    const completedButton = document.createElement('button') ;     //🔸  create a button which will indicate completed.
    completedButton.classList.add("complete-btn") ;                // add a class name complete-btn to that button
    completedButton.innerHTML = '<i class="fas fa-check"></i>'     // inside that button add icon fas fa-check  (checkbox icon).

    todoDiv.appendChild(completedButton) ;                        //🔸add completedButton as a child inside todoDiv

    const trashButton = document.createElement('button') ;    //🔸create a button which will indicate trash.
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'    // inside that button add icon fas fa-trash (trash icon).
    trashButton.classList.add("trash-btn") ;                  // add a class name trash-btn to that button

    todoDiv.appendChild(trashButton) ;                        //🔸add trashButton as a child inside todoDiv

    todoList.appendChild(todoDiv)  ;                         //🔸add todoDiv as a child inside todolist

    todoInput.value = " " ;         //🔸clear todo input value
}

function deleteCheck(e) {         //🔸 creating a function a delete a list
   const item = e.target ;        // check which element we are clicking on

   if(item.classList[0] == "trash-btn") {    // loop to check which element we are clicking and delete it
    const todo = item.parentElement ;       //select the parent element of the trash-btn icon

    todo.classList.add("fall") ;           //🔸 animation part 
    todo.addEventListener('transitionend', function(){    //this function makes sure that after completing the transition the element will be deleted .
    todo.remove() ;
    }) ;
   }

   if(item.classList[0] == "complete-btn") {        //🔸loop to make the completed list as checked
     const todo = item.parentElement ;
     todo.classList.toggle('completed') ;
   }
}