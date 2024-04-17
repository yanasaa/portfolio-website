'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'

import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView( "About",  0.75)

  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1,  y: 0}}
    transition={{
        delay: 0.175
    }}
    id='about'
    ref={ref}
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
    </motion.section>
  )
}
