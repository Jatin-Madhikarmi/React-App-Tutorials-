function ListGroupsDynamically() {
  let cities = ["New York", "Paris", "Dallas", "Boston", "San Franciso"];
  //   const messageFunction = () => {
  //     return cities.length === 0 ? <p>No items found</p> : null;
  //   };
  return (
    <>
      <h1>List Groups</h1>
      {/* {messageFunction()} */}
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupsDynamically;
