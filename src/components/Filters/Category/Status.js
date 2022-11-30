import React from 'react'
import FilterBTN from '../FilterBTN';

const Status = ({setStatus, setPageNumber}) => {
  let status =["Alive", "Dead", "Unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button 
        className="accordion-button "
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target="#collapseThree" 
        aria-expanded="true" 
        aria-controls="collapseThree"
       >
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {status.map((items, index)=>(     //items predstavlja clanove u nizu(alive dead unkown) a index su brojevi tih clanova(0,1,2)
          <FilterBTN 
            key={index} name="status" 
            index={index} 
            items={items}
            setPageNumber={setPageNumber}
            task={setStatus}
          />
        ))}
        
      </div>
    </div>
  </div>
  )
}

export default Status