import React, { useState, useEffect } from 'react';
import store from '../redux/store'; // Redux - Store Import

function Core() {
    // Hooks
    const [tasks, setTasks] = useState([]);

    // Handle Submit Event - Form
    const handleSubmit = event => {
        // Stops page reload
        event.preventDefault();
        // Adds user input to store
        const userInput = event.target[0].value;
        store.dispatch({
            type: 'ADD',
            payload: {
                description: userInput,
                status: true
            }
        });
        // Reads store contents and appends to local state
        setTasks(store.getState())
    }

    // Handle Delete Event - Form
    const handleDelete = task => {

        store.dispatch({
            type: 'DELETE',
            payload: {
                id: task.id
            }
        });
        // Reads store contents and appends to local state
        setTasks(store.getState())
    }

    // Handle Edit Event - Form
    const handleEdit = task => {
        // call prompt() with custom message to get user input from alert-like dialog
        const inputEdit = prompt('Update Task');
        store.dispatch({
            type: 'EDIT',
            payload: {
                id: task.id,
                description: inputEdit
            }
        });

        // Reads store contents and appends to local state
        setTasks(store.getState())
    }

    // Display Tasks
    const displayTasks = tasks.map(task =>
        <div className='p-2' key={task.id}>
            <div className="input-group p-1">
                <span className="input-group-text bg-warning text-dark">{task.description}</span>
                <button onClick={() => handleDelete(task)} className='btn btn-danger btn-sm'>Delete</button>
                <button onClick={() => handleEdit(task)} className='btn btn-info btn-sm'>Edit</button>
            </div>
        </div >
    );

    // Logging - Redux
    useEffect(() => {
        // Log State from Store - Redux
        console.log('Store: ', store.getState());
    });

    return (
        <React.Fragment>
            <h1>To Do App</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group p-2">
                    <span className="input-group-text">Todo</span>
                    <input type="text" className="form-control"
                        placeholder="Task Name" />
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
            {displayTasks}
        </React.Fragment>
    );
}

export default Core;