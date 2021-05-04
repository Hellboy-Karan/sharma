import React, { useState } from 'react';
import './css/Gallery.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { GalleryData, GalleryVideoData, FollowId } from './Data';


const Gallery = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <h3 className='text-gallery'>Zoom Studio Photographer & Videographer</h3>

            <div className='container'>
                
                <div className='row'>
                    <div className='col'>
                        <strong>Follow me on</strong>
                    </div>
                    {FollowId.map((text, index) => (
                        <div className='col'>
                            <Link to={text.href}><i className={text.data}></i></Link>
                        </div>
                    ))}
                </div>
                <div className='wrapper'>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn' onClick={() => setShow(true)}>Photo</button>
                        </div>
                        <div className='col'>
                            <button className='btn' onClick={() => setShow(false)}>Video</button>
                        </div>
                    </div>
                    <hr />
                    {show ?
                        <div className='container-pv'>
                            <div className='block-pv'>
                                <div className='row-pv'>
                                    {GalleryData.map((image, index) => (
                                        <div className='col-pv'>
                                            <div className='card' key={index}>
                                                <Link to={image.src} target='_blank' rel='noreferrer'>
                                                    <img className='resize' src={image.src} alt={image.alt} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        :
                        <div className='container-pv'>
                            <div className='block-pv'>
                                <div className='row-pv'>
                                    {GalleryVideoData.map((video, index) => (
                                        <div className='col-pv'>
                                            <div className='card'>
                                                <ReactPlayer url={video.src}
                                                    muted={false} playing={false}
                                                    controls={true}
                                                    height='260px'
                                                    width='100%' />
                                            </div>
                                            <h4>{video.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery
