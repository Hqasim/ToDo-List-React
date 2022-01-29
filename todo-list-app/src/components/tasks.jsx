import React from 'react';

function Tasks({ tasks, edit, handleDelete, handleEdit }) {

    const displayTasks = tasks.map(task =>
        <div className='p-2' key={Math.floor(Math.random() * 10000)}>
            <div className="input-group p-1">
                <span className="input-group-text bg-warning text-dark">{task}</span>
                <button onClick={() => handleDelete(task)} className='btn btn-danger btn-sm'>Delete</button>
                <button onClick={() => handleEdit(task)} className='btn btn-info btn-sm'>Edit</button>
            </div>
        </div >
    );

    return (
        <React.Fragment>
            {displayTasks}
        </React.Fragment >
    );
}

export default Tasks;