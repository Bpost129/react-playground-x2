import Puppy from "./Puppy"

const PuppyList = (props) => {
  return (
    <>
      <h2>This is a puppy list component!</h2>
      {props.puppies.map(puppy => 
        <Puppy key={puppy._id} puppy={puppy} />
      )}
    </>
  )
}

export default PuppyList