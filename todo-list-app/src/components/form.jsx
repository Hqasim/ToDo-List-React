import React, { useState } from 'react';
import Tasks from './tasks';

function Form() {
    // State and Hook
    const [tasks, setTasks] = useState([]);

    // Submit form event handler
    const handleSubmit = (event) => {
        // Stops page reload
        event.preventDefault();
        // Get user input field value
        const newTask = event.target[0].value;
        // Check for empty field, throw alert. else update task list
        if (!newTask) {
            alert('Please enter task name');
        } else {
            // Update tasks list
            setTasks(tasks => [...tasks, newTask]);
        }
    };

    // Delete event handler
    const handleDelete = task => {
        // Removing the selected element in task array
        let updatedTask = tasks;
        for (let i = 0; i < updatedTask.length; i++) {
            if (updatedTask[i] == task) {
                updatedTask.splice(i, 1);
            }
        }
        // Update state via hooks
        setTasks(() => [...updatedTask]);
    };

    // Edit event handler
    const handleEdit = task => {
        // call prompt() with custom message to get user input from alert-like dialog
        const inputEdit = prompt('Update Task');

        // Update the selected element in task array
        let updatedTask = tasks;
        for (let i = 0; i < updatedTask.length; i++) {
            if (updatedTask[i] == task) {
                updatedTask[i] = inputEdit;
            }
        }
        // Update state via hooks
        setTasks(() => [...updatedTask]);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="input-group p-2">
                    <span className="input-group-text">Todo</span>
                    <input type="text" className="form-control" placeholder="Task Name" />
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
            <Tasks
                tasks={tasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />

        </React.Fragment>
    );
}

export default Form;