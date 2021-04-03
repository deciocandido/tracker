export default function ParcelDeatail({ parcel }){
    return(
        <div>
            <h2>{`ID: ${parcel.parcel_id}`}</h2>
            <p>Status: {parcel.status}</p>
            <p>Sender: {parcel.sender}</p>
            <p>Location: {parcel.location_name}</p>
            <p>Number: {parcel.user_phone}</p>
            <p>Last Updated: {parcel.last_updated}</p>
            <p>Notes: {parcel.notes}</p>
        </div>
    );
}