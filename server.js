const express = require('express')
const app = express();
const port = 8001;

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

// Set up route
app.get('/', function (req, res) {

    if (req.query.tax && req.query.tax == 'true') {
        // if the request contains tax=true apply the tax
        var withTax = cars.map(function (c) {
            return { name: c.name, price: c.price * 1.08 };
        });
        res.send(JSON.stringify(withTax));


    } else {
        // return the base list of cars
        res.send(JSON.stringify(cars));
    }
})

app.listen(port, function () {
    console.log(`server is listening on ${port}`)
})
