function ListGroupsDynamically() {
  const cities = ["New York", "Paris", "Dallas", "Boston", "San Franciso"];

  return (
    <>
      <h1>List Groups</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupsDynamically;
