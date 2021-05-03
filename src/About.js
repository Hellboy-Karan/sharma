import React from 'react';
import './css/About.css';

const About = () => {
    return (
        <>
            <div className='Container bgcolor-about'>
                <div className='Wrapper'>
                    <h3>Welcome to About Page</h3>
                    <hr />
                    <div className='Row'>
                        <div className='Col-2'>
                            <img className='img-block' src='https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png' alt='Handsome Picture' />
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
