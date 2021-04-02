import { useState } from "react";

// Project files
import Data from '../data/data';

export default function SearchPage() {
    // State
    const [query, setQuery] = useState("");

    // Components
    

 

    function searchBar(searchType){
        
        const filterResult = Data.filter(item => item.parcel_id === searchType);
        console.log(filterResult);
        alert(`Parcel n:@ ${filterResult[0].parcel_id} @ with the sender ${filterResult[0].sender} has the status of ${filterResult[0].status}`);
    }

    return (
  
      <div className="App">
        Decio Candido Search
        <div className="search-bar">
                <input 
                placeholder="Search Bar"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                />
                <button onClick={() => searchBar(query)}>Search Bar</button>
            </div>
      </div>
    );
  }