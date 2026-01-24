import { useEffect, useState } from "react"
import apiProducts from "../api/apiProducts";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await apiProducts.get(url);
                setData(response.data); // Axios response data is in .data
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [url])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch;