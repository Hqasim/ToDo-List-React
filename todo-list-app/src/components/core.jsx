import React, { useState, useEffect } from 'react';
import store from '../redux/store'; // Redux - Store Import
import { useSelector, useDispatch } from 'react-redux';
import { add, del, edit, status } from '../redux/tasksSlice';

function Core() {
    const [taskInput, setTaskInput] = useState(''); // Hook used to read and clear the input task
    const [editTask, setEditTask] = useState(''); // Hook used to read editing task input field
    const dispatch = useDispatch() // Redux - Hook to submit data to store
    const tasksStore = useSelector(state => state.tasks) // Redux - Hook to read store data
    console.log('Store Tasks:', tasksStore); // Console Logs store tasks data upon DOM re-render

    // Handle Submit Event - Form
    const handleSubmit = task => {
        task.preventDefault(); // Stops page reload
        setTaskInput('');// Clears user input
        // Add task to state - ID incrementing handled by reducer action
        const userInput = task.target[0].value;
        dispatch(add(
            { description: userInput, status: false }
        ))
    }

    // Handle Delete Event - Form
    const handleDelete = task => {
        // Delete selected task
        dispatch(del(
            { id: task.id }
        ))
    }

    // Handle Edit Event - Form
    const handleEdit = task => {
        setEditTask(task.description)
        if (task.isEditing) {
            dispatch(edit({ id: task.id, description: editTask }))
        } else {
            dispatch(edit({ id: task.id }))
        }
    }

    // Toggle Status
    const toggleStatus = (task) => {
        dispatch(status({ id: task.id }))
    }

    // JSX for task strike through
    const taskText = (task) => {
        return (task.status ? <del>{task.description}</del> : task.description);
    }

    // Display Tasks - Reads form store via useSelector Hook
    const displayTasks = tasksStore.map(task =>
        <div className='p-2' key={task.id}>
            <div className="input-group p-1">

                {task.isEditing ?
                    <input type="text" className="form-control"
                        placeholder="Edit Task" value={editTask} onChange=
                        {event => setEditTask(event.target.value)} /> :
                    <span className="input-group-text bg-warning text-dark">{taskText(task)}</span>}

                <button onClick={() => handleDelete(task)} className='btn btn-danger btn-sm'>Delete</button>
                <button onClick={() => handleEdit(task)} className='btn btn-info btn-sm'>
                    {task.isEditing ? 'Submit Edit' : 'Edit'}
                </button>
                <span className='input-group-text' onClick={() => toggleStatus(task)}>Toggle Status</span>

            </div>
        </div >
    );

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="input-group p-2">
                    <span className="input-group-text">Todo</span>
                    <input type="text" className="form-control"
                        placeholder="Task Name" value={taskInput} onChange=
                        {event => setTaskInput(event.target.value)} />
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
            {displayTasks}
        </React.Fragment>
    );
}

export default Core;