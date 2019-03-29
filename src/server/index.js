import express from 'express'
import bodyParser from 'body-parser'

import mailer from './mailer'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  console.log(req.body);
  mailer(req.body).then(() => {
    console.log(`Sent the message`);
    res.status(200).send("success!");
    // res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message`);
    res.status(500).send("fail!");
    // res.redirect('/#error');
  })
  // res.status(200).send("success!");
  // res.status(500).send("fail!");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})