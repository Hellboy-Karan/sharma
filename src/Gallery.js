import React, { useState } from 'react';
import './css/Gallery.css';
import ReactPlayer from 'react-player';
import English from './video/English.mp4';
import Hindi from './video/Hindi.mp4';
import Blueriver from './media/blueriver.jpg';
import Handcamera from './media/handcamera.jpg';
import Mountain from './media/mountain.jpg';
import Tree from './media/tree.jpg';
import Birthday from './media/Happy-Birthday.png';


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
                                            <a href={Blueriver} target='_blank'>
                                                <img className='resize' src={Blueriver} alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href={Tree} target='_blank'>
                                                <img className='resize' src={Tree} alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href={Handcamera} target='_blank'>
                                                <img className='resize' src={Handcamera} alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href={Mountain} target='_blank'>
                                                <img className='resize' src={Mountain} alt='Handsome Picture' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-pv'>
                                        <div className='card'>
                                            <a href={Birthday} target='_blank'>
                                                <img className='resize' src={Birthday} alt='Handsome Picture' />
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
