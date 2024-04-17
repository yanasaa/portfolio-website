'use client'
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title, 
    description,
    tags,
    imageUrl,

}: ProjectProps) {
   
    const ref = useRef<HTMLDivElement>(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1] )
    const opacityrogress = useTransform(scrollYProgress, [0, 1], [0.6, 1] )

  return (
   <motion.div className='group mb-3 sm:mb-8 last:mb-0 '
   ref={ref} 
   style={{
       scale: scaleProgress,
       opacity: opacityrogress,
   }}

   >
    <article
    className='flex bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden 
    sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg
    dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
        <div className='flex flex-col pt-4 pb-7 py-5 pl-2 sm:pl-10 sm:pr-2 sm:max-w-[50%] h-full
        sm:group-even:ml-[18rem] '>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
            <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                {tags.map((tag, i) => (
                    <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white dark:text-white/70' 
                    key={i}>{tag}</li>
                ))}
            </ul>
        </div>

        <Image className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg 
        shadow-2xl group-even:right-[initial] group-even:-left-40 
        group-hover:scale-[1.04] transition
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        even-group:group-hover:translate-x-3 
        even-group:group-hover:translate-y-3 
        group-even:group-hover:rotate-2' 
        src={imageUrl} alt='project preview' quality={90}/>
    </article>
   </motion.div>
    )
}

