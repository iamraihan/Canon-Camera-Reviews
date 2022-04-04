import React from 'react';
import useReviews from '../../hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {
    const [reviews, setReview] = useReviews()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto'>
            {
                reviews.map(item => <AllReviews key={item.id} item={item}></AllReviews>)
            }

        </div>
    );
};

export default Reviews;