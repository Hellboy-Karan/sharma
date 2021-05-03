import React from 'react';
import Birthday from './images/Happy-Birthday.png'
import Vacation from './images/vacation.jpg'
import Wedding from './images/tulum-wedding.jpg'

const Homecontainer = () => {

    return (
        <>
            <div className='Container'>
                <div className='Wrapper'>
                    <div className="Row">
                        <div className='Col-2 mpg' >
                            <div className='card'>
                                <img className='resize' src={Wedding} alt='Handsome Picture' />
                            </div>
                        </div>
                        <div className='Col-2 mpg'>
                            <strong>WEDDING</strong>
                            <p className='p-font'>the quantities, characters, or symbols on which operations are performed by a computer,
                            which may be stored and transmitted in the form of electrical signals
                            and recorded on magnetic, optical, or mechanical
                             recording media.</p>
                        </div>
                    </div>
                    <div className="Row">
                        <div className='Col-2 mpg'>
                            <strong>BIRTHDAY</strong>
                            <p className='p-font'>the quantities, characters, or symbols on which operations are performed by a computer,
                            which may be stored and transmitted in the form of electrical signals
                            and recorded on magnetic, optical, or mechanical
                             recording media.</p>
                        </div>
                        <div className='Col-2 mpg' >
                            <div className='card'>
                                <img className='resize' src={Birthday} alt='Handsome Picture' />
                            </div>
                        </div>
                    </div>
                    <div className="Row">
                        <div className='Col-2 mpg' >
                            <div className='card'>
                                <img className='resize' src={Vacation} alt='Handsome Picture' />
                            </div>
                        </div>
                        <div className='Col-2 mpg'>
                            <strong>VACATION</strong>
                            <p className='p-font'>the quantities, characters, or symbols on which operations are performed by a computer,
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

export default Homecontainer
