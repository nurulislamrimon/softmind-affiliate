import React from 'react';
import { Helmet } from 'react-helmet-async';

const SetTitle = ({ children }) => {
    return (
        <Helmet>
            <title>{children} :: Softmind Partners</title>
        </Helmet>
    );
};

export default SetTitle;