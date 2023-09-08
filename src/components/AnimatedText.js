import React from 'react'
import { motion } from 'framer-motion'


const quote ={
    initial : {
      opacity :1,
      y:50,
    },
    animate:{
        opacity :1,
        y:0,
        transition :{
            delay :0.5,
            staggerChildren :0.08,
        }
    }
}

const singleWord ={
    initial : {
      opacity :0,
    },
    animate:{
        opacity :1,
        transition :{
            duration : 1,
        }
    }
}
  


const AnimatedText = ({text , className=""}) => {
  return (
    <div className='w-full mx-auto py-2 px-2 flex items-center  text-center overflow-hidden
    sm:py-0 
    '>
        <motion.h1 className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-7xl
         ${className}`}
        variants={quote}
        animate={{ x: [0, 120, 0], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
        // animate = 'animate' 
        >
            {
            text.split(" ").map((word,index)=>
            <motion.span  key={word+'-'+index} className='inline-block'
            variants={singleWord}
            >
                {word}&nbsp;
            </motion.span>
            )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText