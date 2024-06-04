'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
    const { ref } = useSectionInView("Проекты")
   
  return (
    <section id='projects' className='scroll-mt-28'
    ref={ref}
    >
        <SectionHeading>my projects</SectionHeading>
        <div>
            {
                projectsData.map((project, i) => (
                    <React.Fragment key={project.title}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}


