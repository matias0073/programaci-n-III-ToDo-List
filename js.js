function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Ingrese una tarea, no puede estar vacía!");
    return;
  }

  var li = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function() {
      if (checkbox.checked) {
          li.style.textDecoration = "line-through";
      } else {
          li.style.textDecoration = "none";
      }
  };

  li.appendChild(checkbox);

 
  var taskText = document.createElement("span");
  taskText.textContent = taskInput.value;
  li.appendChild(taskText);

 
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
}
