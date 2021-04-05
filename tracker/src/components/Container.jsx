// NPM Package
import { Link } from "react-router-dom";

export default function Container({ information }) {

  return (
    <article className="card">

      <Link to={information.parcel_id}>
        <img
          className="preview"
          alt={information.parcel_id}
        />
      </Link>

      {/* Meta data */}
      <div className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            alt="Parcel"
          />
        </div>
        <div className="right">
          <h3 className="title">{information.status}</h3>
          <p className="description">{information.sender}</p>
          <p className="description">{information.location_name}</p>
        </div>
      </div>
    </article>
  );
}