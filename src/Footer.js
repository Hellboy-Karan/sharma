import React from 'react';
import './css/Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='Container-footer'>
                <div className='Wrapper'>
                    <div className='Row'>
                        <div className='Col-2'>
                            <ul className='footer-items'>
                                <Link to='/' className='footer-list'><li className='footer-main'><i class="fas fa-home"></i> Home</li></Link>
                                <Link to='/about' className='footer-list'><li className='footer-main'><i class="fas fa-info-circle"></i> About</li></Link>
                                <Link to='/gallery' className='footer-list'><li className='footer-main'><i class="far fa-image"></i> Gallery</li></Link>
                                <Link to='#signup' className='footer-list'><li className='footer-main'><i class="fas fa-user-plus"></i> Sign Up</li></Link>
                            </ul>
                        </div>
                        <div className='Col-2'>
                            <h3 className='gap-follow'>Follow Me On</h3>
                            <hr />
                            <div className='footer-row'>
                                <Link to='#facebook' className='footer-follow'><li className='footer-main'><i class="fab fa-facebook-square"></i></li></Link>
                                <Link to='#Instagram' className='footer-follow'><li className='footer-main'><i class="fab fa-instagram-square"></i></li></Link>
                                <Link to='#linkedin' className='footer-follow'><li className='footer-main'><i class="fab fa-linkedin"></i></li></Link>
                                <Link to='#twitter' className='footer-follow'><li className='footer-main'><i class="fab fa-twitter-square"></i></li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
