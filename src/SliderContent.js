import React from 'react';
import {Image} from './SliderImage';

const SliderContent = (props) => {
    return (
        <>
            <section>
                {Image.map((slide, index) => (
                    <div
                        key={index}
                        className={index === props.activeIndex ? 'slides active' : 'inactive'}>
                        <img className='slide-image' src={slide.urls} alt={slide.alt} />
                        <h2 className='slide-title'>{slide.title}</h2>
                        <p className='slide-text'>{slide.description}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SliderContent
