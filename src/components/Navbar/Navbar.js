import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex gap-5 justify-center shadow-md h-14 items-center'>
            <Link to='/'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>

        </nav>
    );
};

export default Navbar;