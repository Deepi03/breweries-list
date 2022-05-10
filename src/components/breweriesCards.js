import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import BreweryDetails from "./breweryDetails"

 let stylingObject = {
        divCard: {
            "width": "18rem"
        },
        cardTitle: {
            "background-color":"black",
            "color":"white",
            "padding" : "1rem"
        }
    }
function BreweriesCards( {brewery} ) {
   
    return ( 
      
            
                <div className="col-sm m-2" >
                 <div className="card" style= {stylingObject.divCard}>
                 <div className="card-body">
                 <div>
                 <h5 className="card-title"> {brewery.name} </h5>
                 </div>
                 <p className="card-text"> {brewery.brewery_type}</p>
                 <p className="card-text"> {brewery.city}</p>
                 <Link to= {`/details/${brewery.id}` } className="btn btn-warning">Detail</Link>
                </div>
                </div>
                </div>
                
            
     
    )
}



export default BreweriesCards;