import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { saveJobApplication } from '../utility/localstorage';
import toast, { Toaster} from 'react-hot-toast';

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
          <h2 className="text-2xl">Side things</h2>
          <button onClick={handleApplyJob} className="bg-indigo-500 text-white w-full rounded-md">Apply Now</button>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default JobsDetailsPage;