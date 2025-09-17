import {Box, Button, CircularProgress} from "@mui/material";
import JobsGrid from "../../components/jobs/JobsGrid.jsx";
import useJobs from "../../../hooks/useJobs.js";
import {useState} from "react";
import AddJobDialog from "../../components/jobs/dialogs/AddJobDialog.jsx";

const JobsPage = () => {
    const {jobs, loading, onAdd, onEdit, onDelete} = useJobs();
    const [addJobDialogOpen, setAddJobDialogOpen] = useState(false);


    return (
        <>
            <Box className="job-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" sx={{px: 2, bgcolor: "#ff4d1f"}}
                                    onClick={() => setAddJobDialogOpen(true)}>
                                Create Job
                            </Button>
                        </Box>
                        <JobsGrid jobs={jobs} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddJobDialog
                open={addJobDialogOpen}
                onClose={() => setAddJobDialogOpen(false)}
                onAdd={onAdd}
            />

        </>
    );
};

export default JobsPage;
