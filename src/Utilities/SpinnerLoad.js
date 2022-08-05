import React from 'react';

const SpinnerLoad = () => {
    return (
        <div className="h-[calc(100vh-288px)] flex items-center justify-center">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default SpinnerLoad;