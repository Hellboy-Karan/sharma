import React from 'react';
import './css/Navbar.css';
import {Link} from 'react-router-dom';

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
                            <Link to='/' className='nav-link'><li><i class="fas fa-home"></i> Home</li></Link>
                            <Link to='/about' className='nav-link'><li><i class="fas fa-info-circle"></i> About</li></Link>
                            <Link to='/gallery' className='nav-link'><li><i class="far fa-image"></i> Gallery</li></Link>
                            <Link to='#signup' className='nav-link'><li><i class="fas fa-user-plus"></i> Signup</li></Link>
                        </ul>
                    </div>
                </navbar>
            </nav>
        </>
    )
}

export default Navbar
