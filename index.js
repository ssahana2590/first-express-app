const express = require('express');
const HttpStatus = require('http-status-codes');
const app = express();

const users = [
    { id: 8, name: 'Sahana', email: 'sahana5522@gmail.com' },
    { id: 2, name: 'Sara', email: 'sara@gmail.com' },
    { id: 13, name: 'John', email: 'john@gmail.com' },
];

app.use(express.json());


app.get('/users', (req, res) => {
    res.status(HttpStatus.OK).json(users);
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);

    let id = parseInt(req.params.id);

    let foundUser = users.find(function (user) {
        return user.id == id;
    });

    console.log(foundUser);

    if (foundUser) {
        res.status(HttpStatus.OK).json(foundUser);
    } else {
        res.status(HttpStatus.NO_CONTENT).json(foundUser);
    }

});

app.post('/users', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(HttpStatus.CREATED).json(req.body);
});

app.put('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    console.log('Id', id);

    let index = users.findIndex((user, index) => {
        return user.id == id;
    });

    console.log('Found Index', index);

    if (index >= 0) {
        users[index] = req.body;
    }

    res.status(HttpStatus.OK).json(users[index]);
});

app.delete('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    console.log('Id', id);

    let index = users.findIndex((user, index) => {
        return user.id == id;
    });

    let deletedUser = users.splice(index, 1);

    console.log(deletedUser);

    res.status(HttpStatus.OK).json(deletedUser);
});

app.listen(5555, () => {
    console.log('Server up and running!.');
});
