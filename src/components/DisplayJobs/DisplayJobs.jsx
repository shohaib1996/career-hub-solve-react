import PropTypes from 'prop-types';
import { FaDollarSign, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayJobs = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id } = job;

    return (
        <div className='max-w-screen-lg mx-auto mb-5'>
            <div className=" card-compact py-10 px-5 bg-base-100 shadow-xl flex items-center">
                <div className=''>
                    <figure className='ml-4 w-[200px]'><img src={logo} alt="Shoes" /></figure>
                </div>
                <div className="ml-5 flex-grow">
                    <div>
                        <h2 className="card-title">{job_title}</h2>
                        <p>{company_name}</p>
                        <div>
                            <button className='text-[#9873FF] font-bold border border-[#9873FF] rounded-md px-5 py-3 mr-2 '>{remote_or_onsite}</button>
                            <button className='text-[#9873FF] font-bold border border-[#9873FF] rounded-lg px-5 py-3'>{job_type}</button>
                        </div>
                        <div className='mt-3 mb-3 flex gap-3'>
                            <div><h1 className='flex items-center gap-3'><FaLocationArrow className='text-xl'></FaLocationArrow>{location}</h1></div>
                            <div> <h1 className='flex items-center gap-3'><FaDollarSign className='text-xl'></FaDollarSign>{salary}</h1></div>

                        </div>
                    </div>

                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>

        </div>
    );
};
DisplayJobs.propTypes = {
    job: PropTypes.object.isRequired
}

export default DisplayJobs;