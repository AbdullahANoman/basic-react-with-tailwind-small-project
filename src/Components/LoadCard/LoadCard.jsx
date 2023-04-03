import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';

const LoadCard = () => {
    const [prices,setPrices] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div>
            <h1 className='text-6xl font-bold text-center text-purple-900 p-5 bg-purple-400'>Awesome Affordable Price </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
            {
                prices.map(price=>(
                    <ShowCard key={price.id} price={price}></ShowCard>
                ))
            }
            </div>
        </div>
    );
};

export default LoadCard;