import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobCategory from "../JobCategory/JobCategory";


const Home = () => {
    return (
        <div>

            <div className="bg-gradient-to-r from-[#7E90FE0C] to-[#9873FF0D]">
                <div className="flex items-center justify-center gap-2 mb-14 max-w-screen-lg mx-auto">
                    <div className="p-6 space-y-5">
                        <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span></h1>
                        <p className="">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button><a className="btn font-bold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</a></button>
                    </div>
                    <div className="">
                        <img src="/src/assets/images/user.png" alt="" />
                    </div>
                </div>
            </div>
            <JobCategory></JobCategory>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;