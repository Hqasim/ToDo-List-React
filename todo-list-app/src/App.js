import React from 'react';
import Form from './components/form';
import Core from './components/core';

function App() {
    return (
        <React.Fragment>
            <h1 className='p-2'>Todo List App</h1>
            <Form />
            <Core />
        </React.Fragment>
    );
}

export default App;