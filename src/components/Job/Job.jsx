import React from 'react';

const Job = (props) => {
    console.log(props)
    const { company_logo, company_name, contact_information, educational_requirements, experiences, fulltime_or_parttime, job_description, job_responsibility, job_title, location, remote_or_onsite, salary } = props.job;
    console.log(salary);
    return (
        <div className='border-2 rounded-md ml-20 bg-slate-50'>
            <div className='p-4'>
                <img className='w-52 h-12' src={company_logo} alt="" />
                <h3 className='text-2xl	font-extrabold'>{job_title}</h3>
                <p>{company_name}</p>
                <p>{fulltime_or_parttime}</p>
                <div className='flex gap-4'>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <button className='bg-indigo-500 text-white p-2 rounded mt-2'>View Details</button>
            </div>
        </div>
    );
};

export default Job;