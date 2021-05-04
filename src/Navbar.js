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
                            <Link href='/' className='text'>Zoom</Link>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <ul className='nav-list'>
                            <Link href='/' className='nav-link'><li><i class="fas fa-home"></i> Home</li></Link>
                            <Link href='/about' className='nav-link'><li><i class="fas fa-info-circle"></i> About</li></Link>
                            <Link href='/gallery' className='nav-link'><li><i class="far fa-image"></i> Gallery</li></Link>
                            <Link href='#signup' className='nav-link'><li><i class="fas fa-user-plus"></i> Signup</li></Link>
                        </ul>
                    </div>
                </navbar>
            </nav>
        </>
    )
}

export default Navbar
