import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import JobsDetailsPage from '../JobsDetailsPage/JobsDetailsPage';
import { Link } from 'react-router-dom';

const AvilableJob = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobsdata.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (

        <div>
            <div className='bg-slate-100 pt-10'>
                <h1 className='text-5xl font-extrabold text-center'>Featured Jobs</h1>
                <p className='text-base text-slate-400 font-medium text-center'>Explore thousand of job oppertunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    >
                         
                    </Job>)
                }
            </div>
            <div className='text-center'>
                <button className='bg-indigo-500 text-white p-4 rounded mt-2 mb-10'>
                    See All</button>

            </div>
            
        </div>
    );
};

export default AvilableJob;