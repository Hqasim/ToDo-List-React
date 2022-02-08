import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">React Project</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className='nav-link' to="/">Home</NavLink>
                            <NavLink className='nav-link' to="/todo">Todo</NavLink>
                        </div>
                    </div>
                </div>
            </nav >
            <Outlet />
        </div >
    );
}

export default NavBar;