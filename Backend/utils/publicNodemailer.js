const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendMailFB = async (feedback, mode) => {
  try {
    if (mode == "FEEDBACK") {
      return await transport.sendMail({
        attachments: [
          {
            filename: "logo.png",
            path: __dirname + "/image/logo.png",
            cid: "logo",
          },
        ],
        from: process.env.GMAIL_USERNAME,
        to: process.env.GMAIL_USERNAME,
        subject: "FeedBack",
        html: `
        <body style="background-color:#b7b7b7;">
        <div style="padding:30px; border:solid 10px #8bf9f2;">
        <div>
        <img style="width:20%; padding:10px; float:left" src="cid:logo">
        <h1 style="color:white; display:inline-block; margin-left:12%;">FEEDBACK - VS MED CARE</h1>
        </div><br>
        <hr>
        <div style="font-size:18px;">
        <p><b>Name</b>    : ${feedback.name} </p>
        <p><b>Email</b>   : ${feedback.email} </p>
        <p><b>Message</b> : ${feedback} </p>
        </div>
        </body>
      `,
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = sendMailFB;
