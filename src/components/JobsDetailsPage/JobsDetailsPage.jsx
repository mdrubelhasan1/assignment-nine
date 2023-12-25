import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { saveJobApplication } from '../utility/localstorage';
import toast, { Toaster} from 'react-hot-toast';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faDollerSign} from '@fortawesome/free-brands-svg-icons'
// import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


const JobsDetailsPage = () => {
  const jobsData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobsData.find(job => job.id === idInt);
  console.log(job);

  
  const handleApplyJob = () =>{
    saveJobApplication(idInt);
    toast('You have applied successfully');
}

  return (
    <div>
      <h3 className='text-center text-3xl	font-extrabold'>Job Details</h3>
      <div className="grid gap-4 md:grid-cols-6 mt-10 mb-10 ml-20">
        <div className="border md:col-span-4 p-4">
          <h2><span className="text-base font-extrabold	">Job Description: </span>{job.job_description}</h2>
          <h2><span className="text-base font-extrabold	">Job Responsibility:</span> {job.job_responsibility}</h2>
          <h2><span className="text-base font-extrabold	">Educational Requerements: </span> <br />
            {job.educational_requirements}</h2>
          <h2><span className="text-base font-extrabold	">Experience:</span> <br />
            {job.experiences}</h2>
        </div>
        <div className="border  md:col-span-2 mr-10 bg-slate-200	rounded-lg	">
          <h2 className="text-xl font-extrabold	pl-2">Jobs Details</h2>
          {/* <FontAwesomeIcon icon={faDollarSign} /> */}
          <div className='pl-2'>
            <h2><span  className='text-sm	font-semibold'>Salary:</span>{job.salary}</h2>
            <h2><span className='text-sm	font-semibold'>Job Title:</span> {job.job_title}</h2>
            <p className='text-sm	font-bold'>Contact Information:</p>
            <hr/>
            <h2><span className='text-sm	font-semibold'>Phone:</span>{job.contact_information.phone}</h2>
            <h2><span className='text-sm font-semibold'>Email:</span> {job.contact_information.email}</h2>
            <h2><span className='text-sm font-semibold'>Address: </span>{job.location}</h2>
          </div>


          <button onClick={handleApplyJob} className="bg-indigo-500 text-white w-full rounded-md">Apply Now</button>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default JobsDetailsPage;