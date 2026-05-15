const cl = console.log;

let todoArr =[ 
         { 
           todoId:'asdf123-123AS-21asd3',
           todoItem:'HTML'
         },

        { 
          todoId:'sdfg-123AS-21asd3',
          todoItem:'Angular'
         },

         { 
          todoId:'zasasd23-123AS-21asd3',
          todoItem:'JS and TS'
         },
] 


const todoList = document.getElementById('todoList');

function displayTodo(arr){
    let result = '';
    arr.forEach((obj)=>{
        result += `<li class="list-group-item d-flex justify-content-between">
                            <strong>${obj.todoItem}</strong>

                            <div>
                                <i class="fa-solid fa-pen-to-square text-primary fa-2x" role="button"></i>
                                <i class="fa-solid fa-trash-can text-danger fa-2x" role="button"></i>
                            </div>
                    </li>`
    })
    todoList.innerHTML = result;
}



displayTodo(todoArr);













