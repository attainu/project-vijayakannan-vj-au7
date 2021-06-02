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

const sendMailAP = async (email, appoData,docData, mode) => {
  try {
    if (mode == "APPOINTMENT") {
      return await transport.sendMail({
        attachments: [
          {
            filename: "logo.png",
            path: __dirname + "/image/logo.png",
            cid: "logo",
          },
        ],
        from: process.env.GMAIL_USERNAME,
        to: email,
        subject: "Appointment Detail",
        html: `
        <body style="background-color:#b7b7b7;">
        <div style="padding:30px; border:solid 10px #8bf9f2;">
        <div>
        <img style="width:20%; padding:10px; float:left" src="cid:logo">
        <h1 style="color:white; display:inline-block; margin-left:12%;">APPOINTMENT DETAIL - VS MED CARE</h1>
        </div><br>
        <hr>
        <div style="font-size:18px;">
        <p><b>Appointment Id</b>    : ${appoData.appoId} </p>
        <p><b>Appointment Date</b>  : ${appoData.appoDate} </p>
        <p><b>Appointment Time</b> : ${appoData.appoTimeSloat} </p>
        <hr>
        <p><b>Appointment Doctor Name</b> : Dr.${docData.name} </p>
        <p><b>Appointment Doctor Department</b> : ${docData.department} </p>
        <hr>
        <p><b>Appointment Patient Name</b> : ${appoData.paitent.pname} </p>
        <p><b>Appointment Patient Email</b> : ${appoData.paitent.email} </p>
        <p><b>Appointment Patient Contact</b> : ${appoData.paitent.contact} </p>

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

module.exports = sendMailAP;
