import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPeding, setIsPeding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let getData = async (url) => {
            try {
                let res = await fetch(url);
                if(!res.ok){
                    throw {
                        err: true, 
                        status: res.status, 
                        statusText: !res.statusText? "Ocurrio un error" : res.statusText 
                    }
                }
                let data = await res.json();

                setIsPeding(false);
                setData(data);
                setError({err: false});
            } catch (err) {
                setIsPeding(true);
                setError(err);
            }
        };

        getData(url);
    }, [url]);

    return { data, isPeding, error };
};