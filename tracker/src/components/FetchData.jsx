// TODO

// Project files
import Data from "../data/data";

function Fetch(){
    const filterResult = Data.find(item => item.parcel_id === searchType);
    return filterResult;
}

export default function FetchData() {
    return (
        <div>
            
        </div>
    );
}