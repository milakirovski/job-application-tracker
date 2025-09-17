import Header from "../header/Header.jsx";
import {Box, Container} from "@mui/material";
import {Outlet} from "react-router";
import "./Layout.css";
import Sidebar from "../sidebar/Sidebar.jsx";


const Layout = () => {
    return (
        <Box className="layout-box">
            <Header/>
            <div className='sidebar-outlet-container'>
                <Sidebar/>
                <Container className="outlet-container" sx={{my: 2}} maxWidth="xl">
                    <Outlet/>
                </Container>
            </div>
        </Box>
    );
};

export default Layout;
