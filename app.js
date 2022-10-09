const express = require('express');
const path = require('path')
let app = express();
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, './public')));


let indexRoutes = require('./routes/indexRoutes')
app.get('/', indexRoutes)

app.listen(3000);

console.log('Happy Hacking!');
