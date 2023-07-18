import { useState } from 'react'
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const Person =(props) =>{
    return(
      <li>{props.name}</li>
    )
  }

  const existingPerson =()=>{

    return persons.find(
      (person) => person.name.toLowerCase()===newName.toLowerCase()
    )
  }

  const addPerson = (event) =>{
    event.preventDefault()
    if(existingPerson()){
      alert(`${newName} already exists in Phonebook`)
      return
    }
    const nameObject = {
      name: newName,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
          value={newName}
          onChange ={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person=>
            <Person key={person.name} name={person.name}/>)}
        </ul>
    </div>
  )
}

export default App