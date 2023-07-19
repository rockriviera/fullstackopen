import { useState } from 'react'
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const Person =(props) =>{
    return(
      <li>{props.name} {props.number}</li>
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
    if((newNumber.length<1)||(newName.length <1) ){
      alert (`Both fields required`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
          number:
          <input 
          value={newNumber}
          onChange ={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person=>
            <Person key={person.name} name={person.name} number={person.number}/>)}
        </ul>
    </div>
  )
}

export default App