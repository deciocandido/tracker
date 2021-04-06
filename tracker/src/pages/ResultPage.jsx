// TODO

// NPM Package
import { useState } from "react";

// Project File
import Container from "../components/Container";
import data from "../data/data.json";

export default function ResultPage( { parcel } ) {
  // State
  const [sortKey, setSortKey] = useState("id");

  // Const
  const query = parcel.params.query();
  const filterResult = data.filter((item) =>
    item.parcel_id.match(query)
  );
  const sortedResults = filterResult.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  const ContainerArray = sortedResults.map((item) => (
    <Container key={item.parcel_id} date={item} />
  ));
    return (
  
      <div className="App">
        <section className="grid">{ContainerArray}</section>

      </div>
    );
  }