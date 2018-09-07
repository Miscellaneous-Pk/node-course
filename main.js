const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

// app.use((req,res,next)=>{
//   res.render('maint.hbs',{
//     pageTitle:'Maintanence'
//   });
// })

app.use(express.static(__dirname + '/dir'));

hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
})

app.get('/',(req,res) => {
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    message: 'I love my wife who is Iram Riaz.'
  });
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page',
    message: 'Welcome to About Me Page'
  });
});

app.listen(port,() => {
  console.log(`listening to port ${port}`);
})
