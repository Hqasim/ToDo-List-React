import React from 'react';
import Todo from './components/todo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' // React Router
import Home from './components/home';
import NavBar from './components/navbar';
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='todo' element={<Todo />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;