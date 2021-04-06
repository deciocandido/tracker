export default function ParcelDeatail({ parcel, query, found}){
    return(
        <div>
            {found === false && (
                <p id="notfound"> No parcel was found by user: {query}</p>
            )}
            <h2>Parcel ID: {parcel.parcel_id}</h2>
            <p>Status: {parcel.status}</p>
            <p>Sender: {parcel.sender}</p>
            <p>Location: {parcel.location_name}</p>
            <p>Number: {parcel.user_phone}</p>
            <p>Last Updated: {parcel.last_updated}</p>
            <p>Notes: {parcel.notes}</p>
        </div>
    );
}