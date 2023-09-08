import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/homepage1.png"
import lightBulb from "../../public/images/profile/homepage2.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>MSR | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
          <Layout className="pt-0 md:pt-16 sm:pt-8
          ">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="w-1/2 md:w-full">
                <Image src={profilePic} alt="" className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width:768px) 100vw,(max-width: 1200px) 50vw , 50vw"
                />
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-5xl !text-left 
                xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-3xl sm:!text-2xl 
                '></AnimatedText>
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link  href='/dummy.pdf' target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base " 
                  download={true}
                  >Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <HireMe/>
          <div className="absolute right-8 bottom-8 inline-block w-36 md:hidden">
            <Image src={lightBulb} alt="MSRS" className="w-full h-auto"/>
          </div>
      </main>
    </>
  )
}