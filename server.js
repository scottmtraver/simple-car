// content of index.js
const http = require('http')  
const port = 8001

const url = require('url');

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
    // get the paramaters from the request
    var q = url.parse(request.url);

    if (q.query === 'tax=true') {
        // if the request contains tax=true apply the tax
        var withTax = cars.map(function (c) {
            return { name: c.name, price: c.price * 1.18 };
        });
        response.end(JSON.stringify(withTax));


    } else {
        // return the base list of cars
        response.end(JSON.stringify(cars));
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
