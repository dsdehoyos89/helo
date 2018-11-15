require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const { } = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    dbInstance
    // .init() //WAIT UNTIL I SET UP THE INIT.SQL FILE IN ORDER TO CREATE THE TWO TABLES THAT I NEED FOR THE SIMULATION
    // .then(response => {
    //     console.log(response)
    // })
    // .catch(err => console.log(err))
}).catch(err => console.log(err))

//FUTURE ENDPOINTS  






app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})