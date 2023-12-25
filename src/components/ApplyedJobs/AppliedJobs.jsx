import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utility/localstorage';
import Footer from '../Footer/Footer';

const AppliedJobs = () => {
    const jobsData = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs);
        }
    }

    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobsData.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobsData.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobsData])

    return (
        <div>
            <h2 className="text-2xl text-center">Jobs Applied: {appliedJobs.length}</h2>
            <details className=" text-center dropdown mb-32">
                <h2 className="m-1 btn text-center">Filter By</h2>
                <ul className='text-center'>
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <div className=''>
                {
                    displayJobs.map(job =>
                        <div key={job.id} className=' grid grid-cols-8  border-2 pl-10 ml-80 mr-72 mb-10'>
                            <img className='w-20 h-12 bg-slate-50 mt-3 p-3 rounded-md' src={job.company_logo} alt="" />
                            <div className='ml-10 md:col-span-6'>
                                <h2 className='text-2xl	font-bold'>{job.job_title}</h2>
                                <h2 className='text-2xl	font-semibold'>{job.company_name}</h2>
                                <h2>{job.remote_or_onsite}</h2>
                            </div>
                            <button className='bg-blue-500  rounded-lg hover:bg-blue-800 text-white mt-3 mb-3 '>View Details</button>


                        </div>)

                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;