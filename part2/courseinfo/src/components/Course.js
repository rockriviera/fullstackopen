const Course=({name,parts}) =>{
    return(
      <div>
        <Header name={name}/>
        <Content parts={parts}/>
      </div>
    ) 
  }
const Header = ({ name }) => <h1>{name}</h1>

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

const Part = ({name, exercises}) => {
  return ( 
   <p>
     {name}: {exercises}
   </p> )
}

  export default Course