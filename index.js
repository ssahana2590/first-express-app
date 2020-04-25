const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.send('Hello World'));

app.get('/java', (req, res) => res.send('<h1>Java</h1><p>Hello Java World</p>'));

app.get('/contact', function (request, response) {
     response.sendFile(__dirname + '/contact.html');
});

app.get('/services', function (request, response) {
     response.send('Our services...');
});

app.get('/product1', function (request, response) {
     response.json({
          id: 1,
          name: 'Mobile',
          category: 'Electronics',
          manufacturer: 'Samsung'
     });
});

app.get('/page', function (request, response) {
     response.render('home', { name: 'Sahana', technologies: ['html', 'css', 'nodejs', 'express', 'ejs'] });
});

app.listen(3000, function () {
     console.log('Server is up and running.');
});
