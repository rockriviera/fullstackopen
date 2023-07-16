import logo from './logo.svg';
import './App.css';

const Header = ({ name }) => <h1>{name}</h1>

const Part = ({name, exercises}) => {
   return ( 
    <p>
      {name}: {exercises}
    </p> )
}
const Content = (props) =>{
  const {parts} = props
  return(
  <div>
    {parts.map(part => 
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )}
    <b>
      total of {parts.reduce((sum,part)=>sum+part.exercises,0)} exercises
    </b>
  </div>
  
  )
}
const Course=({name,parts}) =>{
  return(
    <div>
      <Header name={name}/>
      <Content parts={parts}/>
    </div>
  ) 
}

const Courses=(props)=>{
  const {courses} = props
  return(
    <div>
      {courses.map(course => 
        <Course key={course.id} name={course.name} parts={course.parts}/>
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
  <div>
    <Courses courses={courses}/>
  </div>
  )
}

export default App