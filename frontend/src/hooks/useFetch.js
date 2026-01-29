import { useEffect, useState } from "react"
import apiProducts from "../api/apiProducts";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        if (!url) return; // Don't fetch if url is null/undefined
        
        try {
            setIsLoading(true);
            setError(null); // Clear previous errors
            const response = await apiProducts.get(url);
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!url) {
            setData([]);
            return;
        }
        fetchData();
    }, [url]);

    // Return refetch function so it can be called manually
    return {
        data,
        isLoading,
        error,
        refetch: fetchData
    };
};

export default useFetch;