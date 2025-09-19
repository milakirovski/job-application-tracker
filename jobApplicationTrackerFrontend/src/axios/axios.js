import axios from "axios";

// In Vite, environment variables are accessed via `import.meta.env`
// and must be prefixed with `VITE_` to be exposed to the client.
// This code now correctly reads the variable and defaults to a relative path.

/*For Kubernetes: When your DockerfileFrontend runs npm run build, it's a production build.
 Vite does not load the .env.production file. In this case, import.meta.env.VITE_API_URL will be undefined.
*/

// const baseURL = import.meta.env.VITE_API_URL;
const baseURL = "/api";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;

// const baseURL = 'http://localhost:8080/api'
//
// const axiosInstance = axios.create({
//     baseURL: baseURL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });
//
// export default axiosInstance;