import {useState,useEffect} from "react";

const useFetch = (url)=> {
    const [status,setStatus]=useState([])
    const [isloading,setIsLoading]=useState(false)
    const [error,setError]=useState()
    useEffect(()=>{
        setIsLoading(true)
        fetch(url)
                .then((res)=>res.json())
                .then((data)=>{
                    setStatus(data)
                    setIsLoading(false)
                  
                })
                .catch((err)=>{
                    setError(err)
                    setIsLoading(false)
                    
                })
    },[url])
    return {status, isloading, error}
}

export default useFetch;