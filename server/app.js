// Importing a express mdoule
const express = require('express')
// Creating a object of app
const app = express()
// Port for server
const port = 3000

// Base rout of app
app.get('/', (req, res) => res.send('Hello World!')) // Returning a Hello World! string.

// Listening a server on listed address.
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))