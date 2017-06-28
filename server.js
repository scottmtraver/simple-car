// content of index.js
const http = require('http')  
const port = 8001


// base list of cars
const cars = [
    {
        name: 'Tesla Model S',
        price: 90000
    },
    {
        name: 'Toyota Prius',
        price: 23000
    },
    {
        name: 'Subaru Outback',
        price: 20000
    }
];

const requestHandler = (request, response) => {  
    response.end(JSON.stringify(cars));
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
