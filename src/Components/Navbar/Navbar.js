import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-light navbar-left" to="/">Quiz Buster</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-light">
                            <li className="nav-item">
                                <Link className="nav-link text-light font-poppins" aria-current="page" to="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light font-poppins" to="/statistics">Statistics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light  font-poppins" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       
    );
};

export default Navbar;
