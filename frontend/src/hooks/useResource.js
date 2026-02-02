import apiProducts from "../api/apiProducts";
import { useAuth } from "./useAuth"
import useFetch from "./useFetch";

export const useResource = (url) => {
    const {user} = useAuth();

    const {data, error, refetch} = useFetch(user ? url : null);

    const actionToResource = async (newUrl=null,method,resourceData=null) => {
        try {
            const res = await apiProducts[method](newUrl ? url + newUrl : url,resourceData);
            refetch();
            return res;
        } catch (err) {
            console.error('error from useResource', err);
            throw err;
        }
    }

    return {
        data,
        error,
        actionToResource
    }
}