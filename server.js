// ====================================
// Author: Edgar Pineda
// ====================================

const express = require("express")
const app = express()

const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
    apiKey: 'AIzaSyC-g7k8r6MOsqQctOXAN8SJuNlxyTetU7c' 
};

const geocoder = NodeGeocoder(options);

// =========================================================================
const { Pool, Client } = require("pg")
// =========================================================================
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'gis4dev',
    password: 'batman00',
    port: 5432,
});

const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'gis4dev',
        password: 'batman00',
        port: 5432
});

client
    .connect()
    .then(() => console.log('Database connection is completed and ready for Postman!'))
    .catch(err => console.error('connection error', err.stack))


app.listen(3000, () => {
    console.log('Server is up on port 3000');
})

// ============================================
// REST API
// ============================================
app.get('/readDB/', (req, res) => {
    //Testing TEXT
    const _address = req.query.Address;
    console.log(_address);
    geocoder.geocode(_address)
   // res.send('Hi')
    .then((res1) => {
        const obj = JSON.parse(JSON.stringify(res1));
        console.log(obj[0].administrativeLevels.level1long);
        const _state = obj[0].administrativeLevels.level1long;
        // Get State from Database
        const _query = 'SELECT stusps FROM cb_2018_us_state_20m WHERE name = ' + "'" + _state + "'";
        client
         .query(_query) 
         .then(result => {
            res.send(result.rows[0]) 
             console.log(result.rows[0]) 
        })
    }).catch((err) => {
        console.log(err);
    })
})
