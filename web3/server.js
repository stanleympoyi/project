const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.post("/http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php", (req, res) => {
    res.send("Contact/information")
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/contacts', (req, res) => {
    res.render('contacts')
})

app.get('/careers', (req, res) => {
    res.render('careers')
})

app.get('/survey', (req, res) => {
    res.render('survey')
})
app.get('/services', (req, res) => {
    res.render('services')
})
app.get('/products', (req, res) => {
    res.render('products')
})

app.get('/team', (req, res) => {
    res.render('team')
})


app.listen(4954, () => {
    console.log('Serving on port 4954')
})