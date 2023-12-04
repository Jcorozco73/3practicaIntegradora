import nodemailer from "nodemailer"

export const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'jc.martin.orozco@gmail.com',
        pass: process.env.EMAIL_PASS
    }
})
