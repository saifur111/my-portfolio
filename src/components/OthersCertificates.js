

import React, {useRef } from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import OthersCertificatesDetails from './OthersCertificatesDetails'

const OthersCertificates = () => {
    const ref = useRef(null);
    return (
    <>
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16'>Other Certificates</h2>
            <div ref={ref} className='w-[100%] mx-auto relative lg:w-[100%] md:w-full'>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className="col-span-6 sm:col-span-12">
                        <OthersCertificatesDetails
                            type='Web Design & Web Development'
                            title="Crypto Screener Application"
                            img={project1}
                            link="/"
                            github="/"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <OthersCertificatesDetails
                            type='Networking'
                            title="Crypto Screener Application"
                            img={project1}
                            link="/"
                            github="/"
                        />
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}

export default OthersCertificates