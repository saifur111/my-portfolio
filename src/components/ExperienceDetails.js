import React,{useRef} from 'react'
import { Fade } from 'react-awesome-reveal';
import LiIcon from './LiIcon';
import {motion,useScroll} from 'framer-motion'

const ExperienceDetails = ({position, company , companyLink , time, address, work})=>{
     const ref = useRef(null);
    return(
        <Fade right duration={1000} delay={100}>
                <li ref={ref} className='my-8 first:mt-0 dark:text-light last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
                <motion.div
                initial={{ y:50 }}
                whileInView={{ y:0 }}
                transition={{ duration: 0.5, type:"spring" }}
                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                        {position} &nbsp;
                        <a  href={companyLink}
                            target='_blank'
                            className='text-primary dark:text-primaryDark capitalize'
                            >@{company}</a>
                    </h3>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm '>
                        {time} | {address}
                    </span>
                    <p className='font-medium w-full md:text-sm'>
                        {work}
                    </p>
                </motion.div>
            </li>
        </Fade>   
        )  
    }

export default ExperienceDetails