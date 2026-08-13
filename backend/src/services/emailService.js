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


// SEND VERIFICATION EMAIL

const sendVerificationEmail = async (
  email,
  name,
  verificationToken
) => {

  const verificationUrl =
    `${process.env.FRONTEND_URL}/verify-email/${verificationToken}`;

  const mailOptions = {
    from: `"Luxury Watch Store" <${process.env.EMAIL_USERNAME}>`,
    to: email,

    subject: "Verify Your Luxury Watch Store Account",

    html: `
      <!DOCTYPE html>

      <html>

        <body
          style="
            margin: 0;
            padding: 40px 20px;
            background-color: #f7f5f1;
            font-family: Arial, sans-serif;
            color: #292929;
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

            <!-- BRAND -->

            <p
              style="
                color: #a88d6a;
                letter-spacing: 5px;
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 15px;
              "
            >
              Luxury Watch
            </p>


            <h1
              style="
                color: #292929;
                font-size: 28px;
                font-weight: 300;
                letter-spacing: 2px;
                margin-bottom: 30px;
              "
            >
              Verify Your Email
            </h1>


            <!-- GREETING -->

            <p
              style="
                color: #555555;
                font-size: 15px;
                line-height: 1.8;
              "
            >
              Hello ${name},
            </p>


            <p
              style="
                color: #666666;
                font-size: 15px;
                line-height: 1.8;
              "
            >
              Thank you for creating an account with
              Luxury Watch Store.
            </p>


            <p
              style="
                color: #666666;
                font-size: 15px;
                line-height: 1.8;
              "
            >
              Please confirm that this email address
              belongs to you by clicking the button below.
            </p>


            <!-- VERIFY BUTTON -->

            <div style="margin: 40px 0;">

              <a
                href="${verificationUrl}"
                style="
                  display: inline-block;
                  background-color: #a88d6a;
                  color: #ffffff;
                  text-decoration: none;
                  padding: 16px 32px;
                  letter-spacing: 2px;
                  font-size: 12px;
                  text-transform: uppercase;
                "
              >
                Yes, Verify My Email
              </a>

            </div>


            <!-- EXPIRY -->

            <p
              style="
                color: #999999;
                font-size: 13px;
                line-height: 1.7;
              "
            >
              This verification link will expire in
              15 minutes.
            </p>


            <!-- SECURITY MESSAGE -->

            <p
              style="
                color: #999999;
                font-size: 12px;
                line-height: 1.7;
                margin-top: 30px;
              "
            >
              If you did not create this account,
              you can safely ignore this email.
            </p>


            <!-- FALLBACK LINK -->

            <p
              style="
                color: #aaaaaa;
                font-size: 11px;
                line-height: 1.6;
                margin-top: 30px;
                word-break: break-all;
              "
            >
              If the button does not work, use this link:
              <br />
              ${verificationUrl}
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
  sendVerificationEmail,
};