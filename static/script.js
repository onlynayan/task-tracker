document.addEventListener('DOMContentLoaded', () => {

    // Progress bar
    const tasks = document.querySelectorAll('.task-card');
    const completed = Array.from(tasks).filter(task => task.querySelector('p:last-of-type').textContent.includes('Completed')).length;
    const progressFill = document.getElementById('progress-fill');
    const progress = tasks.length ? (completed / tasks.length) * 100 : 0;
    progressFill.style.width = `${progress}%`;

    // Draggable task cards
    const taskList = document.getElementById('task-list');
    let draggedItem = null;

    taskList.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('task-card')) {
            draggedItem = e.target;
            setTimeout(() => {
                draggedItem.classList.add('dragging');
            }, 0);
        }
    });

    taskList.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    });

    taskList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(taskList, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            taskList.appendChild(draggable);
        } else {
            taskList.insertBefore(draggable, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});