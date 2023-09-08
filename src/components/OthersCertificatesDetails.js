
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const OthersCertificatesDetails =({type,title,img,link,github})=>{

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl relative p-6 xs:p-4
        '>
            <div className="absolute dark:text-light top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl md:-right-3 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] 
            "/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer  overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                priority
                sizes="(max-width:768px) 100vw,(max-width: 1200px) 50vw , 50vw"
                />
            </Link>
            <div className='w-full flex flex-col dark:text-light items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h3 className='my-2 w-full text-2xl font-bold lg:text-2xl'>{title}</h3>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                className=' font-semibold underline md:text-base
                '
                >
                    Visit
                </Link>
                <Link href={github} target='_blank' className='w-8 md:w-6'>
                    <GithubIcon/>
                </Link>
                </div>
            </div>
        </article>
    )
}

export default OthersCertificatesDetails