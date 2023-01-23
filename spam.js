const {GasEmail,GasNomer} = require('./test')
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

var jumlah=33;
 
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukan Email : ', email => {
  
  if(!email) {
    console.log(`Mohon Masukan Email`);
  } else {
    console.log(`Checking... ${email}!`);
       GasNomer(email)
  }
  readline.close();
});