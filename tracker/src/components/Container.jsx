// NPM Package
import { Link } from "react-router-dom";

export default function Container({ information }) {
  // Properties
  //const packageObject = require(`../assets/images/${information.id}`);
  //const packageObjectID = packageObject.default;

  return (
    <article className="card">
      {/* Video thumbnail */}
      {/* 
      <Link to={`video/${information.parcel_id}`}>
        <img
          className="preview"
          //src={videoThumbURL}
          alt={information.parcel_id}
        />
      </Link>
      */}

      {/* Meta data */}
      <div className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            //src={channelThumbURL}
            alt="Channel thumbnail"
          />
        </div>
        <div className="right">
          <h3 className="title">{information.status}</h3>
          <p className="description">{information.sender}</p>
          <p className="description">{information.location_name} views</p>
        </div>
      </div>
    </article>
  );
}