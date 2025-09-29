function saveToDos() {
  const todoTextInput = document.getElementById("todoTextInput");
  if (todoTextInput.value === "") {
    console.log(todoTextInput.value);
    return;
  }
  const todo = document.createElement("li");
  todo.innerHTML = todoTextInput.value;
  const lista = document.getElementById("lista");
  lista.appendChild(todo);
  todoTextInput.value = "";
}
