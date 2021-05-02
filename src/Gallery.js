import React, { useState } from 'react';
import './Gallery.css';
import ReactPlayer from 'react-player';
import English from './English.mp4';
import Hindi from './Hindi.mp4';

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
                    <div className='col'>
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div className='col'>
                        <i class="fab fa-instagram-square"></i>
                    </div>
                    <div className='col'>
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div className='col'>
                        <i class="fab fa-twitter-square"></i>
                    </div>
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
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href='https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg' target='_blank'>
                                                <img className='resize' src='https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg' alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href='https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg' target='_blank'>
                                                <img className='resize' src='https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg' alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href='https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg' target='_blank'>
                                                <img className='resize' src='https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg' alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href='https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg' target='_blank'>
                                                <img className='resize' src='https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg' alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href='https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg' target='_blank'>
                                                <img className='resize' src='https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg' alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='container-pv'>
                            <div className='block-pv'>
                                <div className='row-pv'>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                                                muted={false} playing={false}
                                                controls={true}
                                                height='260px'
                                                width='100%' />
                                        </div>
                                        <h4>Elephants Dream</h4>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <ReactPlayer url='https://www.youtube.com/watch?v=YoThngCrGGc'
                                                muted={false}
                                                playing={false}
                                                controls={true}
                                                height='260px'
                                                width='100%' />
                                        </div>
                                        <h4>Pehla Nasha Pehla Khumar Full HD</h4>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <ReactPlayer url='https://www.youtube.com/watch?v=mYmfW2LKAeQ'
                                                muted={false}
                                                playing={false}
                                                controls={true}
                                                height='260px'
                                                width='100%' />
                                        </div>
                                        <h4>Adar Poonawalla leaves India for UK - Get threat calls from powerful people</h4>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <ReactPlayer
                                                url={English}
                                                muted={false}
                                                playing={false}
                                                controls={true}
                                                height='260px'
                                                width='100%' />
                                        </div>
                                        <h4>English</h4>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <ReactPlayer
                                                url={Hindi}
                                                muted={false}
                                                playing={false}
                                                controls={true}
                                                height='260px'
                                                width='100%' />
                                        </div>
                                        <h4>Hindi</h4>
                                    </div>
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
