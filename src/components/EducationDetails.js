import {motion,useScroll} from 'framer-motion'
import React, { useRef, useState } from 'react'
import LiIcon from './LiIcon'
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const EducationDetails = ({type,time,place,info ,link,marksheet})=>{
    const ref = useRef(null);
    const [showModal, setShowModal] = useState(false);
    return(
        <Fade right duration={500} delay={100}>
            <li ref={ref} className='my-8 dark:text-light first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
                <motion.div
                initial={{ y:50 }}
                whileInView={{ y:0 }}
                transition={{ duration: 0.5, type:"spring" }}
                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                        {type} 
                    </h3>
                    <span className='capitalize font-medium text-dark/75  dark:text-light/75  xs:text-sm'>
                        {time} | {place}
                    </span>
                    <p className='font-medium w-full md:text-sm my-6'>
                        {info}
                    </p>
                    <Link href={link} target="_blank"
                    className='ml-2 rounded-lg  bg-dark text-light  p-2 px-6 text-lg font-semibold 
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light 
                    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light sm:px-4 sm:text-base md:p-2 md:px-4 md:text-base
                    '
                    download={true}
                    >
                        Certificate
                    </Link>
                    <Link  href={marksheet}  target="_blank"
                    className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base sm:text-base"
                    >Marks</Link>
                </motion.div>
            </li>
        </Fade>
    )
    
}

export default EducationDetails