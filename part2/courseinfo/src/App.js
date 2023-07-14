import logo from './logo.svg';
import './App.css';

const Header = ({ name }) => <h1>{name}</h1>

const Part = ({name, exercises}) => {
   return ( 
    <li>
      {name}: {exercises}
    </li> )
}
const Content = (props) =>{
  const {parts} = props
  return(
  <ul>
    {parts.map(part => 
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )}
  </ul>
  )
}
const Course=({course}) =>{
  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  ) 
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App