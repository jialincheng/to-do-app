function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete!";
      deleteBtn.addEventListener('click', () => {
        //alert(toDO.titile)
        toDos = toDos.filter(function(item){
          return item.id != toDo.id;

        });
      renderTheUI();
      });
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    })
   }
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;
    //console.log(toDos);
    newToDoText.value = '';
    renderTheUI();
  }
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    createNewToDo();
  });
}
window.onload = function() {
  onReady();
};
