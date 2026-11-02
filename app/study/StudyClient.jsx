import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const StudyClient = () => {
  return (
    <>
         <Breadcrumb heading={"Dream Beyond Borders. Learn with Purpose. Build Your Future in Finland"}/>
         <div className='py-5 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Why Study in Finland?</h2>
               <p className='text-justify font-roboto text-md lg:text-base mt-3'>Finland has become one of Europe's most attractive study destinations for international students seeking high-quality education, innovative learning and global career opportunities. Known for its student-centred education system, internationally recognised universities and advanced research facilities, Finland offers an excellent environment for academic and personal development.</p>
              <p className='text-justify font-roboto text-md lg:text-base mt-3'>With a wide range of English-taught programmes and a strong focus on practical skills, studying in Finland for Indian students provides an opportunity to earn a recognised European degree while gaining international exposure.</p>
              <p className='text-justify font-roboto text-md lg:text-base mt-3'>Whether you are planning to pursue an undergraduate, postgraduate or doctoral degree, Finland offers diverse academic opportunities to support your educational and professional ambitions.</p>
              <div className='mt-5'>
                <h4 className='text-xl md:text-2xl font-roboto text-gray-500'>What Makes Finland an Attractive Study Destination? </h4>
                <p className='text-justify font-roboto text-md lg:text-base mt-2'>Students from around the world choose Finland for its combination of educational excellence, innovation and quality of life.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Globally recognised degrees and internationally respected qualifications</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;High-quality education and student-centred teaching methods</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;English-taught Bachelor's and Master's degree programmes</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Modern universities with advanced research and learning facilities</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Innovative learning environment focused on creativity and independent thinking</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Scholarship opportunities and tuition fee waivers for eligible international students</li>
                      </ul>
                   <Image className="h-auto w-auto rounded-md" src="/images/study/finland-01.webp" width={400} height={250} alt="study abroad Finland" />
                 </div>
                 <div className=''>
                  <ul className='mt-3 space-y-3'>
                         {/* <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;International students have a variety of <Link className='font-semibold hover:underline' href='/study/bachelors'>Bachelor's</Link>, <Link className='font-semibold hover:underline' href='/study/masters'>Master's</Link>, and <Link className='font-semibold hover:underline' href='/study/phd'>PhD</Link> programs to choose from.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<Link className='font-semibold hover:underline' href='/study/admission'>Admission process</Link> is straightforward with various intakes and flexible study modes.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<Link className='font-semibold hover:underline' href='/study/visa-and-residence-permit'>Student-friendly visa process</Link> for Indian students intending to study in Lithuania</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Great research, internship, and career development opportunities in academics</li> */}
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Safe, peaceful and student-friendly environment</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Multicultural campuses with international student communities</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Practical learning opportunities and industry-focused education</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Excellent opportunities for research, technology and professional development</li>
                  </ul>
                 </div>
               </div>
               <div className='mt-5'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5 text-gray-500'>Why Study at Universities in Finland?</h2>
                      <p className='font-inter text-base'>Finnish universities are known for combining academic excellence with practical learning, research and innovation. The country's higher education system offers two main types of institutions: research-oriented universities and Universities of Applied Sciences (UAS).</p>
                      <ul className='space-y-3 mt-5'>
                          <li className='font-roboto text-justify'>
                           <h5 className='font-semibold font-roboto text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;&nbsp;Academic Excellence</h5>
                           <p className='font-roboto text-md lg:text-base mt-2'>Finnish higher education institutions follow internationally recognised academic standards. Students benefit from quality teaching, modern facilities and qualifications that support further education and global career opportunities.</p>
                          </li>
                          <li className='font-roboto text-justify'>
                           <h5 className='font-semibold font-roboto text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;&nbsp;Innovative and Career-Oriented Programmes</h5>
                           <p className='font-roboto text-md lg:text-base mt-2'>Finland encourages creativity, independent thinking and practical problem-solving. Universities of Applied Sciences focus on industry-relevant skills, while research universities offer opportunities for academic development and specialised studies.</p>
                          </li>
                          <li className='font-roboto text-justify'>
                           <h5 className='font-semibold font-roboto text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;&nbsp;International Student Experience</h5>
                           <p className='font-roboto text-md lg:text-base mt-2'>With students from different parts of the world, Finland offers a multicultural learning environment. International students can experience Finnish traditions, explore beautiful natural surroundings and develop valuable global connections.</p>
                          </li>
                          <li className='font-roboto text-justify'>
                           <h5 className='font-semibold font-roboto text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;&nbsp;Scholarships and Affordable Study Opportunities</h5>
                           <p className='font-roboto text-md lg:text-base mt-2'>Although tuition fees apply to non-EU/EEA students in English-taught Bachelor's and Master's programmes, many Finnish universities offer scholarships and tuition fee waivers to eligible international students. Students can explore different funding opportunities while planning their education and living expenses.</p>
                          </li>
                      </ul>
               </div>
               <div className='my-5'>
                    <h2 className='text-xl md:text-2xl font-roboto text-gray-500'>Build Your Future in Europe</h2>
                    <p className='text-md lg:text-base font-roboto mt-2'>Studying in Finland is more than earning an international degree. It is an opportunity to develop new skills, experience a different culture and prepare for a global career. With innovative universities, modern learning facilities and a peaceful lifestyle, Finland provides an inspiring environment for students who want to achieve their academic and professional goals.</p>
                    <p className='text-md lg:text-base font-roboto mt-2'>Helping students achieve their dream of studying in Finland with expert guidance on university admissions, course selection, scholarships, student residence permits and career opportunities.</p>
                    <p className='font-semibold text-md lg:text-base font-roboto mt-2'>Explore Your Options. Choose Your Programme. Begin Your Finland Journey.</p>
               </div>
                <div className="flex justify-end items-end">
                  <Link href={'/study/universities'} className="text-blue-500 font-roboto hover:underline">Read about Universities <FaArrowRightLong className="inline-block"/></Link>
               </div>
         </div>
      </>
  )
}

export default StudyClient