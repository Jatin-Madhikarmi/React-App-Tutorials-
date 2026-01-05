import { useState } from "react";

function ListGroupsDynamically() {
  let cities = ["New York", "Paris", "Dallas", "Boston", "San Franciso"];
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Groups</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupsDynamically;
