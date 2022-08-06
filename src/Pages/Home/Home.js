import React from 'react';
import SetTitle from '../../Utilities/SetTitle';


const Home = () => {
    return (
        <div className='h-[calc(100vh-288px)] flex items-center justify-center'>
            <SetTitle>Home</SetTitle>

            <h1 className='text-primary text-3xl lg:text-9xl'><span className='text-red-600'>W</span>e<span className='text-red-600'>l</span>c<span className='text-red-600'>o</span>m<span className='text-red-600'>e</span></h1>
        </div>
    );
};

export default Home;