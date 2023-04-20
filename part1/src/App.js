const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

const Header=(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}

const Part=(props)=>{
  return(<p>{props.part.name} {props.part.exercises}</p>)
 }

const Content=(props)=>{
  return(
  <>
    <Part part={props.part[0]}/>
    <Part part={props.part[1]}/>
    <Part part={props.part[2]}/>
  </>
  )

}

const Total=(props)=>{
  const exercises=props.count
  return(
    <p>Number of exercises: {props.count[0].exercises+props.count[1].exercises+props.count[2].exercises}</p>
  )
}

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1,part2,part3]}/>
      <Total count={[part1,part2,part3]}/>
    </div>
  )
}

export default App