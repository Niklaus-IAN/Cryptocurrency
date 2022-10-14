import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="nav">
                <div className="ian">
                    <h1>boss IAN</h1>
                </div>
                <div className='boss'>
                    <ul>
                        <li>
                            <Link style={{textDecoration: "none"}} to="/">
                                HOME
                            </Link>
                        </li>
                        <li>SPACES</li>
                        <li>
                            <Link style={{textDecoration: "none"}} to="/Community">
                                COMMUNITY
                            </Link>
                        </li>
                        <li>
                            <Link style={{textDecoration: "none"}} to="/SignUp">
                                SIGN-UP
                            </Link>
                        </li>
                        <button>
                        <li id="goat">SEE OUR SPACES</li>
                        </button>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;