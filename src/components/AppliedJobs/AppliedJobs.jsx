import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";
import DisplayJobs from "../DisplayJobs/DisplayJobs";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJob(appliedJob);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJobs);
        }
       
    }

    useEffect(() => {
        const storedJobs = getStoredJobApplications();
        if (jobs.length > 0) {
            const jobApplied = jobs.filter(job => storedJobs.includes(job.id));
            // const jobsApplied = [];
            // for (const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     if (job) {
            //         jobsApplied.push(job)
            //     }
            // }
            setAppliedJob(jobApplied)
            setDisplayJob(jobApplied)

        }

    }, [jobs])

    return (
        <div className="">
            <h1 className="text-center text-5xl font-bold mt-24 mb-12">Applied jobs: {appliedJob.length}</h1>
            <div className="flex justify-end max-w-screen-lg mx-auto mb-12">
                <details className="dropdown ">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="">
                {
                    displayJob.map(job => <DisplayJobs key={job.id} job={job}></DisplayJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;