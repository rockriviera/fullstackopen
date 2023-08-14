import { useState, useEffect} from 'react'
import './App.css';
import PersonForm from './components/PersonForm';
import RenderPhoneBook from './components/RenderPhoneBook';

import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(()=>{
    personsService
    .getAll()
      .then(fetchedPersons => {
        setPersons(fetchedPersons)
    }).catch(error => {
      console.log('fail')
    })

},[])

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
    const newPerson = {
      name: newName,
      number: newNumber
    }

    personsService
      .create(newPerson)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        console.log(`adding new person`,newPerson)
        setNewName('')
        setNewNumber('')
    })
  }

  const handleDelete=({props})=>{
    if (window.confirm(`Delete ${props.name}?`)) {
      personsService.getAll()
      personsService
      .remove(props.id)
      .then( response=>{
        setPersons(persons.filter(person => person.id !== props.id))
        console.log(`removed name: ${props.name} with id: ${props.id}`)})
        .catch(error=>console.log(`failed to remove ${props.name} with id: ${props.id}`))
      }
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
      <h2>Add a new person</h2>
      <PersonForm personForm
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
        <ul>
          <RenderPhoneBook renderPhoneBook persons={persons} onClick={handleDelete}/>
        </ul>
    </div>
  )
}

export default App