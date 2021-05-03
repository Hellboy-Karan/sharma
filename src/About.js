import React from 'react';
import './css/About.css';
import Vacation from './media/vacation.jpg';

const About = () => {
    return (
        <>
            <div className='Container bgcolor-about'>
                <div className='Wrapper'>
                    <h3>Welcome to About Page</h3>
                    <hr />
                    <div className='Row'>
                        <div className='Col-2'>
                            <img className='img-block' src={Vacation} alt='Handsome Picture' />
                        </div>
                        <div className='Col-2'>
                            <p>the quantities, characters, or symbols on which operations are performed by a computer,
                            which may be stored and transmitted in the form of electrical signals
                            and recorded on magnetic, optical, or mechanical
                             recording media.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
