import {motion,useScroll} from 'framer-motion'
import React, { useRef, useState } from 'react'
import LiIcon from './LiIcon'
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import EducationDetails from './EducationDetails';



const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    );

    return (
    <>
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
           
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{ scaleY: scrollYProgress }}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark  dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <EducationDetails 
                    type="Bachelor Of Science In Computer Science"
                    time="September, 2018 - April, 2023"
                    place="International Islamic University Chittagong"
                    info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
                    link="/bsc-cert.pdf"
                    marksheet="/bsc-mark.pdf"
                    /> 
                    <EducationDetails 
                    type="Higher Secondary Certificate"
                    time="July, 2014 - June, 2016"
                    place="Comilla Victoria Government College"
                    info="I have completed my Higher Secondary Certificate group of Science.The compulsory subjects for Science, among all the subjects are physics and chemistry. Other subjects are higher mathematics and biology. Statistics or agriculture can be substituted for the 4th subject."
                    link="/hsc-cert.pdf"
                    marksheet="/hsc-16-mark-sheet.pdf"
                    /> 
                    <EducationDetails 
                    type="Secondary Secondary Certificate"
                    time="March, 2012 - May, 2014"
                    place="Debidwar Reaz Uddin Pilot Model High School"
                    info="I have completed my Secondary School Certificate Group Of Science.Among all the subjects, the compulsory subjects for Science are Physics and Chemistry. Other subjects include Higher Mathematics and Biology. Statistics and Agriculture can be substituted for the 4th subject."
                    link="/ssc-cert.pdf"
                    marksheet="/ssc-mark.pdf"
                    /> 
                </ul>
            </div>
            
        </div>
    </>
  )
}

export default Education