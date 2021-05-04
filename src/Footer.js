import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';
import { FollowId, Address } from './Data';

const Footer = () => {
    return (
        <>
            <div className='Container-footer'>
                <div className='Wrapper'>
                    <div className='Row'>
                        <div className='Col-2'>
                            <ul className='footer-items'>
                                {Address.map((data, index) => (
                                    <Link to={data.href} className='footer-list'><li className='footer-main'><i class={data.class}></i> {data.name}</li></Link>
                                ))}
                            </ul>
                        </div>
                        <div className='Col-2'>
                            <h3 className='gap-follow'>Follow Me On</h3>
                            <hr />
                            <div className='footer-row'>
                                {FollowId.map((text, index) => (
                                    <Link to={text.href} className='footer-follow'><li className='footer-main'><i class={text.data}></i></li></Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
