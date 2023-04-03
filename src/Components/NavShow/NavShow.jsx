import React from 'react';

const NavShow = ({link}) => {
    return (
        <li className='list-none md:ml-12'>
            <a href={link.link}>{link.name}</a>
        </li>
    );
};

export default NavShow;