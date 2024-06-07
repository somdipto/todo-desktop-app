document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Load previous tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Populate the todo list with saved tasks
    savedTasks.forEach(task => {
        addTaskToList(task);
    });

    addTodoButton.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task !== '') {
            addTaskToList(task);
            todoInput.value = '';

            // Update the savedTasks array and save it to localStorage
            savedTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
        }
    });

    function addTaskToList(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Remove the task from the list
            listItem.remove();

            // Remove the task from savedTasks array
            const index = savedTasks.indexOf(task);
            if (index !== -1) {
                savedTasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(savedTasks));
            }
        });

        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
    }
});
