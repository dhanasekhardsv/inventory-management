import React from 'react';
import Home from '../assets/icons/Home.svg';

const CustomBreadcrumb = ({ pathsArray = [] }) => {
    return (
        <div className='flex items-center'>
            <img src={Home} alt="Home" className="h-3.5 w-3.5 cursor-pointer" />
            {
                pathsArray.length > 0 && (
                    pathsArray.map((path, index) => <span key={index}>&nbsp;&nbsp;/&nbsp;&nbsp;<span className='text-gray-400 text-sm cursor-pointer'>{path}</span></span>)
                )
            }
        </div>
    )
}

export default CustomBreadcrumb