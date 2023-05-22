if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({
    path: './config.env'
  });

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: process.env.MAILGUN_USERNAME,
  key: process.env.MAILGUN_API_KEY
});

mg.messages
  .create(process.env.MAILGUN_DOMAIN, {
    from: process.env.MAILGUN_FROM,
    to: ['umadahmad1928@gmail.com'],
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!',
    html: '<h1>Testing some Mail awesomeness!</h1>'
  })
  .then(msg => {
    console.log('message sent', msg);
  }) // logs response data
  .catch(err => console.log(err)); // logs any error
