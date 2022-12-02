//const http = require("http")
const express = require('express')
const app = express()

let notes = [
  {
    //id can't be a letter or need to be defined
    id: 1,
    content: "On contient ce qu'on mon boug",
    date: "2022-11-28:10:15.098z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute Javascript python and php",
    date: "1998-15-10.05oz:",
    important:false
  },
  {
    id:3,
    content: "My birthday",
    date: "15-10-1998: Montreal,oui",
    important:true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  console.log(id)
  const note = notes.find(note => note.id === id)
  console.log(note.id, typeof note.id, id, typeof id, note.id === id)
  response.json(note)

})


/*const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World')
  })*/
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

  })


