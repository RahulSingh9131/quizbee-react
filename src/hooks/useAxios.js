import { useEffect, useState } from 'react'
import axios from 'axios';

axios.defaults.baseURL="https://opentdb.com/"

const useAxios = ({url}) => {
    const [response,setResponse]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    useEffect(()=>{
        const fetchData= async ()=>{
            setLoading(true);
            try {
                const res = await axios.get(url);
                setResponse(res.data);
            } catch (error) {
                console.log("fetchData error",error);
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    },[url])

 return {
    response,
    error,
    loading,
 }
}

export default useAxios