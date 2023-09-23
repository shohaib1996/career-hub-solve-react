const getStoredJobApplications = () => {
    const storedJobApplications = localStorage.getItem('job-applications');
    if (storedJobApplications) {
        return JSON.parse(storedJobApplications);
    } else {
        return [];
    }
};

const saveJobApplications = id => {
    const storedJobApplications = getStoredJobApplications();
    const exists = storedJobApplications.find(jobId => jobId === id)
    // const exists = storedJobApplications.includes(id);
    if(!exists){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }

}

export {saveJobApplications, getStoredJobApplications}