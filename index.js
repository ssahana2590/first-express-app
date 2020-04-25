const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/users/:name', (req, res) => {

    console.log('Params', req.params);

    console.log('Query', req.query);

    res.send('Hello Users');
});


app.listen(5555, () => {
    console.log('Server up and running!.');
});
