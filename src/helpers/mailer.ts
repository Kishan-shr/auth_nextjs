import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { verify } from 'crypto';
import { Html } from 'next/document';

export const sendEmail = async ({email, password, UserId, emailType}: any) => {
    try {
        // create a hased token
    //   const hashedToken = await  bcrypt.hash(UserId.toString(),10);
    //   await User.findByIdAndUpdate(UserId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000})
    const hashedToken = await bcrypt.hash(UserId.toString(),10)
   if(emailType === 'VERIFY'){
    await User.findByIdANdUpdate(UserId,{
        verifyToken:hashedToken,
        verifyTokenExpiry:Date.now()+3600000})
    } else if (emailType === "RESET"){
        await User.findByAndUpdate(UserId,{
            forgotPasswordToken:hashedToken,
            forgotPasswordTokenExpiry:Date.now()+3600000
        })
    }
          var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: process.env.EMAIL_USER!,
            pass: process.env.EMAIL_PASS!
          },
        })

          const mailOptions ={
            from:'kishan@gmail.com',
            to:email,
            subject: emailType === "VERIFY" ? "verify your email" : "Reset Your Password",
            html:`<p> CLick <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email": "reset your password"}</p>` 
          }
          const mailresponse = await transport.sendMail(mailOptions);
          return mailresponse;
        } 
         catch (error:any) {
                throw new Error(error.message);
            }
        
        }
    