import React from "react";
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Typography,
    Paper,
    Stack,
    Breadcrumbs,
    Link,
    Divider,
    Chip,
    Card,
    CardContent
} from "@mui/material";
import {
    ArrowBack,
    FavoriteBorder,
    Share,
    Language,
    WorkOutline,
    Business,
    Place,
    AccessTime,
    CalendarMonth,
} from "@mui/icons-material";
import { amber, green, grey, pink, red } from "@mui/material/colors";
import useJobDetails from "../../../hooks/useJobDetails.jsx";

// --- helpers ---
const formatDate = (d) => {
    if (!d) return "-";
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString();
};

const statusChip = (status) => {
    const palette = {
        NOT_APPLIED_YET: { bg: grey[300], color: "#000" },
        PENDING: { bg: pink[100], color: "#111" },
        SCHEDULED_1st_INTERVIEW: { bg: pink[400], color: "#fff" },
        SCHEDULED_2nd_INTERVIEW: { bg: pink[700], color: "#fff" },
        ACCEPTED: { bg: green[600], color: "#fff" },
        REJECTED: { bg: red[600], color: "#fff" },
        WITHDRAWN: { bg: amber[700], color: "#111" },
    };
    const s = palette[status] ?? { bg: grey[300], color: "#000" };
    return (
        <Chip
            label={status?.replaceAll("_", " ") ?? "STATUS"}
            sx={{
                bgcolor: s.bg,
                color: s.color,
                fontWeight: 600,
                letterSpacing: 0.25,
            }}
            size="small"
        />
    );
};

const MetaRow = ({ icon, label, value, link }) => (
    <Stack direction="row" spacing={1.5} alignItems="center">
        {icon}
        <Typography variant="body2" sx={{ minWidth: 120, color: "text.secondary" }}>
            {label}
        </Typography>
        {link ? (
            <Link component={RouterLink} to={link} target="_blank" rel="noopener" underline="hover">
                {value}
            </Link>
        ) : (
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {value ?? "-"}
            </Typography>
        )}
    </Stack>
);

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { job } = useJobDetails(id);

    if (!job) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            {/* Breadcrumbs */}
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link component={RouterLink} color="inherit" underline="hover" to="/jobs">
                    Jobs
                </Link>
                <Typography color="text.primary">{job.title}</Typography>
            </Breadcrumbs>

            {/* Hero Header */}
            <Paper
                elevation={0}
                sx={{
                    mb: 3,
                    borderRadius: 4,
                    p: 3,
                    background: (theme) =>
                        `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.action.hover})`,
                }}
            >
                <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={2}>
                    <Box>
                        <Typography variant="overline" sx={{ opacity: 0.7 }}>
                            Job
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                            {job.title}
                        </Typography>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
                            <Business fontSize="small" />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {job.company}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Place fontSize="small" />
                            <Typography variant="body2">{job.location ?? "-"}</Typography>
                            <Divider orientation="vertical" flexItem />
                            {statusChip(job.status)}
                        </Stack>
                    </Box>

                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" color="secondary" startIcon={<FavoriteBorder />}>
                            Wishlist
                        </Button>
                        <Button variant="outlined" startIcon={<Share />}>
                            Share
                        </Button>
                        <Button variant="contained" onClick={() => navigate("/jobs")} startIcon={<ArrowBack />}>
                            Back
                        </Button>
                    </Stack>
                </Stack>
            </Paper>

            <Grid container spacing={3}>
                {/* Left column: Quick facts */}
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                                Quick Facts
                            </Typography>

                            <Stack spacing={1.25}>
                                <MetaRow icon={<WorkOutline fontSize="small" />} label="Position" value={job.position} />
                                <MetaRow icon={<WorkOutline fontSize="small" />} label="Work Mode" value={job.workMode} />
                                <MetaRow icon={<WorkOutline fontSize="small" />} label="Work Type" value={job.workType} />
                                <MetaRow icon={<WorkOutline fontSize="small" />} label="Field" value={job.fieldOfInterest} />
                                <MetaRow icon={<CalendarMonth fontSize="small" />} label="Open Date" value={formatDate(job.openDate)} />
                                <MetaRow icon={<CalendarMonth fontSize="small" />} label="Close Date" value={formatDate(job.closeDate)} />
                                <MetaRow icon={<AccessTime fontSize="small" />} label="Updated" value={formatDate(job.updatedAt)} />
                                <MetaRow
                                    icon={<Language fontSize="small" />}
                                    label="Website"
                                    value={job.companyWebsite || "-"}
                                    link={job.companyWebsite ? job.companyWebsite : undefined}
                                />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right column: Description */}
                <Grid item xs={12} md={8}>
                    <Card variant="outlined" sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                                About the Role
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, mb: 2 }}>
                                {job.description || "No description provided."}
                            </Typography>

                            <Divider sx={{ my: 2 }} />
                            <Stack direction="row" spacing={2} flexWrap="wrap">
                                <Chip label={job.workMode ?? "Work Mode"} variant="outlined" />
                                <Chip label={job.workType ?? "Work Type"} variant="outlined" />
                                {job.fieldOfInterest && <Chip label={job.fieldOfInterest} variant="outlined" />}
                                {job.position && <Chip label={job.position} variant="outlined" />}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Bottom actions (mobile friendly) */}
                <Grid item xs={12}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1}
                        justifyContent="space-between"
                        sx={{ mt: 1 }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Button variant="outlined" color="secondary" startIcon={<FavoriteBorder />}>
                                Wishlist
                            </Button>
                            <Button variant="outlined" startIcon={<Share />}>
                                Share
                            </Button>
                        </Stack>
                        <Button variant="outlined" startIcon={<ArrowBack />} onClick={() => navigate("/jobs")}>
                            Back to Jobs
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default JobDetails;
