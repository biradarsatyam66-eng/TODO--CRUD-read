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
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');






function displayTodo(arr){
    let result = '';
    arr.forEach((obj)=>{
        result += `<li class="list-group-item d-flex justify-content-between" id='${obj.todoId}'>
                            <strong>${obj.todoItem}</strong>

                            <div>
                                <i class="fa-solid fa-pen-to-square text-primary fa-2x" role="button" onclick="OnEdit(this)"></i>
                                <i class="fa-solid fa-trash-can text-danger fa-2x" role="button" onclick="OnRemoveId(this)"></i>
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
	li.id = newtodo.todoId

	li.innerHTML = `<strong>${newtodo.todoItem}</strong>
							
					<div>
						<i class="fa-solid fa-pen-to-square text-primary fa-2x" role="button" onclick="OnEdit(this)"></i>
						<i class="fa-solid fa-trash-can text-danger fa-2x" role="button" onclick="OnRemoveId(this)"></i>
					</div>`
	
	todoform.reset();

	todoList.append(li);
};


function OnRemoveId(ele){
	let remove_id = ele.closest('li').id;
	
	let getindex = todoArr.findIndex(todo => {
		return todo.todoId === remove_id
	})
	
	todoArr.splice(getindex,1)
	ele.closest('li').remove();         // for remove from UI.
}

function OnEdit(ele){
	edit_Id = ele.closest('li').id;
	
	let edit_obj = todoArr.find(todo => {
		return todo.todoId === edit_Id
	})
	
	todoitem.value = edit_obj.todoItem      // for patch on control
	
	submitBtn.classList.add('d-none');
	updateBtn.classList.remove('d-none');
	
}


function ontodoUpdate(eve){
	let update_Id = edit_Id
	
	let update_obj = {
		todoItem : todoitem.value,
		todoId : update_Id
	}
	
	let getIndex = todoArr.findIndex(todo => {
		return todo.todoId === update_Id
	})
	
	todoArr[getIndex] = update_obj;
	
	let li = document.getElementById(update_Id).firstElementChild
	li.innerText = update_obj.todoItem
	todoform.reset();
	
	submitBtn.classList.remove('d-none');
	updateBtn.classList.add('d-none');
}





todoform.addEventListener('submit', ontodoSubmit);
updateBtn.addEventListener('click', ontodoUpdate);
