const express = require('express');


const app = express()

// MIDDLE WARE
app.get('/', (req, res) => {
    res.send('hello world')
});

// Require the Routes API  
// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Starting the Server at the port 3000")
})