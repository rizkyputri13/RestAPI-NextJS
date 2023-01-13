import axios from 'axios';
import { domain } from '../config/config';

const getJobs = async () => {
    try {
        const result = await axios.get(`${domain}/jobs/jobLists`);
        return result;
    } catch (error) {
        return error;
    }
}

const getJob = async (id) => {
    try {
        const result = await axios.get(`${domain}/jobs/jobList/${id}`);
        return result;
    } catch (error) {
        return error;
    }
}

export default {getJobs, getJob}