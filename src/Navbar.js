import React, { useLayoutEffect, useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { Address } from './Data';

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateScreenSize() {
            setScreenSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateScreenSize);
        updateScreenSize();
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
}


const Navbar = () => {
    const [width] = useMediaQuery();

    const [show, setShow] = useState(true);

    return (
        <>
            <nav className='nav-container'>
                <div className='nav-row'>
                    {width > 800 ?
                        <div className='nav-col'>
                            <div className='navbar-brand'>
                                <div className='nav-brand'>
                                    <Link to='/' className='text'>Zoom</Link>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='nav-col mobile-nav-col'>
                            <div className='mobile-navbar-brand'>
                                <div className='mobile-nav-brand'>
                                    <Link to='/' className='mobile-text'>Zoom</Link>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='nav-col shift-col'>
                        <navbar className='nav-class'>
                            {width > 800 ?
                                <div className='navbar-item'>
                                    <ul className='nav-list'>
                                        {Address.map((text, index) => (
                                            <Link to={text.href} className='nav-link'><li><i class={text.class}></i> {text.name}</li></Link>
                                        ))}
                                    </ul>
                                </div>
                                :
                                <div className='nav-class-shift'>
                                    <ul className='nav-list'>
                                        {show ?
                                            <Link to='#' className='nav-link' onClick={() => setShow(false)}><i class="fas fa-bars"></i></Link>
                                            :
                                            <Link to='#' className='nav-link' onClick={() => setShow(true)}><i class="fas fa-times"></i></Link>
                                        }
                                    </ul>
                                </div>
                            }
                        </navbar>
                    </div>
                </div>
            </nav>
            {width < 800 ?
                <div className="mobile-nav-container">
                    {!show ?
                        <div className='mobile-nav-wrapper'>
                            {Address.map((text, index) => (
                                <div className='mobile-nav-item'>
                                    <Link to={text.href} className='mobile-nav-link'>{text.name}</Link>
                                </div>
                            ))}
                        </div>
                        :
                        <div>
                        </div>
                    }
                </div>

                :
                <div>
                </div>
            }

        </>
    )
}

export default Navbar
