import Person from "./Person";
const RenderPhoneBook=({persons, onClick})=>
  persons
    .map
        (person=><Person key={person.name} id={person.id} name={person.name} number={person.number} onClick={onClick}/>)

export default RenderPhoneBook;