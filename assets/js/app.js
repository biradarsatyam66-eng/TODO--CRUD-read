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


const todoform = document.getElementById('todoform');
const todoitem = document.getElementById('todoitem');
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




function ontodoSubmit(eve){
	eve.preventDefault();
	
	let newtodo = {
		todoItem : todoitem.value,
		todoId : Date.now().toString(),
	}
	
	todoArr.push(newtodo);
	// displayarr(todoArr);
	
	
	let li = document.createElement('li');
	li.className = 'list-group-item d-flex justify-content-between'

	li.innerHTML = `<strong>${newtodo.todoItem}</strong>
							
					<div>
						<i class="fa-solid fa-pen-to-square text-primary fa-2x p-2" role="button"></i>
						<i class="fa-solid fa-trash-can text-danger fa-2x p-2" role="button"></i>
					</div>`
	
	todoform.reset();

	todoList.append(li);
};






todoform.addEventListener('submit', ontodoSubmit);