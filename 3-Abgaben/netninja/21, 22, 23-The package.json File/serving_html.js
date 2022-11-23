let express = require('express');

y

app.get('/', function (req, res ){
   res.send('this is the homepage')
});

app.get('/contact', function (req, res ){
   res.send('this is the contact page')
});

app.get('/profile/:id', function (req, res ){
   res.send('this is the contact page')
});

app.listen(3000)




