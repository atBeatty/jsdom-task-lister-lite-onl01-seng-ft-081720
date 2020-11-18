document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // New <li></li>
    let taskLi = document.createElement("li");
    // New input/description 
    let newTaskDescription = document.getElementById("new-task-description").value
    // Assign viewable inner text of <li></li> = new description
    taskLi.innerHTML = newTaskDescription
    // Select the tasks <ul></ul>
    let toDoList = document.getElementById("tasks");
    // Append <li></li> to <ul></ul> as a child element 
    toDoList.appendChild(taskLi)
}, false);





});