import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='grid grid-cols-3  p-4 justify-between justify-items-center bg-green-500'>
            <div>
                <Link className='text-white pl-20 align-middle' to='/'>JobPortal</Link>
            </div>
            <div className='text-center'>
                <Link className='text-white mr-12 ml-0 hover:bg-green-700 p-2 rounded align-middle' to='/'>Home</Link>
                <Link className=' text-white mr-12 hover:bg-green-700 p-2 rounded align-middle' to='/statistics'>Statistics</Link>
                <Link className=' text-white mr-12 hover:bg-green-700 p-2 rounded align-middle' to='/appliedjob'>Applyed Job</Link>
                <Link className='text-white  hover:bg-green-700 p-2 rounded align-middle' to='/blog'>Blog</Link>
            </div>
            <div className='text-white ml-20 text-right mr-20'>
                <button className=' p-2 rounded bg-indigo-700 hover:bg-indigo-950'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Navbar;