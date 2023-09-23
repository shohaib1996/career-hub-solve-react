import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";


const FeatureJobs = () => {
    const [featureJobs, setFeatureJobs] = useState([])
    const [featureLength, setFeatureLength] = useState(4)
    useEffect(() => {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setFeatureJobs(data))

    }, [])

    return (
        <div className="mb-12 max-w-screen-lg mx-auto">
            <div>
                <h1 className="text-4xl text-center font-extrabold">Featured Jobs</h1>
                <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-5 grid-cols-2 mt-12">
                {
                    featureJobs.slice(0, featureLength).map(featureJob => <FeatureJob key={featureJob.id} featureJob={featureJob}></FeatureJob>)
                }
            </div>
           <div className="flex items-center justify-center">
           <button onClick={()=> setFeatureLength(featureJobs.length)} className={`${featureLength === featureJobs.length ? 'hidden' : ' btn btn-primary mt-5 text-white font-bold'}`}>Show All</button>
           </div>
        </div>
    );
};

export default FeatureJobs;