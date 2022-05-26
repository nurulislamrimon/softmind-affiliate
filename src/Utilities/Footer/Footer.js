import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center bg-dark text-white py-2 lh-1'>
            <p className='lh-1'>All rights reserved</p>
            <b>&copy;Softmind.agency {year}</b>
        </footer>
    );
};

export default Footer;