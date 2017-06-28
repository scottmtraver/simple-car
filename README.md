# Simple Car Server

Features:

 * Responds to all requests with a list of available cars and prices
    format: [ { name: 'car-name', price: 1234 } ]
 * IF request contains tax=true an 18% tax is applied to each cars price
 * Runs on port 8001


To run the car server on localhost:8001 use the command:

```javascript
node server.js
```
