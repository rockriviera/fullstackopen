const Person =(props) =>{
    return(
      <li>{props.name} {props.number}
       <button onClick={() => props.onClick({props})}>Delete</button>
       </li>
    )
  }
export default Person;