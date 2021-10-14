const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

// Для herocu:
const PORT = process.env.PORT || 4444; 

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',
    }));

app.get('/', (req, res) => {
    // console.log('Это колбек для app.get("/")');
    // console.log(req.url);
    // res.send('<h1>Привет это /</h1>');
    res.render('home', { cssFileName: 'home', pageTitle: 'Главная' });
});

app.get('/about', (req, res) => {
    // console.log('Это колбек для app.get("/about")');
    // console.log(req.url);
    // res.send('<h1>Привет это /about</h1>')
    res.render('about',  { cssFileName: 'about', pageTitle: 'О нас' });
});

app.get('/products', (req, res) => {
    res.render('products', { products, cssFileName: 'products',
pageTitle: 'Продукты' });
});

app.get('/product/:productId', (req, res) => {
    console.log(req.params);

    const product = products.find(p => p.id === req.params.productId);

    res.render('product', { product });
})

app.listen(PORT, () => {
    console.log(`Application server is running on port ${PORT}`);
});