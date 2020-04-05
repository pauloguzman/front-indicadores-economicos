import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchResource = async() => {
            try {
                let response = await fetch(url);
                let responseService = await response.json();
                
                if (typeof responseService.data === 'object')
                {
                    let data = Object.values(responseService.data);
                    setData(data);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }
        fetchResource();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;