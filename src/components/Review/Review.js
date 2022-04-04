import React from 'react';

const Review = ({ item }) => {
    const { picture, rating, name, review } = item

    // console.log(item);
    return (
        <div className=' mx-auto mt-24 border shadow w-72 p-5'>

            <img className='w-24 h-24 object-cover rounded-full mx-auto' src={picture} alt="" />
            <h2 className='text-2xl m-5'>{name}</h2>
            <p>Ratings: {rating} Star</p>
            <p className='mt-5'>{review.slice(0, 100)}...</p>

        </div>
    );
};

export default Review;