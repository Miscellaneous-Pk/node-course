const express = require('express');
const hbs = require('hbs');
const logger = require('./logger');

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
  res.status(200).render('home.hbs',{
    homeStatus: 'active'
  });
});

app.get('/about',(req,res) => {
  res.status(200).render('about.hbs',{
    aboutStatus: 'active'
  });
});

app.get('/check',(req,res) => {
  res.status(200).render('check',{
    checkStatus: 'active'
  })
})

logger.login('qasimali22@hotmail.com','123abc');

app.listen(port,() => {
  console.log(`listening to port ${port}`);
})

module.exports.app = app;
