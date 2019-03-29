import nodemailer from 'nodemailer'

import config from './config'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

// const send = ({ email, name, text }) => {
//   const from = name && email ? `${name} <${email}>` : `${name || email}`
//   const message = {
//     from,
//     to: 'h38075@gmail.com',
//     subject: `New message from ${from} at Gummy Software Development`,
//     text,
//     html: "<div><h1>Order Confirmation</h1><p style='font-size:20px'><b>Invoice #</b>: " + new Date().getTime() + "</p><p style='font-size:30px'><b>Total Charge</b>: $1,034,000.00 HKD</p></div>",
//     replyTo: from
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     )
//   })
// }

const send = (message) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send