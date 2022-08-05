import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[calc(100vh-288px)] flex justify-center items-center'>
            <div>
                <h1 className='text-5xl text-center text-red-500'>404</h1>
                <h1 className='text-xl text-center text-secondary'>Sorry! Can't find the page.</h1></div>
        </div>
    );
};

export default NotFound;