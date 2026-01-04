function Greeter(props) {
  return (
    <>
      <h1>Hello, {props.friend ? props.friend.name : 'friend'}</h1>
      <h2>I believe in you.</h2>
      <p>Today is {new Date().getDay() === 1 ? 'Monday' : 'not Monday'}</p>
    </>
  )
}

export default Greeter