function Greeter(props) {
  const things = ["Water", "Cattle", "Gold"]
  // Create an array of <li> components

  return (
    <div>
			<h1>Hello, {props.friend ? props.friend.name : "friend"}</h1>
      <h2>I believe in you.</h2>
      <p>Today is {new Date().getDay() === 1 ? "Monday" : "not Monday"}</p>
      <h3>Give us your:</h3>
      {/* Render the array of <li>s */}
      <ul>{things.map(thing => <li key={thing}>{thing}</li>)}</ul>
    </div>
  )
}

export default Greeter