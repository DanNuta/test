// import useSingleTeam from "../hooks/useSingleTeam";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";


const Team = () => {

    const {id} = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);



    const [update, setUpdate] = useState(false)
    const [inputUpdate, setInputUpdate] = useState(false)
    const [changeElement, setChangeElement] = useState("")



    // const {data, error, isPending} = useSingleTeam("fotbal", id);


    useEffect(() =>{
        setIsPending(true)

        async function docs(){

           try{
            let res = await projectFirestore.collection("fotbal").doc(id).get();
            let dataEl = await res.data();

            setData(dataEl)
            setIsPending(false)

           }catch(error){
            setError(error)
            setIsPending(false)
           }

           
        }
       docs()
    },[])



    const handleOnMouseEnter = () =>{
        setUpdate(true)
    }

    const handleOnMouseLeave = () =>{
        setUpdate(false)
    }


    const updateElement = () =>{
        setInputUpdate(true)
    }


    const updateNume = (id) =>{

        if(changeElement == "" || changeElement.length == 1) return
        else{
            
        projectFirestore.collection("fotbal").doc(id).update({
            nume: changeElement
            })
        setInputUpdate(false)
        }
        

    }


    

    

    return ( 
        <div>
            

           
           {isPending && <p>Loading...</p>}

            {data && <div>
                <h1 onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}>Nume: {data.nume} {update && <p onClick={updateElement}>Update</p>}</h1>

                    {inputUpdate && <input type="text" onChange={(e) => setChangeElement(e.target.value)}/>}
                    {inputUpdate && <button onClick={() => updateNume(id)}>Update</button>}
                <p>Antrenor {data.antrenor}</p>
                <p>Jucatori: {data.jucatori}</p>

                     </div>}

           

            

        </div>
     );
}
 
export default Team;