
export default function Container({ information }) {

  return (
    <article className="container">

      {/* Meta data */}
      <div className="container-info">
        <div className="info">
          <h3 className="status">Status: {information.status}</h3>
          <p className="sender">Sender: {information.sender}</p>
          <p className="location">Location: {information.location_name}</p>
        </div>
      </div>
    </article>
  );
}