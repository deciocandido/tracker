import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import Data from "../data/data";

export default function SearchBar() {
    // State
    const [query, setQuery] = useState("");

    // Property
    const history = useHistory();

    // Components
    function searchBar(event){
      //event.preventDefault();

      history.push(`/results/${query}`);
        //const filterResult = Data.find(item => item.parcel_id === searchType);
        //alert(`Parcel n:@ ${filterResult.parcel_id} @ with the sender ${filterResult.sender} has the status of ${filterResult.status}`);
    }

    return (
  
      <div className="App">
        <div className="search-bar">
                <input 
                placeholder="Search Bar"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                />
                <select id="cars">
                    <option >Parcel ID</option>
                    <option >Sender</option>
                    <option >Location</option>
                    <option >Status</option>
                </select>
                <button onClick={() => searchBar(query)}>Search Bar</button>
            </div>
      </div>
    );
  }