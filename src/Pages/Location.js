import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';


const Location = () => {
  let[id,setID]=useState(1);
  let [info, setInfo]=useState([]);
  let [results, setResults] = useState([]);
  let api=`https://rickandmortyapi.com/api/location/${id}`
  let {name, type, dimension}=info;
useEffect (()=>{
  (async function(){
    let data=await fetch(api).then(res=>res.json());
    setInfo(data);

    let a=await Promise.all(
      data.residents.map((x)=>{
        return fetch(x).then(res=>res.json());
      })
    );
    setResults(a);
  })()
},[api])
  
  
  
  return (
    <div className='container'>
        <div className="row mb-4">
          <h1 className="text-center mb-4">
             Location:  {" "}
             <span className="text-primary">{name===""? "Unknown" :name };</span>  {/* U slucaju da u name ne pise nista,pisace nam Unknown,else pisace name */} 
          </h1>
          <h5 className="text-center">
            Dimension {dimension === ""? "Unknown" :dimension}
          </h5>
          <h6 className="text-center">
           Type {type === ""? "Unknown" :type}
          </h6>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12">
            <h5 className="text-center mb-4">
           Dimension
            </h5>
            <InputGroup setID={setID} name='Location' total={ 126 } />
            </div>         
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/location/"  results={results}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Location;