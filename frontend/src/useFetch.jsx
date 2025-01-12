import { useEffect, useState } from "react";
const useFetch = (url,header={}) => {
    const [data , setData] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(url,header)
        .then(response => response.json())
        .then(data =>{
            setData(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(true);
            setLoading(false);
            console.error(err);
        })
    }
        ,[url])

    return {data, error, isLoading};
    
}
 
export default useFetch;