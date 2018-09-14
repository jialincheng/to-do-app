function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;
    //let todoObj = {
    //  name: title,
    //  id: todoId
  //  }
    //todoId++;
    //toDos.push(todoObj);
    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //set delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span> Delete </span>';;
    deleteBtn.addEventListener('click',function(){
    toDoList.removeChild(this. parentElement);
  })
    //let buttonLiText = this.parentElement.childNodes[0].textContent;
    //toDoList.removeChild(this.parentElement) ;


    // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);
   newLi.appendChild(deleteBtn);
   // attach the li to the ul
   toDoList.appendChild(newLi);
   //empty the input
   newToDoText.value = '';
});


};
window.onload = function() {
  onReady();
};
