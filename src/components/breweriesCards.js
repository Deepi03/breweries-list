import React from "react";

 let stylingObject = {
        divCard: {
            "width": "18rem"
        }
    }
function BreweriesCards( {brewery} ) {
   
    return ( 
        <div className="row">
           <div class="card" style=  {stylingObject.divCard}>
           <div className="card-body">
           <h5 className="card-title"> {brewery.name}</h5>
           <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
        </div>
        </div>
        </div>
    )
}

export default BreweriesCards;