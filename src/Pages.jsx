

function Pages({name, age}) {
  return (
    <div>
        {name ? name : "there is no name"} and {age}
    </div>
  )
}

export default Pages