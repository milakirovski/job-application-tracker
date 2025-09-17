import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./ui/components/layout/Layout.jsx";
import JobsPage from "./ui/pages/JobsPage/JobsPage.jsx";
import JobDetails from "./ui/components/jobs/JobDetails.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<JobsPage/>}/>
                    <Route path="jobs" element={<JobsPage />} />
                    <Route path="/jobs/details/:id" element={<JobDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App
