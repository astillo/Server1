
const express = require('express')

const port = 5000;

const server = express()

server.use(express.json())


server.get('/hobbit', (req, res) => {
    res.send('hello world from hobbit ')
})

server.post('/hobbit', (req, res) => {
    res.status(201).json({ url: '/hobbit', operation: 'post' })
})

server.put('/hobbit', (req, res) => {
    res.status(200).json({ url: '/hobbit', operation: 'put' })
})

server.delete('/hobbit', (req, res) => {
    res.status(204).json({ url: '/hobbit', operation: 'deleted' })
})

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})