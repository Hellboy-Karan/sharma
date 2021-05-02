import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='Container-footer'>
                <div className='Wrapper'>
                    <div className='Row'>
                        <div className='Col-2'>
                            <ul className='footer-items'>
                                <a href='/' className='footer-list'><li className='footer-main'><i class="fas fa-home"></i> Home</li></a>
                                <a href='/about' className='footer-list'><li className='footer-main'><i class="fas fa-info-circle"></i> About</li></a>
                                <a href='/gallery' className='footer-list'><li className='footer-main'><i class="far fa-image"></i> Gallery</li></a>
                                <a href='#signup' className='footer-list'><li className='footer-main'><i class="fas fa-user-plus"></i> Sign Up</li></a>
                            </ul>
                        </div>
                        <div className='Col-2'>
                            <h3 className='gap-follow'>Follow Me On</h3>
                            <hr />
                            <div className='footer-row'>
                                <a href='#facebook' className='footer-follow'><li className='footer-main'><i class="fab fa-facebook-square"></i></li></a>
                                <a href='#Instagram' className='footer-follow'><li className='footer-main'><i class="fab fa-instagram-square"></i></li></a>
                                <a href='#linkedin' className='footer-follow'><li className='footer-main'><i class="fab fa-linkedin"></i></li></a>
                                <a href='#twitter' className='footer-follow'><li className='footer-main'><i class="fab fa-twitter-square"></i></li></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
