import React, { useState } from 'react';
import axios from 'axios';
const PhoneBar = () => {
    const [phones,setPhones] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>console.log(data))
    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;