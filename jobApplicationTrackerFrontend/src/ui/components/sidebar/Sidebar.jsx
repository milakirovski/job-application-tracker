// Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
    Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider
} from "@mui/material";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const sections = [
    // {
    //     title: "MENU",
    //     items: [
    //         { to: "/dashboard", label: "Dashboard", icon: <GridViewRoundedIcon /> },
    //     ],
    // },
    {
        title: "RECRUITMENT",
        items: [
            { to: "/jobs", label: "Jobs", icon: <WorkOutlineRoundedIcon /> },
        ],
    },
    // {
    //     title: "ORGANIZATION",
    //     items: [
    //         { to: "/structures", label: "Structures", icon: <ApartmentRoundedIcon /> },
    //         { to: "/reports", label: "Reports", icon: <AssessmentRoundedIcon /> },
    //         { to: "/settings", label: "Settings", icon: <SettingsRoundedIcon /> },
    //     ],
    // },
];

export default function Sidebar() {
    return (
        <Box
            className="sidebar"
            component="nav"
            sx={{
                width: 250,
                maxHeight: "100vh",
                position: "sticky",
                top: 0,
                px: 2,
                py: 3,
                bgcolor: "#2a3145",          // dark navy
                color: "rgba(255,255,255,0.92)",
                gap: 2,
            }}
        >
            {/* Sections */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {sections.map((section) => (
                    <Box key={section.title}>
                        <Typography
                            variant="overline"
                            sx={{ letterSpacing: 1.2, opacity: 0.7, display: "block", mb: 1 }}
                        >
                            {section.title}
                        </Typography>

                        <List disablePadding>
                            {section.items.map((item) => (
                                <ListItemButton
                                    key={item.to}
                                    component={NavLink}
                                    to={item.to}
                                    sx={{
                                        mb: 1,
                                        px: 1.5,
                                        py: 1,
                                        borderRadius: 999,                  // pill
                                        color: "rgba(255,255,255,0.9)",
                                        "& .MuiListItemIcon-root": {
                                            minWidth: 40,
                                            color: "inherit",
                                        },
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.06)",
                                        },
                                        // active state from NavLink: adds 'active' class
                                        "&.active": {
                                            bgcolor: "#ff4d1f",               // orange pill
                                            color: "#fff",
                                            "& .MuiListItemIcon-root": { color: "#fff" },
                                        },
                                    }}
                                    end
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
