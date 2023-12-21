import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {/* Header-section */}
            <div className='flex justify-between pt-4 bg-slate-50'>
                <div className=''>
                    <h1 className='text-7xl font-extrabold ml-20'>{data.title}</h1>
                    <p className='ml-20 text-slate-400 text-sm font-medium'>{data.details}</p>
                    <button className='my-11 ml-20 pl-3 pr-3 pt-2 pb-2 bg-cyan-500  hover:bg-cyan-600 rounded text-white'>Get Started</button>
                </div>
                <div className=''>
                    <img className='ml-20 w-3/5 h-5/6 rounded' src={data.img} alt="" />
                </div>
            </div>
            {/* Body-section */}
        </div>
    );
};

export default Header;