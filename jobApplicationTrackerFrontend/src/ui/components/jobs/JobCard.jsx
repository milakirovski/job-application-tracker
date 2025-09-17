import { useState, memo } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    Divider,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    Avatar,
} from "@mui/material";
import { amber, green, grey, pink, red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";

import EditJobDialog from "./dialogs/EditJobDialog.jsx";
import DeleteJobDialog from "./dialogs/DeleteJobDialog.jsx";

const statusStyle = (status) => {
    switch (status) {
        case "NOT_APPLIED_YET": return { bg: grey[300], color: "#000" };
        case "PENDING": return { bg: pink[100], color: "#111" };
        case "SCHEDULED_1st_INTERVIEW": return { bg: pink[400], color: "#fff" };
        case "SCHEDULED_2nd_INTERVIEW": return { bg: pink[700], color: "#fff" };
        case "ACCEPTED": return { bg: green[600], color: "#fff" };
        case "REJECTED": return { bg: red[600], color: "#fff" };
        case "WITHDRAWN": return { bg: amber[700], color: "#111" };
        default: return { bg: grey[300], color: "#000" };
    }
};

const JobCard = memo(({ job, onEdit, onDelete }) => {
    const [editJobDialogOpen, setEditJobDialogOpen] = useState(false);
    const [deleteJobDialogOpen, setDeleteJobDialogOpen] = useState(false);
    const navigate = useNavigate();

    const { bg, color } = statusStyle(job.status);

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        if (isNaN(date)) return dateString; // fallback if invalid date

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    transition: "transform .15s ease, box-shadow .15s ease, border-color .15s ease",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 6,
                        borderColor: (t) => t.palette.primary.light,
                    },
                }}
            >
                {/* Header with company + status */}
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{
                                bgcolor: (t) => t.palette.grey[200],
                                color: "text.primary",
                                fontWeight: 700,
                            }}
                        >
                            {job.company?.[0]?.toUpperCase() ?? "J"}
                        </Avatar>
                    }
                    title={
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.2,
                                display: "inline-block",
                                pr: 1,
                            }}
                            component={RouterLink}
                            to={`/jobs/details/${job.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            {job.title}
                        </Typography>
                    }
                    subheader={
                        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                            <Typography variant="body2" sx={{ opacity: 0.85, fontWeight: 600 }}>
                                {job.company}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <PlaceIcon fontSize="small" />
                                <Typography variant="body2">{job.location ?? "-"}</Typography>
                            </Stack>
                        </Stack>
                    }
                    action={
                        <Chip
                            label={job.status?.replaceAll("_", " ") ?? "STATUS"}
                            size="small"
                            sx={{ bgcolor: bg, color, fontWeight: 700 }}
                        />
                    }
                    sx={{
                        pb: 0.5,
                        background: (t) =>
                            `linear-gradient(135deg, ${t.palette.background.paper}, ${t.palette.action.hover})`,
                    }}
                />

                <CardContent sx={{ pt: 1.5, pb: 1.5 }}>
                    {/* Meta chips */}
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {!!job.workMode && <Chip icon={<WorkOutlineIcon />} variant="outlined" size="small" label={job.workMode} />}
                        {!!job.workType && <Chip variant="outlined" size="small" label={job.workType} />}
                        {!!job.fieldOfInterest && <Chip variant="outlined" size="small" label={job.fieldOfInterest} />}
                    </Stack>

                    <Divider sx={{ my: 1.5 }} />

                    {/* Dates + extras */}
                    <Stack
                        direction="row"
                        gap={2}
                        flexWrap="wrap"
                        alignItems="center"
                        sx={{ color: "text.secondary" }}
                    >
                        <Stack direction="row" spacing={0.75} alignItems="center">
                            <CalendarMonthIcon fontSize="small" />
                            <Typography variant="caption">
                                Open: {formatDate(job.openDate)}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.75} alignItems="center">
                            <ScheduleIcon fontSize="small" />
                            <Typography variant="caption">
                                Close: {formatDate(job.closeDate)}
                            </Typography>
                        </Stack>
                        {!!job.companyWebsite && (
                            <Stack direction="row" spacing={0.75} alignItems="center">
                                <LanguageIcon fontSize="small" />
                                <Typography
                                    variant="caption"
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => window.open(job.companyWebsite, "_blank", "noopener")}
                                >
                                    Company site
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                    <Button
                        size="small"
                        variant="contained"
                        startIcon={<InfoIcon />}
                        onClick={() => navigate(`/jobs/details/${job.id}`)}
                    >
                        About the Job
                    </Button>

                    <Box>
                        <Tooltip title="Edit">
                            <IconButton
                                color="warning"
                                sx={{ mr: 0.5 }}
                                onClick={() => setEditJobDialogOpen(true)}
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton color="error" onClick={() => setDeleteJobDialogOpen(true)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </CardActions>
            </Card>

            {/* Dialogs */}
            <EditJobDialog
                open={editJobDialogOpen}
                onClose={() => setEditJobDialogOpen(false)}
                jobToEdit={job}
                onEdit={onEdit}
            />
            <DeleteJobDialog
                open={deleteJobDialogOpen}
                onClose={() => setDeleteJobDialogOpen(false)}
                job={job}
                onDelete={onDelete}
            />
        </>
    );
});

export default JobCard;
