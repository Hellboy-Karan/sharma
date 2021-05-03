import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='nav-container'>
                <navbar className='nav-class '>
                    <div className='navbar-brand'>
                        <div className='nav-brand'>
                            <a href='/' className='text'>Zoom</a>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <ul className='nav-list'>
                            <a href='/' className='nav-link'><li><i class="fas fa-home"></i> Home</li></a>
                            <a href='/about' className='nav-link'><li><i class="fas fa-info-circle"></i> About</li></a>
                            <a href='/gallery' className='nav-link'><li><i class="far fa-image"></i> Gallery</li></a>
                            <a href='#signup' className='nav-link'><li><i class="fas fa-user-plus"></i> Signup</li></a>
                        </ul>
                    </div>
                </navbar>
            </nav>
        </>
    )
}

export default Navbar
