// NPM packages
import { useEffect, useState } from "react";

// Project files
import Container from "./Container";
import ParcelDeatail from "./ParcelDetail";
import SearchButton from "./SearchButton";

export default function SearchBar() {
    // State
    const [query, setQuery] = useState(""); 
    const [currentQueryValue, setCurrentQueryValue] = useState(""); 
    const [found, setFound] = useState(true); 
    const [parcel, setParcel] = useState([]);
    const [data, setData] = useState([]); 

    // Constants
    const apiURL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

    // Methods
    useEffect(() => {
      fetch(apiURL)
      .then((resp) => resp.json())
      .then(sucessFetch)
      .then(failFetch);
    }, [setCurrentQueryValue]);

    // Components
    function searchBar(event){
      event.preventDefault();
      setCurrentQueryValue(query);
      const filterResult = data
      .filter((item) => item.parcel_id === query)
      .map((item) => <Container information={item} />);
      setParcel(filterResult);
      {filterResult.length < 1 ? setFound(false) : setFound(true);}
    }
    function sucessFetch(json){
      setData(json);
    }
    function failFetch(error){
      console.log("Error has occur: ", error)
    }
    
    
    return (
      <div className="search">
        <div className="search-bar">
          <SearchButton searchBar={searchBar} query={query} setQuery={setQuery} />

        </div> 
        <ParcelDeatail parcel={parcel} currentQueryValue={currentQueryValue} found={found} />
      </div>
    );
  }