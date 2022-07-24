import { projectFirestore, projectStorege, firebaseConfig } from "../firebase/config";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Input from "../components/Input";
import style from "../css/CreateTeam.module.scss";
import Button from "../components/Button";


const CreateTeam = () => {


    const [nume, setNume] = useState("");
    const [antrenor, setAntrenor] = useState("");
    const [jucatori, setJucatori] = useState("");

    const location = useNavigate();

   
    const submit = async (e) =>{
        e.preventDefault();


        if(nume.length == 0) return
        if(antrenor.length == 0) return
        if(jucatori.length == 0) return

        const team = {
            nume,
            antrenor,
            jucatori
        }

        setAntrenor("")
        setJucatori("")
        setNume("")

        
    
        let dataBack = await projectFirestore.collection("fotbal").add(team);


        setTimeout(() => {
            location("/")
            
        }, 200);

       
    }

        
    
    return ( 
        <form className={style.form} onSubmit={submit}>
            
            <Input className={style.input} type="text" value={nume} placeholder="Nume Echipa" onChange={(e) => setNume(e.target.value)}/>
            <Input className={style.input} type="text" value={antrenor} onChange={(e) => setAntrenor(e.target.value)} placeholder="Antrenor"/>
            <Input className={style.input} type="text" value={jucatori} onChange={(e) => setJucatori(e.target.value)} placeholder="Jucatorii"/>


            

           <Button nume="Add" />
        </form>
     );

    }

 
export default CreateTeam;