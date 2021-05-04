import English from './video/English.mp4';
import Hindi from './video/Hindi.mp4';

import Blueriver from './media/blueriver.jpg';
import Handcamera from './media/handcamera.jpg';
import Mountain from './media/mountain.jpg';
import Tree from './media/tree.jpg';
import Birthday from './media/Happy-Birthday.png';
import Vacation from './media/vacation.jpg';
import Wedding from './media/tulum-wedding.jpg';

export const HomeData = [
    {
        src: {Wedding},
        alt: 'Wedding',
        name: 'WEDDING',
        text: "the quantities, characters, or symbols on which operations are performed by a computer,which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media."
    },
    {
        src: {Birthday},
        alt: 'Birthday',
        name: 'BIRTHDAY',
        text: "the quantities, characters, or symbols on which operations are performed by a computer,which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media."
    },
    {
        src: {Vacation},
        alt: 'Vacation',
        name: 'VACATION',
        text: "the quantities, characters, or symbols on which operations are performed by a computer,which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media."
    },
]

export const GalleryData = [
    {
        src: { Blueriver },
        alt: 'Blue River',
    },
    {
        src: { Handcamera },
        alt: 'Camera',
    },
    {
        src: { Mountain },
        alt: 'Mountain',
    },
    {
        src: { Tree },
        alt: 'Tree',
    },
    {
        src: { Birthday },
        alt: 'Birthday',
    },
]

export const GalleryVideoData = [
    {
        src: { English },
        title: 'English',
    },
    {
        src: { Hindi },
        title: 'Hindi',
    },
    {
        src: 'https://www.youtube.com/watch?v=mYmfW2LKAeQ',
        title: 'Adar Poonawalla leaves India for UK - Get threat calls from powerful people',
    },
    {
        src: 'https://www.youtube.com/watch?v=YoThngCrGGc',
        title: 'Pehla Nasha Pehla Khumar Full HD',
    },
    {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        title: 'Elephants Dream',
    },
]

export const Address = [
    {
        name: 'Home',
        href: '/',
        class: "fas fa-home"
    },
    {
        name: 'About',
        href: '/about',
        class: "fas fa-info-circle"
    },
    {
        name: 'Gallery',
        href: '/gallery',
        class: "far fa-image"
    },
    {
        name: 'SignIn',
        href: '#login',
        class: "fas fa-user"
    },
]

export const FollowId = [
    {
        data: 'fab fa-facebook-square',
        href: '#facebook',
    },
    {
        data: 'fab fa-instagram-square',
        href: '#instagram',
    },
    {
        data: 'fab fa-linkedin',
        href: '#linkedin',
    },
    {
        data: 'fab fa-twitter-square',
        href: '#twitter',
    },
]