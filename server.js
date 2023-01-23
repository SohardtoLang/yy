const express = require('express')
const randomEmail = require('random-email');
const randomstring = require("randomstring")
var password = require('password');
const app = express()
var nodemailer = require("nodemailer");
var random = require('random-number-generator')
var axios = require('axios')
var {GasSpam}=require('./test.js')
const path = require('path');
const port = 3000

//get random
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


app.get('/email', (req, res) => {
  doms = ['gmail.com','yahoo.com']
  domain = getRandomItem(doms)
  p = ['asep','jaya','rudal','irfan','rayhan','budi','alok','lato','rafi','denis','anton','ria','jamal','amir','riono','safa','fahri','anime']
  pw = randomstring.generate(2)+getRandomItem(p)+randomstring.generate(3);
  
  
  res.json({
    nomer: randomEmail({domain: domain}),
    password: pw
  })
})

app.get('/nomor', (req, res) => {
  nom = ['0811','0812', '0858', '0895', '0857', '0813', '0852','0831','0819','0897','0876']
  nomer = getRandomItem(nom)
  p = ['aSep','jayA','rudal','irfan','rayhan','budi','alok','Dato','rafi','denis','anton','ria','jamal','amir','riono','safA','faHri','aniMe','lato']
  pw = randomstring.generate(2)+getRandomItem(p)+randomstring.generate(3);
 
  rand= Math.floor(10000000 + Math.random() * 90000000)
  
  res.json({
    nomer: nomer+rand,
    password: pw
  })
})

app.get('/gasSpam', (req, res) => {
  const email = req.query.email
  
  if(!email) return res.json({
    status: false
  }) 
  var i = 0;
  while(i<60){
    GasSpam(email); i++;
  }
  
  res.json({
    status: true
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})