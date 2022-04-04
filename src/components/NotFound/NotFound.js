import React from 'react';
import NotFound404 from '../../Assets/404-error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='h-screen w-screen object-cover' src={NotFound404} alt="" />
        </div>
    );
};

export default NotFound;