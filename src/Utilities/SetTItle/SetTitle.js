import React from 'react';
import Helmet from 'react-helmet';

const SetTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} :: Softmind Affiliate</title>
        </Helmet>
    );
};

export default SetTitle;