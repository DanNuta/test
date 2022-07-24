import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";


function useFetch(collection){

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)

    const reference = projectFirestore.collection(collection)

    
    useEffect(() => {

        setIsPending(true)
        const team = reference.onSnapshot((snapshot) =>{
            let eachTeam = [];
    
            snapshot.docs.map(item =>{
               eachTeam.push({id: item.id, ...item.data()})
    
            })

            setData(eachTeam)
            setError(null)
            setIsPending(false)
    
            }, (error)=> {
                setError(error)
                setIsPending(false)
            })

    }, [collection])

    return {data, error, isPending}

    }




export default useFetch;