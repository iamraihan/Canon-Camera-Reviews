import React from 'react';
import Camera from '../../Assets/alexander-wang-KjyrxSHwqTg-unsplash.jpg'

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto mt-12'>
            <div className='md:col-span-1'>
                <img className='rounded' src={Camera} alt="" />
            </div>
            <div className='md:col-span-2 flex flex-col w-9/12 justify-center mx-auto '>
                <h1 className='text-5xl text-blue-500'>Canon Camera Reviews</h1>
                <p className='text-xl m-5'>The Canon EOS 5D Mark IV boasts a huge array of high end features, including a 30 megapixel full frame CMOS imaging sensor and Canon's latest AF system, for a significantly lower price than Canon's current 1-Series model. This value and versatility, as with all EOS 5-Series models before it</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto'>Live Demo</button>
            </div>
        </div>
    );
};

export default Home;