import apiProducts from "../api/apiProducts";
import { useAuth } from "./useAuth"
import useFetch from "./useFetch";

export const useResource = (url) => {
    const {user} = useAuth();

    const {data, error, refetch} = useFetch(user ? url : null);

    const addToResource = async (resourceData) => {
        try {
            await apiProducts.post(url, resourceData);
            refetch();
        } catch (err) {
            console.error('error adding to resource', err);
        }
    }

    const removeFromResource = async (id) => {
        try {
            await apiProducts.delete(`${url}/${id}`);
            refetch();
        } catch (err) {
            console.error('error removing from resource', err);
        }
        
    }

    // const inResource = (id) => {
    //     const target = data.find(p => p.product_id === id);
    //     if(!target) return false;
    //     return true;
    // }

    return {
        data,
        error,
        addToResource,
        removeFromResource,
    }
}