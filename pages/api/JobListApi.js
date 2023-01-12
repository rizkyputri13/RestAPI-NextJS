import axios from 'axios';
import { domain } from '../config/config';

const getJobs = async () => {
    try {
        const result = await axios.post(`${domain}/jobs/jobLists`);
        return result;
    } catch (error) {
        return error;
    }
}

const getJob = async () => {
    try {
        const result = await axios.post(`${domain}/jobs/jobList${id}`);
        return result;
    } catch (error) {
        return error;
    }
}

export default {getJobs, getJob}