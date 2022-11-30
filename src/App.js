import React, { useState, useEffect } from 'react' // kucam imrc i izace mi ovom .Ovako importujem hooks koje cu koristiti.
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"    //ova dva importa su za bootstrap koriscenje
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom' //na 3:06:46 objasnjeno ukrato reactRouterDom
import Episodes from "./Pages/Episodes"
import Location from "./Pages/Location"
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
   <Router>
    <div className="App">
    <Navbar />
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />

      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<CardDetails />} />

      <Route path="/location" element={<Location />} />
      <Route path="/location/:id" element={<CardDetails />} />
    </Routes>
   </Router>
  )
}
const Home=() => {

  let [pageNumber, setPageNumber]=useState(1);  //ovako se pise use state,varijabla i funkcija u nizu,broj 1 je default broj.
  let[search, setSearch]=useState("");
  let[status, setStatus]=useState("");
  let [gender, setGender]=useState("");
  let [species, setSpecies]=useState("");
  
  let [fetchedData, updateFetchedData]=useState([]);
  let {info, results}=fetchedData;   //da smo isli console.log(api) video bih da ne moze,zato sam morao useEffect data.Nakon toga hocu da izvucem iz niza samo karaktere kako bih ih prikazao kako zelim i ubacio u Card component.
    // console.log(results); ovo pogledaj da shvatis // na 48.55 pogledaj ukratko objasnjeno kako smo dosli do ovoga.(data Fecthing Section.)
  
  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`; //ako na netu udjem na ovu stranicu(bez ovog page=2) videcu gomilu podataka u karakterima,to je Api jezik izmedju podataka i moje stranice
  
  useEffect(() => {   //posto smo klikom na stranicu promenili api,kako cemo sad iskoristiti podatke iz toga za nas server?pomocu useEffect
    (async function(){    //koristumo async funkcije za feching data
      let data= await fetch(api).then(res=>res.json())    //await nam govori:Sacekaj da kliknemo na dugme pa onda tek fetch api
      updateFetchedData(data);    
    })()  
  }, [api])  //Kada ucitamo react aplikaciju pokrenuce ovaj hook,i svaki sledeci put kad se api promeni; [api] -ova komanda nam govori pri svakoj promeni api pokreni se.
    

  return (
    <div className="App">

      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row ">
            <Filters 
              setStatus={setStatus} 
              setPageNumber={setPageNumber}  
              setGender={setGender}
              setSpecies={setSpecies}
            />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  ); 
}

export default App;
//3:51:19 Locations