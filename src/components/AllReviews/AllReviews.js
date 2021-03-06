import React from 'react';

const AllReviews = ({ item }) => {
    console.log(item);
    const { picture, rating, name, review } = item

    return (
        <div>
            <div className=' mx-auto mt-24 border shadow w-72 p-5' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500">

                <img className='w-24 h-24 object-cover rounded-full mx-auto' src={picture} alt="" />
                <h2 className='text-2xl m-5'>{name}</h2>
                <p>Rating: {rating}</p>
                <p className='mt-5'>{review.slice(0, 100)}...</p>

            </div>

        </div>
    );
};

export default AllReviews;