const express = require('express')
const app = express()
app.use(express.json())
const logger = require('morgan')
logger.token('body', req=> JSON.stringify(req.body))
app.use(logger(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date=new Date();
    response.send("Phonebook has info for "+persons.length+" people <br/>"+date)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person =>person.id === id)
  if(person){
    response.json(person)
  }
  else{
    response.status(404).end()
  }

})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name||!body.number) {
    return response.status(400).json({ 
      error: 'person name and/or number not fully provided' 
    })
  }

  if (existingName(body.name)) {
    return response.status(400).json({ 
      error: 'person name must be unique' 
    })
  }

  const person = {
    id:generateId(),
    name:body.name,
    number:body.number
  }
  persons=persons.concat(person)
  response.json(person)
})

const existingName =(name)=>{
  return persons.find(person=> person.name==name)
  }

const generateId = () => {
  newId=1
  do{
    newId=Math.floor(Math.random() * (1000000 - 1) + 1)
    console.log(newId)
  }
  while(persons.find(person=> person.id==newId))
  return newId

}

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})