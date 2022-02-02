import React, { useState } from 'react';
import Tasks from './tasks';
import { useSelector, useDispatch } from 'react-redux' // Redux - Dependency
import store from '../redux/store'; // Redux - Store Import

function Form() {
    // State and Hook
    const [tasks, setTasks] = useState([]);
    const [task, clearTask] = useState('');

    // Updates user input dynamically to input field value property
    const handleClear = event => {
        clearTask(event.target.value);
    }

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
        // Clear input field
        clearTask('');
        // Testing - Redux
        store.dispatch({
            type: 'ADD',
            payload: {
                description: newTask,
                status: true
            }
        });

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

        // Testing - Redux
        store.dispatch({
            type: 'DELETE',
            payload: {
                id: 2
            }
        });

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
                    <input type="text" className="form-control"
                        placeholder="Task Name" value={task} onChange={handleClear} />
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
            <Tasks
                tasks={tasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            <br></br>
        </React.Fragment>
    );
}

export default Form;