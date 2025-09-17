import {Grid} from "@mui/material";
import JobCard from "./JobCard.jsx";

const JobsGrid = ({jobs, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {jobs.map((job) => (
                <Grid key={job.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <JobCard job={job} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default JobsGrid;
