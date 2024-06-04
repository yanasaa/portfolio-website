'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import myPhoto from '@/public/ava.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { LuHardDriveDownload } from 'react-icons/lu'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
    const { ref } = useSectionInView("Обо мне")
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
    
  return (
    <section className='mb28 max-w-[50rem] text-center scroll-mt-[100rem]' id='home' ref={ref}>
        <div className='flex items-center justify-center sm:mb-0'>
            <div className='relative'>
                <motion.div 
                 initial={{opacity: 0, scale: 0}}
                 animate={{opacity: 1, scale:1}}
                 transition={{
                    type: 'tween',
                    duration: 0.2,
                 }}
                >
                    <Image src={myPhoto} alt='Yana portrait' width='192' height='192' 
                    quality="95" priority={true} 
                    className='rounded-xl h-240 w-240 object-cover
                    border-[0.35rem] border-white shadow-xl'/>
                 </motion.div>
                 {/* <motion.span className='absolute right-0 bottom-0 text-4xl'
                 initial={{opacity: 0, scale: 0}}
                 animate={{opacity: 1, scale:1}}
                 transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                 }}
                 >
                    👋
                </motion.span> */}
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl' 
         initial={{opacity: 0, y: 100}}
         animate={{opacity: 1,  y: 0}}
       
        >
            <span className='font-bold'> Здравствуйте! Меня зовут Яна.  </span>
            Я занимаюсь 
            <span className='font-bold'> фронтенд-разработкой </span> 
            уже около
            <span className='font-bold'> 1 года </span>  
            и с большим энтузиазмом создаю 
             <span className='italic'>  веб-сайты и приложения </span>
             , преимущественно, используя
             <span className='underline'> React (JS)</span>
        </motion.h1>
        <motion.div className='flex flex-col justify-center items-center sm:flex-row gap-2
        px-4 text-lg font-medium'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1,  y: 0}}
        transition={{
            delay: 0.1,
        }}
        >
            <Link className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
            rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
            active:scale-105 transition'
             href="#contact"
             onClick={() => {
                setActiveSection("Контакты");
                setTimeOfLastClick(Date.now())
             }}
             >
                Связаться со мной 
                <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2
            rounded-full outline-none focus:scale-110 hover:scale-110
            active:scale-105 transition borderBlack dark:bg-white/10'
            href="/CV.pdf" download>
                Скачать резюме 
                <LuHardDriveDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2
            rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950
            active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'
            href="https://www.linkedin.com/in/yana-matyushenko/" target='_blank'>
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2
            rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
            active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'
            href="https://github.com/yanasaa" target='_blank'>
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
