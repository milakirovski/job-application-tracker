import axiosInstance from "../axios/axios.js";

export const jobRepository = {

    findAll: async () => {
        return await axiosInstance.get("/jobs");
    },
    add: async (job) => {
        return await axiosInstance.post("/jobs/save", job);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/jobs/delete/${id}`);
    },
    update: async (id, job) => {
        return await axiosInstance.put(`/jobs/update/${id}`, job);

    },
    detailedView: async (id) => {
        return await axiosInstance.get(`/jobs/details/${id}`);
    },

    getAllPossibleFieldsOfInterest: async () => {
        return await axiosInstance.get("/jobs/field-of-interest-options");
    },

    getAllPossibleJobStatuses: async () => {
        return await axiosInstance.get("/jobs/job-status");
    },

    getAllPossibleJobPositionLevels: async () => {
        return await axiosInstance.get("/jobs/position-level");
    },

    getAllPossibleWorkTypes: async () => {
        return await axiosInstance.get("/jobs/work-type");
    },

    getAllPossibleWorkModes: async () => {
        return await axiosInstance.get("/jobs/work-mode");
    }

};