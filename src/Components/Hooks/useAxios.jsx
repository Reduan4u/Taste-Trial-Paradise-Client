import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://taste-trial-paradise-server.vercel.app',
    withCredentials: true,
});

const useAxios = () => {
    return instance
};

export default useAxios;