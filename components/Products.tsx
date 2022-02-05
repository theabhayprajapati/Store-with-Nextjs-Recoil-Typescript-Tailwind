import React from 'react';

const Products = ({ title, image, description, rating }) => {
    return <div>
        <div className='border-3'>
            {/* <img src={image} alt="not found" className=' object-contain' /> */}
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>;
};

export default Products;
