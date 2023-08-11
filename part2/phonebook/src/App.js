import { useState, useEffect} from 'react'
import './App.css';
import PersonForm from './components/PersonForm';
import RenderPhoneBook from './components/RenderPhoneBook';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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