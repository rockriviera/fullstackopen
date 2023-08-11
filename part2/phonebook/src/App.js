import { useState } from 'react'
import './App.css';
import PersonForm from './components/PersonForm';
import RenderPhoneBook from './components/RenderPhoneBook';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      <PersonForm personForm
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
        <ul>
          <RenderPhoneBook renderPhoneBook persons={persons}/>
        </ul>
    </div>
  )
}

export default App