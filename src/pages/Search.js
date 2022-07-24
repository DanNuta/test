import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import style from "../css/Search.module.scss"

const Search = (props) => {


    const data = JSON.parse(localStorage.getItem("data"));

    const [searchParams, setSearchParams] = useSearchParams();

    const searchFilterData = data.filter(item => {
        if(searchParams.get("q") === "") return
        return item.nume.toUpperCase().includes(searchParams.get("q").toUpperCase())
    })


    console.log(searchParams.get("q"))

  

    return ( 

        <div className={style.team}>

            {searchFilterData.map(item => {

                return (
                    <Link to={`${item.id}`}>
                        <Card item={item}/>
                    </Link>
                )
            })}


            {searchFilterData.length === 0 && <p>Aceasta echipa nu exista {searchParams.get("q")}</p>}




        </div>
     );
}
 
export default Search;