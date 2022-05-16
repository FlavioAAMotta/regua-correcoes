import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const token = localStorage.getItem('token');
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getData(url)
    }, [url])

    useEffect(() => {
        localStorage.getItem('token')
    },[])

    const getData = async (url) => {
        setIsLoading(true);
        const config = {
            headers: {
                Authorization: token
            }
        };
        try {
            const response = await axios.get(url, config)
            setIsLoading(false);
            setData(response.data)

        } catch (error) {
            setIsLoading(false);
            setError(error);
        };
    };

    return [data, getData, isLoading, error];
};

export default useRequestData;