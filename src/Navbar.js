import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { Address } from './Data';

const Navbar = () => {
    return (
        <>
            <nav className='nav-container'>
                <navbar className='nav-class '>
                    <div className='navbar-brand'>
                        <div className='nav-brand'>
                            <Link to='/' className='text'>Zoom</Link>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <ul className='nav-list'>
                            {Address.map((text, index) => (
                                <Link to={text.href} className='nav-link'><li><i class={text.class}></i> {text.name}</li></Link>
                            ))}
                        </ul>
                    </div>
                </navbar>
            </nav>
        </>
    )
}

export default Navbar
