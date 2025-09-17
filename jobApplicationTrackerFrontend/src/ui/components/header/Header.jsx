import {
    AppBar, Toolbar, Box, IconButton, Badge, Avatar, InputBase, Paper, Typography
} from "@mui/material";
import SearchRounded from "@mui/icons-material/SearchRounded";
import HelpOutlineRounded from "@mui/icons-material/HelpOutlineRounded";
import NotificationsNoneRounded from "@mui/icons-material/NotificationsNoneRounded";

const ORANGE = "#ff4d1f";

export default function Header() {
    return (
        <AppBar elevation={0} position="sticky" color="inherit"
                sx={{
                    top: 0,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    bgcolor: "#f7f9fb",
                    zIndex: (t) => t.zIndex.drawer + 1,
                }}
        >
            <Toolbar sx={{ gap: 2 , justifyContent: "space-between"}}>
                <Typography variant="h5">Job Application Tracker Application </Typography>
                {/*/!* Big rounded search *!/*/}
                {/*<Paper*/}
                {/*    sx={{*/}
                {/*        flex: 1,*/}
                {/*        px: 2,*/}
                {/*        py: 0.5,*/}
                {/*        display: "flex",*/}
                {/*        alignItems: "center",*/}
                {/*        borderRadius: 999,*/}
                {/*    }}*/}
                {/*    elevation={0}*/}
                {/*    variant="outlined"*/}
                {/*>*/}
                {/*    <InputBase*/}
                {/*        placeholder="Search…"*/}
                {/*        sx={{ flex: 1, ml: 1 }}*/}
                {/*        inputProps={{ "aria-label": "search" }}*/}
                {/*    />*/}
                {/*    <IconButton*/}
                {/*        sx={{*/}
                {/*            bgcolor: ORANGE,*/}
                {/*            color: "#fff",*/}
                {/*            "&:hover": { bgcolor: ORANGE },*/}
                {/*        }}*/}
                {/*        aria-label="search"*/}
                {/*    >*/}
                {/*        <SearchRounded />*/}
                {/*    </IconButton>*/}
                {/*</Paper>*/}

                {/* Right side icons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton><HelpOutlineRounded /></IconButton>
                    <IconButton>
                        <Badge variant="dot" color="error">
                            <NotificationsNoneRounded />
                        </Badge>
                    </IconButton>
                    <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

