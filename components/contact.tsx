'use client'
import { useSectionInView } from '@/lib/hooks'
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'


export default function Contact() {
    const { ref } = useSectionInView( "Контакты", 0.75);
    const formRef =  useRef<HTMLFormElement>(null);

  return (
    <motion.section id='contact' ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true,
    }}
    >
        <SectionHeading >Контакты</SectionHeading>

        <p className='text-gray-700 -mt-6 dark:text-white/80 '>Пожалуйста, свяжитесь со мной напрямую по адресу{" "}
            <a href="mailto:yanasaa@gmail.com" className='underline'>yanasaa@gmail.com</a>
            {" "}  или через эту форму: 
        </p>

        <form className='mt-10 flex flex-col dark:text-black' ref={formRef}
        action={async (formData )=> {  
            const { data, error } = await sendEmail(formData);

            if(error) {
               toast.error("Пожалуйста, проверьте Ваш email")
                return;
            }

            toast.success("Письмо успешно отправлено!")
            formRef.current?.reset()

        }}>
            <input className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' type="email" 
            placeholder='Ваш email' required maxLength={100} name='senderEmail'/>
            <textarea className='borderBlack rounded-lg h-52 my-3 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
            placeholder='Ваше сообщение...' required maxLength={5000} name='message'/>
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
