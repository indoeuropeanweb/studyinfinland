import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const LithuaniaClient = () => {
  return (
    <>
         <Breadcrumb heading={"Cost of Studying in Finland for Indian Students"}/>
         <div className='py-5 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Study in Finland – Build Your Future in Europe's Hub of Innovation and Learning</h2>
               <p className='text-justify font-roboto text-lg mt-3'>Finland is a preferred study destination among Indian students due to its high-quality education,
                  world-class universities, and innovative learning environment. The country offers a great
                  opportunity for students to learn in an English-taught environment and be a part of the modern
                  educational ecosystem.
                  <br />
                  <br />
                  For Indian students, Finland is an excellent choice to gain a prestigious European education
                  and broaden their horizons culturally and socially. Students can consider courses in business
                  administration, information technology, engineering, healthcare, artificial intelligence, design,
                  and many more disciplines. 
                  <br />
                  <br />
                  Moreover, it is vital to choose the right study abroad destination, and Finland attracts more
                  students yearly, offering high-quality education, research, employment opportunities, and a
                  vibrant academic environment in Europe.</p>
              <div className='mt-10'>
                <h2 className='font-roboto text-xl md:text-2xl'>Benefits of Studying in Finland for Indian Students</h2>
                <h4 className='text-lg font-inter mt-3'>Studying in Finland offers several benefits beyond academics:</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>High-Quality Education:</b> Finland is recognised for its excellent education system,
                           innovative teaching methods, and student-centred learning. Finnish universities focus on
                           developing practical skills, independent thinking, and academic knowledge to prepare
                           students for future opportunities.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Internationally Recognised Qualifications:</b> Finnish universities and universities of
                           applied sciences offer respected European qualifications. Students benefit from
                           internationally recognised degrees that support further education and professional
                           development across different countries.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Diverse Range of Study Programmes::</b> Students can explore English-taught Bachelor's
                           and Master's programmes in business management, information technology, artificial
                           intelligence, engineering, healthcare, design, and social sciences. These programmes
                           combine theoretical knowledge with practical learning.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Global Learning Environment:</b> Finland welcomes international students from different
                           cultural and educational backgrounds. Its multicultural campuses provide opportunities
                           to develop communication skills, experience different cultures, and build valuable
                           international connections.</li>
                      </ul>
                   <Image className="h-auto w-auto rounded-md" src="/images/lithuania/study-in-lithuania.webp" width={480} height={250} alt="study abroad lithuania" />
                 </div>
                 <div className=''>
                  <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Part-Time Work Opportunities:</b> Eligible international students holding a Finnish
                           residence permit for studies can generally work an average of 30 hours per week. Part-
                           time employment may help students gain professional experience, develop practical
                           skills, and contribute towards living expenses.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Career Opportunities After Graduation:</b> Finland offers opportunities for graduates to
                           explore careers in technology, engineering, business, research, and other industries.
                           Eligible international graduates may also apply for a residence permit to seek
                           employment or start a business after completing their studies.</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Safe and Comfortable Student Life:</b> Finland is known for its safe environment, modern
                           infrastructure, beautiful natural surroundings, and high quality of life. Students can enjoy
                           a balanced lifestyle while studying in a welcoming and supportive academic
                           environment.</li>
                        {/* <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Global exposure:</b> Studying in Lithuania gives you permission to make
                           connections with other students from other countries and allows you to interact
                           with them from a global perspective.</li> */}
                  </ul>
                 </div>
               </div>
               <div className='my-10'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5'>What Makes Us Different?</h2>
                      <p className='font-inter text-base'>Applying to the universities in Finland can be a lengthy and complex process, ranging from
                        identifying the most suitable programs to preparing all the necessary paperwork and getting a
                        residence permit. However, with the support of the Finland Study Centre, the students are
                        ensured to receive the most accurate and personalized guidance in making their educational
                        choices.</p>
                      <h4 className='text-lg md:text-xl font-roboto mt-5'>What makes us different?</h4>
                      <ul className='space-y-3 mt-3'>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Personalised Student Counselling:</b> Every student has different academic
                           qualifications, interests, and career goals. Our experienced counsellors help students
                           explore suitable study options in Finland based on their educational background and
                           future plans.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>University and Course Selection Support:</b> Choosing the right university is essential
                           for academic success. We assist students in comparing Finnish universities,
                           understanding programme requirements, and selecting courses aligned with their
                           academic interests.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Admission Application Assistance:</b> From reviewing academic documents to preparing
                           and submitting university applications, our consultants guide students through the
                           admission process and help them understand important deadlines and requirements.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Finland Student Residence Permit Guidance:</b> Understanding Finland&#39;s residence
                           permit requirements can be challenging. Our consultants provide guidance on financial
                           documentation, health insurance, application procedures, and other requirements
                           established by the Finnish Immigration Service.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Scholarship and Financial Planning Support:</b> Students can explore university
                           scholarships, tuition fee waivers, estimated living expenses, and available funding
                           options to plan their education budget effectively before applying.</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Pre-Departure Assistance:</b> Preparing to study in Finland involves accommodation
                           planning, travel arrangements, and understanding student life. Our team provides
                           guidance to help students prepare for their transition to Finland.</li>
                      </ul>
                      <p className='mt-5 text-justify'>Start your journey towards a globally recognised European education and find out why
                        international students choose Finland for their academic excellence, innovative learning, and
                        future career opportunities. 
                        <br /> <br />
                        Helping students achieve their dream of studying in Finland with expert guidance on university
                        admissions, scholarships, student residence permits, and career opportunities.
                        </p>
               </div>
               <div className="flex justify-end items-end">
                  <Link href={'/finland/state'} className="text-blue-500 font-roboto hover:underline">Read about state <FaArrowRightLong className="inline-block"/></Link>
               </div>
         </div>
      </>
  )
}

export default LithuaniaClient