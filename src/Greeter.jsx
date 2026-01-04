function Greeter(props) {
  return (
    <>
      <h1>Hello, {props.friend ? props.friend.name : 'friend'}</h1>
      <h2>I believe in you.</h2>
    </>
  )
}

export default Greeter