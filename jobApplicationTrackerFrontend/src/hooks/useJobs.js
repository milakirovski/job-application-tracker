import {useCallback, useEffect, useState} from "react";
import {jobRepository} from "../repository/jobRepository.js";


const initialState = {
    "jobs":[],
    "loading": true
};



const useJobs = () => {
    const [state, setSate] = useState(initialState);


    const fetchJobs = useCallback(() => {
        setSate(initialState);
        jobRepository
            .findAll()
            .then((response) => {
                setSate({
                    "jobs": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);


    const onAdd = useCallback((job) => {
        jobRepository
            .add(job)
            .then(() => {
                console.log("Successfully added new job");
                fetchJobs();
            })
            .catch((error) => console.log(error))
    },[fetchJobs])

    const onEdit = useCallback((id, job) => {
        jobRepository
            .update(id, job)
            .then(() => {
                console.log(`Successfully edited the job with ID ${id}.`);
                fetchJobs();
            })
            .catch((error) => console.log(error));
    }, [fetchJobs]);

    const onDelete = useCallback((id) => {
        jobRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the job with ID ${id}.`);
                fetchJobs();
            })
            .catch((error) => console.log(error));
    }, [fetchJobs]);


    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);


    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};
};

export default useJobs;
