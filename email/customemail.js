const nodemailer = require("nodemailer");
module.exports=async(email)=>{
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820"
    },
      });
      await transport.sendMail({
        from: "bmmaains256@gmail.com", 
        to: email,
        subject: "purchase verification",
        html: `<div>
        <h1>Purchase Successful
        </div>`,
      });
} 