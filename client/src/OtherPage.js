import React from 'react';
import { Link } from 'react-router-dom';

const secondPage = () => {
    return (
        <div>
            I'm another page
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default secondPage;
