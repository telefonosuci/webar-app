const express = require('express')
const app = express()


port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/animals', (req, res) => res.send('Animals'))

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);