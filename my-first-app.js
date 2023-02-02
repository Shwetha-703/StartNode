//const http = require('http');
//const routes = require('./routes');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded(extended=false))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
/* 
app.use('/add-product', (req,res, next)=>{
    //console.log('/users middleware');
    res.send('<form method="POST" action="/product"><input type="text" name="message"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req,res, next)=>{
    console.log(req.body);
    //console.log('/product middleware');
    res.redirect('/');
});
 
app.use('/',(req,res, next)=>{
    console.log('/ middleware');
    res.send('<h1>Hi this is a response from ExpressJS </h1>');
});
*/

//const server = http.createServer(routes.handler);
//console.log(routes.textcode);
//server.listen(3000);
