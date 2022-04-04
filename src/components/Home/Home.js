import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Camera from '../../Assets/alexander-wang-KjyrxSHwqTg-unsplash.jpg'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    // const [reviews, setReview] = useState([])
    const [reviews, setReview] = useReviews()
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setReview(data))
    // }, [])

    const navigate = useNavigate()

    const newReview = reviews.slice(0, 3)
    return (
        // banner section 
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto mt-12 gap-5'>
                <div className='md:col-span-1'>
                    <img className='rounded' src={Camera} alt="" />
                </div>
                <div className='md:col-span-2 flex flex-col w-9/12 justify-center mx-auto '>
                    <h1 className='text-5xl text-blue-500'>Canon Camera Reviews</h1>
                    <p className='text-xl m-5'>The Canon EOS 5D Mark IV boasts a huge array of high end features, including a 30 megapixel full frame CMOS imaging sensor and Canon's latest AF system, for a significantly lower price than Canon's current 1-Series model. This value and versatility, as with all EOS 5-Series models before it</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto'>Live Demo</button>
                </div>

            </div>
            <h1 className='my-32 text-5xl font-bold '>Customer Reviews(3)</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto gap-5'>
                {
                    newReview.map(item => <Review key={item.id} item={item}></Review>)
                }

            </div>
            <button onClick={() => navigate('/reviews')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20'>See All Reviews</button>

        </div>
    );
};

export default Home;