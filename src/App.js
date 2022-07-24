

import {
  BrowserRouter, Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useState } from "react";


//components

import Card from "./components/Card";

//style

//pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import AppStyle from "../src/css/AppStyle.scss";
import Search from "./pages/Search";
import CreateTeam from "./pages/CreateTeam";
import Navbar from "./components/Navbar";




function App() {

  const [dataSearch, setDataSearch] = useState()


  const searchItem = (data) =>{
    setDataSearch(data)
  }

  return (

      <div className="App">


        <Navbar/>

        <Routes>
          <Route path="/" element={<Home itemSearch={searchItem}/>}></Route>
          <Route path="team/:id" element={<Team/>}></Route>
          <Route path="/team" element={<Search search={dataSearch}/>}></Route>
          <Route path="/create" element={<CreateTeam></CreateTeam>}></Route>
        </Routes>

        
        
      </div>
  
  
    
  );
}

export default App;
