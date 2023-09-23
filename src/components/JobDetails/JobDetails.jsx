import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplications } from "../../utility/localstorage";



const JobDetails = () => {
    const jobs = useLoaderData();
   
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { experiences,job_description,job_responsibility,educational_requirements, job_title, salary, contact_information} = job;
    // console.log(job); 
    console.log(job)

    const handleJobApplication = () =>{
        saveJobApplications(idInt)
    }

    return (
        <div className="max-w-screen-lg mx-auto mb-12">

            <h1 className="text-center text-5xl font-bold mt-24 mb-12">Job details</h1>
            <div className="grid md:grid-cols-4 mt-12">
                <div className="md:col-span-3 space-y-6">
                    <p><span className="font-bold text-2xl">Job Description : </span>{job_description}</p>
                    <p><span className="font-bold text-2xl">Job Responsibility : </span>{job_responsibility}</p>
                    <p><span className="font-bold text-2xl">Educational Requirements : </span>{educational_requirements}</p>
                    <p><span className="font-bold text-2xl">Experiences: </span>{experiences}</p>
                    
                </div>
                <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded">
                    <h1 className="text-xl font-bold p-5">Job details</h1>
                    <div className="p-5">
                        <p>salary: {salary}</p>
                        <p>Job title: {job_title}</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold p-5">contact information</h1>
                        <div className="p-5">
                            <p>Phone: {contact_information.phone}</p>
                            <p>Email: {contact_information.email}</p>
                            <p>Address: {contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleJobApplication} className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;