import Toy from "./Toy"

const Puppy = (props) => {
  return (
    <>
      <h3>{props.puppy.name} is a {props.puppy.age} year old {props.puppy.breed}</h3>
      {props.puppy.toys.map(toy =>
        <Toy key={toy._id} puppyName={props.puppy.name} toy={toy} />
      )}
    </>
  )
}

export default Puppy