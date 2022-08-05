import React from 'react';
import SetTitle from '../../Utilities/SetTitle';


const Home = () => {
    return (
        <div className='h-[calc(100vh-288px)] flex items-center justify-center'>
            <SetTitle>Home</SetTitle>

            <h1 className='text-primary text-5xl'>Welcome</h1>
        </div>
    );
};

export default Home;