import React, { Component } from "react";
import CheckoutCart from "../../CheckoutCart";

export default class CheckoutPage extends Component {
  render () {
    return (
      <div>
        <section className="container">
          <div className="row-wrapper-x">
            <section className="wpb_row  gray">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                                <div className="wpb_wrapper">
                                  <CheckoutCart />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

// import React, { Component } from "react";
// // import email from "emailjs";
// import axios from "axios";

// // const server = email.server.connect({
// //   user: "h38075@gmail.com",
// //   password: "ljkamH#807514",
// //   host: "smtp.gmail.com",
// //   ssl: true,
// //   tls: true
// // });
// // console.log(server);

// // import nodemailer from "nodemailer";
// // const nodemailer = require("nodemailer");

// // const username = "h38075@gmail.com";
// // const password = "ljkamH#807514";

// // const transport = {
// //   service: "gmail",
// //   auth: {
// //     type: "OAuth2",
// //     user: username,
// //     clientId: "749443978233-5q95fhln8g3ud2gkbtea7t6jo0rdrksl.apps.googleusercontent.com",
// //     clientSecret: "o14kjzyVXOXmRq_7lPVqTY-v",
// //     refreshToken: "1/A23HDZTOpfxjFIXgam4GsqZXn8DQJ_SvPZMzHBwA4fQ",
// //     accessToken: "ya29.GlvZBn7MWkHWz7cPSio4aqeKofvB2zTHQSEhDWhu5kaB34oZANeOIvC-b7EDzp9Ljrdd3EJnAesdZJaNLCPKECCqVpD6hmILDNmdhAavRN53P5_piS_Xq1ux_vUU"
// //   }
// // };

// // const transporter = nodemailer.createTransport(transport);

// export default class CheckoutPage extends Component {
//   sendEmail () {
//     // server.send({
//     //   text:    "i hope this works", 
//     //   from:    "Jerry Lau <h38075@gmail.com>", 
//     //   to:      "Jerry Lau <h38075@gmail.com>",
//     //   subject: "testing emailjs"
//     // }, function(err, message) { console.log(err || message); });

//     // transporter.verify((error, success) => {
//     //   if (error) {
//     //     console.log(error);
//     //   } else {
//     //     console.log('Server is ready to take messages');
//     //   }
//     // });

//     // transporter.sendMail({
//     //   text:    "i hope this works", 
//     //   from:    "Jerry Lau <h38075@gmail.com>", 
//     //   to:      "h38075@gmail.com",
//     //   subject: "testing emailjs"
//     // }, (error, info) => {
//     //   if (error) {
//     //     console.log(error)
//     //     return
//     //   }
//     //   console.log(info)
//     // });
    
//     axios.post("/contact", { email: "h38075@gmail.com", name: "Gummy Lau", message: "Order Confirmation" })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   render () {
//     return (
//       <div>
//         <div>Checkout Page</div>
//         <a className="button theme-skin square large bordered-bot button-hover" onClick={() => this.sendEmail()}>
//           Check Out Button
//         </a>
//       </div>
//     );
//   }
// }