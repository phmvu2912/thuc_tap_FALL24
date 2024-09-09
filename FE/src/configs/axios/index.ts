import axios from "axios";

const instance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 3000
});

export default instance