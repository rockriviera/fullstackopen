const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
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
  console.log (props)
  return(
  <>
    <Part part={props.part[0]}/>
    <Part part={props.part[1]}/>
    <Part part={props.part[2]}/>
  </>
  )

}

const Total=(props)=>{
  return(
    <p>Number of exercises: {props.count[0].exercises+props.count[1].exercises+props.count[2].exercises}</p>
  )
}

  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts}/>
      <Total count={course.parts}/>
    </div>
  )
}

export default App