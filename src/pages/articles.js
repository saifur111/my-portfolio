import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import imageArticle from '../../public/images/articles/pagination component in reactjs.jpg'
import imageArticle1 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({title,link,img})=>{

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef =useRef(null);

    function handelMouse (event){
        imgRef.current.style.display ='inline-block';
        x.set(event.pageX);
        y.set(-10);
    }
    function handelLeave (event){
        imgRef.current.style.display ='none';
        x.set(0);
        y.set(0);
    }
    return(
        <Link href={link} target='_blank'
        onMouseMove={handelMouse}
        onMouseLeave={handelLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline xs:text-lg'>
                {title}
            </h2>
            <FramerImage
            style={{ x:x,y:y }}
            initial={{ opacity:0 }}
            whileInView={{ opacity:1, transition:{duration:0.2} }}
            priority
            sizes="(max-width:768px) 100vw,(max-width: 1200px) 50vw , 50vw"
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
        </Link>
    )
}

const FeaturedArticle = ({img, title, time ,summary, link})=>{

    return(
        <li className='relative col-span-1 w-full p-4 dark:text-light bg-light dark:bg-dark border boder-solid border-dark dark:border-light rounded-2xl'>
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl 
            "/>
            <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                priority
                sizes="(max-width:768px) 100vw,(max-width: 1200px) 50vw , 50vw"
                />
            </Link>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full mt-4 text-2xl font-bold capitalize hover:underline'>{title}</h2>
            </Link>
            <p className='mb-2 text-sm  text-dark dark:text-light'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold '>{time}</span>
        </li>
    )
}

const Article = ({img,title,date,link})=>{
    return(
        <motion.li 
        initial={{ y:200 }}
        whileInView={{ y:0,transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{ once:true }}
        className='relative  w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col
        '>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>

        </motion.li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>MSRS | Articles Page</title>
            <meta name="description" content="Projetcs Description" />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 dark:text-light flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='mt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-y-16 '>
                        <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        time="9 min read"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        link="/"
                        img={imageArticle}
                        />
                        <FeaturedArticle
                        title='Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens'
                        time="10 min read"
                        summary="Learn how to create stunning loading screens in React with 3 different methods. 
                        Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                        Improve the user experience."
                        link="/"
                        img={imageArticle1}
                        />
                </ul>
                <h2 className='font-bold mt-32 text-4xl w-full text-center my-16 '>All Articles</h2>
                <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                link="/"
                img={imageArticle}
                />
                <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                link="/"
                img={imageArticle}
                />
                <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                link="/"
                img={imageArticle}
                />
                <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                link="/"
                img={imageArticle}
                />
                <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                link="/"
                img={imageArticle}
                />
                <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                link="/"
                img={imageArticle}
                />
            </Layout>
        </main>
    </>
  )
}

export default articles