import Person from "./Person";
const RenderPhoneBook=({persons})=>
  persons
    .map
        (person=><Person key={person.name} name={person.name} number={person.number}/>)

export default RenderPhoneBook;