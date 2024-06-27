function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Ingrese una tarea, no puede estar vacía!");
    return;
  }

  var li = document.createElement("li");

  // Crear checkbox para marcar como completada
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function() {
      if (checkbox.checked) {
          li.style.textDecoration = "line-through";
      } else {
          li.style.textDecoration = "none"; // Quitar el tachado si no está completado
      }
  };

  li.appendChild(checkbox);

  // Agregar texto de la tarea
  var taskText = document.createElement("span");
  taskText.textContent = taskInput.value;
  li.appendChild(taskText);

  // Botón de eliminar tarea
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(deleteButton);

  // Agregar la tarea a la lista
  taskList.appendChild(li);

  // Limpiar el input después de agregar la tarea
  taskInput.value = "";
}
