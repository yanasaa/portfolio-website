'use server'
import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/contact-form-email'
import { getErrorMessage, isValidString } from '@/lib/utils'


export const sendEmail = async(formData: FormData) => {

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')
    
   if (!isValidString(message, 5000)) {
    return {
        error: 'Invalid message'
    }
   }

   if (!isValidString(senderEmail, 100)) {
    return {
        error: 'Invalid email'
    }
   }

   let data;
   try {
    data = await resend.emails.send({
        from: "Portfolio Form <onboarding@resend.dev>",
        to: 'yanasaa@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        // text: message as string
        react: React.createElement(ContactFormEmail, {
            message: message as string, 
            senderEmail: senderEmail as string,
        })
        // react: <ContactFormEmail message={message} senderEmail={senderEmail} />
     })
   } catch (error: unknown) {
    return {
        error: getErrorMessage(error),
    }
   } 
   return {
    data,
   }
}