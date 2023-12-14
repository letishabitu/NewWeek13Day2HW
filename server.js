const express = require('express');
const app = express();
// const fruits = require('./models/fruits.js');
// const vegitables = require('./models/vegitables.js');
const pokemons = require('./models/pokemon');
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
// app.set('views', './views/fruits');
// app.set('views', './views/vegitables');
app.set('views', './views/pokemon')
app.engine('jsx', jsxViewEngine());


app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App');
});

// I - INDEX - dsiplays a list of all fruits


app.get('/pokemons/', (req, res) => {
    // res.send(fruits);
    res.render('Index', {pokemons: pokemons});
});





app.get('/pokemons/new', (req, res) => {
    res.render('New');
});

// C - CREATE - update our data store


//pokemons
app.post('/pokemons', (req, res) => {
    
    pokemons.push(req.body);
    // console.log(fruits);
    // console.log(req.body)
    // res.send('data received');
    res.redirect('/pokemons'); // send user back to /fruits
})



app.get('/pokemons/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {// second parameter must be an object
        pokemon: pokemons[req.params.indexOfFruitsArray]
    });
})
app.listen(3000, () => {
    console.log('listening');
});