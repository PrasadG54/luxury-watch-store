const nodemailer = require("nodemailer");


// GMAIL TRANSPORTER

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


// SEND TEST EMAIL

const sendTestEmail = async (email) => {
  const mailOptions = {
    from: `"Luxury Watch Store" <${process.env.EMAIL_USERNAME}>`,
    to: email,

    subject: "Luxury Watch Store - Email Test",

    html: `
      <!DOCTYPE html>

      <html>

        <body
          style="
            margin: 0;
            padding: 40px 20px;
            background-color: #f7f5f1;
            font-family: Arial, sans-serif;
          "
        >

          <div
            style="
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              padding: 50px 40px;
              text-align: center;
            "
          >

            <p
              style="
                color: #a88d6a;
                letter-spacing: 4px;
                font-size: 12px;
                text-transform: uppercase;
              "
            >
              Luxury Watch
            </p>


            <h1
              style="
                color: #292929;
                font-weight: 300;
                letter-spacing: 2px;
              "
            >
              Email System Working
            </h1>


            <p
              style="
                color: #666666;
                line-height: 1.8;
                font-size: 15px;
              "
            >
              Congratulations!
            </p>


            <p
              style="
                color: #666666;
                line-height: 1.8;
                font-size: 15px;
              "
            >
              Your Luxury Watch Store email service
              is working correctly.
            </p>


            <p
              style="
                color: #999999;
                font-size: 13px;
                margin-top: 30px;
              "
            >
              This is a test email from your development server.
            </p>

          </div>

        </body>

      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};


// EXPORT

module.exports = {
  sendTestEmail,
};