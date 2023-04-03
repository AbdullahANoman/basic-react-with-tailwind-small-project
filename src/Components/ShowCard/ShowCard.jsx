import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
const ShowCard = ({price}) => {
    const features = price.features;
    return (
        <div className='bg-purple-300 p-5 rounded flex flex-col mx-4'>
            <span className='text-purple-700 font-bold text-6xl'>{price.price}</span><span className='text-3xl'>/mon</span>
            <p className='text-3xl font-bold'>{price.type}</p>
            <div className='mt-5 mb-5'>
            {
                features.map(feature=>(
                    <>
                    <p className='text-lg '>  <CheckIcon className="h-4 w-4 text-blue-500 inline-block" /> {feature}</p>
                    </>
                ))
            }
            </div>
            <button className='text-2xl font-semibold text-white py-2 w-1/2 bg-purple-500 hover:bg-purple-800 rounded mt-auto'>Buy Now</button>
        </div>
    );
};

export default ShowCard;