import React from 'react';
import { HomeData } from './Data';

const Homecontainer = () => {

    return (
        <>
            <div className='Container'>
                <div className='Wrapper'>
                    {HomeData.map((data, index) => (
                        <div className="Row" key={index}>
                            <div className='Col-2 mpg' >
                                <div className='card'>
                                    <img className='resize' src={data.src} alt={data.alt} />
                                </div>
                            </div>
                            <div className='Col-2 mpg'>
                                <strong>{data.name}</strong>
                                <p className='p-font'>{data.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Homecontainer
