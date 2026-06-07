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
          todoItem:'JS'
        },
]

const todoform = document.getElementById('todoform');
const todolist = document.getElementById('todolist');
const todoitem = document.getElementById('todoitem');


function displayarr(arr){
	let result = ''
	arr.forEach((obj) => {
		result += `<li class='list-group-item d-flex justify-content-between'>
							<strong>${obj.todoItem}</strong>
							
							<div>
								<i class="fa-solid fa-pen-to-square text-primary fa-2x p-2" role="button"></i>
								<i class="fa-solid fa-trash-can text-danger fa-2x p-2" role="button"></i>
							</div>
					</li>`		
	})
	todolist.innerHTML = result;
};


displayarr(todoArr);




function ontodosubmit(eve){
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
	todolist.append(li);
};





todoform.addEventListener('submit', ontodosubmit);














































// const todoform = document.getElementById('todoform');
// const todoitem = document.getElementById('todoitem');





// function onformSubmit(eve){
    // eve.preventDefault();

    // let newtodo ={
        // todoItem : todoitem.value,
        // id : Date.now().toString()
    // }

    // todoform.reset();

    // todoArr.push(newtodo);


    // let li = document.createElement('li');
    // li.className = 'list-group-item d-flex justify-content-between align-items-center'
    // li.id = newtodo.id;
    // li.innerHTML = `<strong>${newtodo.todoItem}</strong>

                    // <div>

                        // <i
                            // onclick="onTodoEdit(this)"
                            // class="fa-solid fa-pen-to-square fa-2x text-primary me-3"
                            // role="button">
                        // </i>

                        // <i
                            // onclick="onTodoRemove(this)"
                            // class="fa-solid fa-trash fa-2x text-danger"
                            // role="button">
                        // </i>

                    // </div>`

    // todoList.appendChild(li);
// }





// todoform.addEventListener('submit', onformSubmit);














 // <form id='todoform'>
								// <div class='form-group'>
									// <label for='todoitem'>Todo Item</label>
									// <input type='text' class='form-control mb-3'id='todoitem'>
								// </div>
								
								// <div>
									// <button type="submit" class="btn btn-primary btn-block">Add Todo</button>
								// </div>
						// </form>