import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='md:flex gap-5 justify-center  h-14 items-center uppercase'>
            <CustomLink className='border-b-2 p-3' to='/'>Home</CustomLink>
            <CustomLink className='border-b-2 p-3' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='border-b-2 p-3' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='border-b-2 p-3' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='border-b-2 p-3' to='/about'>About</CustomLink>

        </nav>
    );
};

export default Navbar;