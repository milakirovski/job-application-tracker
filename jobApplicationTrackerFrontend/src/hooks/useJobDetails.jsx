import {useEffect, useState} from "react";
import {jobRepository} from "../repository/jobRepository.js";

const useJobDetails = (id) => {
    const [state, setState] = useState({
        "job": {},
    })

    useEffect(() => {
        jobRepository
            .detailedView(id)
            .then((response) => {
                setState(prevState => ({
                    ...prevState,
                    "job": response.data,
                }))
            })
            .catch((error) => console.log(error))
    },[id])
    return state;
}

export default useJobDetails;