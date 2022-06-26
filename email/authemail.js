const nodemailer = require("nodemailer");
exports.verifyemail=async(email,OTP)=>{
  
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820"
    }
      });
      await transport.sendMail({
        from: "baainzzy256@gmail.com", 
        to: email,
        subject: "purchase verification",
        html: `<div>
        <h1>${OTP}</h1>
        </div>`,
      });
  
} 

exports.emailverified=async(email)=>{
  
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820"
    }
      });
      await transport.sendMail({
        from: "baainzzy256@gmail.com", 
        to: email,
        subject: "verification successful",
        html: `<div>verification succesfulley
        </div>`,
      });
} 


