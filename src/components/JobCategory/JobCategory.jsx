import { useEffect, useState } from "react";
import Category from "../Category/Category";


const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])

    return (
        <div className="mb-48">
            <div>
                <h1 className="text-4xl text-center font-extrabold">Job Category List</h1>
                <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex items-center justify-center gap-5 mt-12">
                {
                    jobCategory.map(category => <Category key={category.id} category={category}></Category>)
                }

            </div>
        </div>
    );
};

export default JobCategory;