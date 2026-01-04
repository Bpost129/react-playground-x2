const Puppy = (props) => {
  return (
    <>
      <h3>{props.puppy.name} is a {props.puppy.age} year old {props.puppy.breed}</h3>
    </>
  )
}

export default Puppy