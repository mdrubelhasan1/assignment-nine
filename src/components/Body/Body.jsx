import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faGears, faPeopleGroup, faRankingStar} from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommons, faCreativeCommonsSampling } from '@fortawesome/free-brands-svg-icons';
const Body = () => {
    return (
        <div>
             <div className='flex justify-between mr-20 ml-20'>
                <div className='bg-stone-200 p-8 rounded-md'>
                    <div className='bg-slate-400 w-3/6 p-4 rounded-md'>
                        <FontAwesomeIcon className='w-3/7 h-5/6 ' icon={faFileInvoiceDollar} />
                    </div>
                    <h3 className='text-xl font-bold'>Acount & Finance</h3>
                    <p className='font-medium text-base'>300 Jobs Avilable</p>
                </div>
                <div className='bg-stone-200 p-8 rounded-md'>
                    <div className='bg-slate-400 w-3/6 p-4 rounded-md'>
                    <FontAwesomeIcon className='w-3/7 h-5/6 ' icon={faCreativeCommonsSampling} />
                    </div>
                    <h3 className='text-xl font-bold'>Creative Design</h3>
                    <p className='font-medium text-base'>100+ Jobs Avilable</p>
                </div>
                <div className='bg-stone-200 p-8 rounded-md'>
                    <div className='bg-slate-400 w-3/6 p-4 rounded-md'>
                    <FontAwesomeIcon className='w-3/7 h-5/6 ' icon={faPeopleGroup} />
                    </div>
                    <h3 className='text-xl font-bold'>Marketing & Sales</h3>
                    <p className='font-medium text-base'>150 Jobs Avilable</p>
                </div>
                <div className='bg-stone-200 p-8 rounded-md'>
                    <div className='bg-slate-400 w-3/6 p-4 rounded-md'>
                        <FontAwesomeIcon className='w-3/7 h-5/6 ' icon={faGears} />
                    </div>
                    <h3 className='text-xl font-bold'>Engineering Job</h3>
                    <p className='font-medium text-base'>224 Jobs Avilable</p>
                </div>
            </div>
        </div>
    );
};

export default Body;