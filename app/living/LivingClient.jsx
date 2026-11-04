import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const LivingClient = () => {
  return (
    <>
        <Breadcrumb heading={"Student Life in Finland: Experience a New Way of Living"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
            <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Living in Finland</h2>
          <p className='text-md font-roboto mt-3'>
            Finland offers international students a modern, peaceful, and student-friendly lifestyle. With
            clean cities, beautiful natural surroundings, reliable public transportation, and well-developed
            facilities, students can enjoy a comfortable living experience while focusing on their studies.
            <br />
            <br />
            Living in Finland gives Indian students the opportunity to experience European culture, meet
            people from different backgrounds, and become more independent. The country is known for its
            organised lifestyle, high quality of life, and connection with nature. Students can also explore
            part-time work opportunities while studying.
          </p>
            </div>
            <div className=''>
              <Image className='rounded-md' width={420} height={320} src="/images/living/living.webp" alt="living in lithuania for indian students" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Life as an Indian Student in Finland</h4>
              <p className='text-md font-inter mt-3'>Student life in Finland combines academic learning, cultural experiences, and personal growth.
              Finnish universities offer an international environment where students can connect, share ideas,
              and participate in different activities.</p>
              <p className='text-inter text-md mt-2'>Students can enjoy:</p>
              <ul className='mt-3'>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;University orientation programmes</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Student clubs and cultural events</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Sports and recreational activities</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Workshops and career development programmes</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Social gatherings and networking opportunities</li>
              </ul>
              <p className='text-inter text-md mt-2'>These activities help international students make friends, understand Finnish culture, and feel more connected to their university community.</p>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Comfortable and Student-Friendly Environment</h4>
              <p className="font-roboto text-md lg:text-base text-justify">Finland provides a well-organised living environment with modern infrastructure, accessible
                public services, libraries, healthcare facilities, and efficient public transportation. Students can
                choose from different accommodation options and benefit from student services offered by
                universities.</p>
              <p className="font-roboto text-md lg:text-base text-justify">From exploring beautiful lakes and forests to enjoying city life, Finland offers a good balance
                between education, leisure, and personal well-being. Its welcoming international student
                community also helps newcomers adjust to their surroundings and settle into their new life.
                </p>
            </div>
            <div className="flex justify-end items-end">
               <Link href={'/living/accommodation'} className="text-blue-500 font-roboto hover:underline">Read Accommodation <FaArrowRightLong className="inline-block"/></Link>
            </div>
        </div>
    </>
  )
}

export default LivingClient