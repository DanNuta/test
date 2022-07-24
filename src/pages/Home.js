import useFetch from "../hooks/useFetch";
import { useState } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {
  BrowserRouter, Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


//components
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

//style
import style from "../css/Home.module.scss";

//------------------------------------------------------


import { projectFirestore } from "../firebase/config";


const Home = (props) => {

  const location = useNavigate();

  const [filterSearch, setFilterSearch] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const [deleteItem, setDeleteItem] = useState(false)
  const [deleteActive, setDeleteActive] = useState("")

  


    const {data, error, isPending} = useFetch("fotbal");
    const [inputValue, setInputValue] = useState()

    const handleChange = (e) =>{
      setInputValue(e.target.value);
      let value = e.target.value;

      let newData = data.filter(item => {
        return item.nume.toUpperCase().includes(value.toUpperCase())
      })

      setFilterSearch(newData);
    }
    
    const submit = (e) =>{
      e.preventDefault()

      location(`team?q=${inputValue}`)

      props.itemSearch(filterSearch)
    }

    localStorage.setItem("data", JSON.stringify(data))



    const handleOnMouseEnter = (id) =>{
      setDeleteActive(id)
    }


    const handleDelete = (id) =>{
        projectFirestore.collection("fotbal").doc(id).delete()
    }


   


    







    return ( 
        <div className={style.teams}>


          <div className={style.search_bar}>
            <SearchBar className={style.search_bar_nav} submit={submit} onChange={handleChange}/>

            <div className={style.filter_serach}>
              {filterSearch.map(item =>(
                <Link to={`team/${item.id}`}>
                  <p className={style.element_search}>{item.nume}</p>
                </Link>

                ))}
              
            </div>
          </div>


          {isPending && <p>Loading...</p>}

        <div  className={style.team_filter}>
        {data && data.map(item =>(
          <div onMouseEnter={() => handleOnMouseEnter(item.id)} >
            <Link to={`team/${item.id}`}>
              <Card className={style.card} item={item}/>
            </Link>
              {deleteActive == item.id && <p onClick={() => handleDelete(item.id)}>Delete</p>}
          </div>
          ))}

          
        </div>
       

        </div>
     );
}
 
export default Home;