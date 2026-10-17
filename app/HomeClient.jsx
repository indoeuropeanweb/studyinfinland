"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaRankingStar, FaArrowsUpToLine } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { TbCircleDashedLetterL } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import { SiEuropeanunion } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Form from "./components/form/form";
import { blogs } from "@/public/data/blogs";

const HomeClient = () => {

  const backgroundHero = {
   backgroundImage: "url('/images/home/hero-girl.webp')",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat"
}
  const contactFormBanner = {
   backgroundImage: "url('/images/home/contact-form-banner.webp')",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat"
}

  return (
    <div className='min-h-screen bg-zinc-50 font-sans'>
    <section className={`h-full w-full`}>
      <main style={backgroundHero} className="min-h-140 xl:min-h-180 w-full">
        <div id="hero"></div>
        <div className="max-w-6xl h-full mx-auto">
        <div className="mx-5 min-h-120 xl:min-h-160 flex items-center">
        <div className="max-w-md md:max-w-xl">
        <h1 className="font-aino text-2xl md:text-4xl text-white leading-14">
            Study in Finland for Quality Education, Growth, and Global Career Opportunities
        </h1>
        </div>
        </div>
        <div className="mx-5 flex items-center">
            <p className="text-white text-base">share this page</p>
            <ul className="flex items-center ms-3 gap-2">
                <li><Link className="" href={'https://www.facebook.com/Indoeuropean.in'} target="_blank"><FaFacebook className="size-4 text-white"/></Link></li>
                <li><Link className="" href={'https://www.instagram.com/indo_european'} target="_blank"><FaInstagram className="size-5 text-white"/></Link></li>
                <li><Link className="" href={'https://www.youtube.com/IEESIndoEuropean'} target="_blank"><FaYoutube className="size-5 text-white"/></Link></li>
            </ul>
        </div>
       </div>   
    </main>
    </section>
    <section className="max-w-6xl mx-auto">
    <div className="py-10 mx-4">
      <h4 className="font-aino text-xl md:text-2xl mb-4">What is...</h4>
      <h2 className="font-aino text-2xl md:text-4xl mb-4">Study in Finland?</h2>
      <p className="text-lg md:text-xl mb-6">
       Study in Finland offers international students the opportunity to pursue high-quality European
        education in a country recognised for innovation, academic excellence, and student-focused
        learning.
        <br />
        <br />
       Finland is home to internationally recognised universities and universities of applied sciences
       offering Bachelor's, Master's, and Doctoral programmes across various academic disciplines.
       <br />
       <br />
       Students can explore English-taught programmes in Business Management, Information Technology, Engineering, Healthcare, Artificial Intelligence, Design, and other fields.
       <br />
       <br />
       With modern educational facilities, research opportunities, and practical learning approaches, Finland provides an excellent environment for students seeking academic development and international exposure.
     </p>
     <div className="flex justify-end items-end">
     <Link href={'/about'} className="text-blue-500 font-roboto hover:underline">Read About Us <FaArrowRightLong className="inline-block"/></Link>
     </div>
     </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="border-t border-primary">
      <div className="mx-4 mt-4">
          <h2 className="font-aino text-2xl md:text-4xl">Programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/bachelors.webp'} alt="bachelors in finland" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-2xl md:text-2xl font-aino">Bachelor's</h4>
               <p className="text-white text-sm md:text-md text-center">Pursue internationally recognised Bachelor's programmes designed to develop academic knowledge, professional skills, and practical experience. Finnish universities and universities of applied sciences offer a variety of English-taught undergraduate programmes.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/study/bachelors'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/masters.webp'} alt="bachelors in finland" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-primary text-lg md:text-2xl font-aino">Master's</h4>
               <p className="text-primary text-sm md:text-md text-center">Advance your education through specialised Master's programmes in Business, Technology, Engineering, Healthcare, and other disciplines. Finnish postgraduate education combines advanced academic knowledge with research and practical learning opportunities.</p>
               <Link className="text-white bg-primary px-6 py-2 rounded-full border border-primary text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/study/masters'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/doctoral.webp'} alt="bachelors in finland" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">PhD</h4>
               <p className="text-white text-sm md:text-md text-center">Explore doctoral research opportunities at Finnish universities. PhD programmes provide opportunities to contribute to academic research, work with experienced supervisors, and develop expertise in specialised fields.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/study/phd'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div>
               <Image className="w-full h-50 md:h-auto lg:max-h-47" width={360} height={60} src={'/images/home/short-courses.webp'} alt="bachelors in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-primary text-lg md:text-2xl font-aino">All Programmes</h4>
               <p className="text-primary text-sm md:text-md text-center">Discover a wide range of English-taught degree programmes offered by Finnish higher education institutions. Choose a programme that matches your academic qualifications, interests, and future career goals.</p>
               <Link className="text-white bg-primary px-6 py-2 rounded-full border border-primary text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/study/programmes'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
            </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          </div>
      </div>
      </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="py-12 px-4 flex flex-col justify-center items-center gap-6">
        <h2 className="font-aino text-2xl md:text-4xl">Application deadlines are approaching</h2>
        <p className="font-roboto text-lg md:text-base">Planning to study in Finland? Explore upcoming university intakes, admission requirements, and
          application deadlines.
          <br />
          <br />
          Admission periods may vary depending on the university, degree programme, and application
          route.
        </p>
      <Link className="px-6 py-2 bg-primary hover:bg-primary/75 duration-300 ease-in-out text-white text-lg rounded-full flex justify-center items-center" href={'/contact'}>Contact Us &nbsp;<FaArrowRightLong className="size-5 inline-block"/></Link>
      </div>
    </section>
    <section className="">
        <div className="relative">
          <Image className="h-auto w-full max-h-200" width={1080} height={600} src="/images/home/why-lithuania.webp" alt="Study in Lithuania" />
          <div className="absolute z-2 bottom-0 w-full h-full bg-linear-to-t from-primary via-primary to-primary/10" />
          <h2 className="absolute top-12 left-1/2 -translate-x-1/2 z-3 text-2xl md:text-4xl font-aino">why Lithuania?</h2>
          <div className="relative z-3 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 px-8">
              <div className="mx-auto">
                 <Image className="mb-5 rounded-md w-full h-full" width={360} height={480} src="/images/home/map.webp" alt="study abroad lithuania map"/>
              </div>
              <div className="mb-5">
                 <ul className="pr-5">
                  <li className="flex items-center gap-1 text-white my-10"><TbCircleDashedLetterL className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Finland is recognised for its student-centred education system, innovative teaching methods, and strong academic standards.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><BsBank className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Finnish higher education institutions offer respected qualifications and opportunities for international academic and professional development.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><SiEuropeanunion className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">International students can choose from numerous English-taught Bachelor's and Master's programmes across different academic fields.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><AiFillSafetyCertificate className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Finland provides opportunities to explore advanced technologies, scientific research, entrepreneurship, and innovation-focused education.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><FaRankingStar className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Finland offers a modern, welcoming, and multicultural environment for international students.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><FaArrowsUpToLine className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Students can explore internships, professional networking, and employment opportunities, subject to applicable regulations and labour market conditions.</p></li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="">
      <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/scholarships.webp'} alt="scholarships in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-2xl md:text-2xl font-aino">Scholarships</h4>
               <p className="text-white text-sm md:text-md text-center">Scholarships in Lithuania help international students reduce tuition fees and study expenses based on academic performance and eligibility criteria.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/study/scholarships'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/admission.webp'} alt="admission in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-primary text-lg md:text-2xl font-aino">Admission</h4>
               <p className="text-primary text-sm md:text-md text-center">Admission in Lithuania universities is simple, requiring academic documents, English proficiency proof, and timely application submission before deadlines.</p>
               <Link className="text-white bg-primary px-6 py-2 rounded-full border border-primary text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/study/admission'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/working.webp'} alt="working in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">Working</h4>
               <p className="text-white text-sm md:text-md text-center">There is Work Opportunity for Students in Lithuania, Students can work part-time during studies, gaining practical experience and supporting their living costs effectively.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/living/working'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div>
               <Image className="w-full h-50 md:h-auto lg:max-h-47" width={360} height={60} src={'/images/home/visa-and-residence-permit.webp'} alt="visa and residence permit in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-primary text-lg md:text-2xl font-aino text-center">Visa and Residence Permit</h4>
               <p className="text-primary text-sm md:text-md text-center">A <Link className="hover:underline" href="/living/visa-and-residence-permit">student visa and residence permit</Link> are required to study in Lithuania, allowing legal stay and smooth access to education benefits.</p>
               <Link className="text-white bg-primary px-6 py-2 rounded-full border border-primary text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/living/visa-and-residence-permit'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
            </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          </div>
      </div>
      </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="my-12 mx-6">
          <h2 className="font-aino text-2xl md:text-4xl">Blogs</h2>
          <div className="mt-10">
            <div className="">
              <ul className="space-y-10 grid grid-cols-1 md:grid-cols-2 space-x-10">
                {blogs.slice(0, 6).map((blog, index) => {
                  return <li key={blog.id}>
                  {/* <h4 className="font-aino mb-3">{blog.title}</h4> */}
                  <div className="flex justify-center gap-2">
                    <div className="">
                      <Image className="max-w-50" height={160} width={200} src={`${blog.image}`} alt={`${blog.title}`} />
                    </div>
                    <div className="">
                         <h4 className="font-aino">{blog.metaTitle}</h4>
                         <div className="flex justify-between items-center mt-4">
                          {/* <span className="font-roboto text-sm md:text-md">{blog.publishDate}</span> */}
                          <Link className="text-primary hover:underline text-end ms-auto" href={`/blogs/${blog.slug}`}>Read more <FaArrowRightLong className="size-4 inline-block"/></Link>
                         </div>
                    </div>
                  </div>
                </li>
                })}
              </ul>
          <div className="flex justify-end items-center mt-12">
            <Link className="px-4 py-2 border-2 border-primary text-primary bg-white rounded-full hover:bg-primary hover:text-white duration-300 ease-in-out" href={`/blogs`}>All Blogs &nbsp;<FaArrowRightLong className="size-6 inline-block"/></Link>
          </div>
            </div>
          </div>
      </div>
    </section>
    <section className="py-12" style={contactFormBanner}>
      <div className="max-w-6xl mx-auto">
      <h2 className="font-aino text-white text-2xl md:text-4xl ms-6 pb-5">Connect With Us</h2>
       <div className="grid grid-cols-1 lg:grid-cols-3">
         <div className="col-span-2 p-3">
           <Form />
         </div>
         <div className="space-y-4 col-span-1 p-6">
           <h4 className="font-aino text-xl md:text-2xl text-white">Contact</h4>
            <div className="relative w-60 h-45 sm:w-90 sm:h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10724.278781509209!2d77.07865525541992!3d28.635596400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bee270eea1%3A0xa4b0610ae05bae2d!2sIndo%20European%20%7C%20Study%20Abroad%20Consultants%20-%20Head%20Office!5e1!3m2!1sen!2sin!4v1779533148044!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-4">
            <span className="font-aino text-white">Follow us on :</span>
            <ul className="flex items-center gap-2">
              <li className="text-white"><Link target="_blank" href={'https://www.facebook.com/Indoeuropean.in'}><FaFacebook className="size-6 inline-block"/></Link></li>
              <li className="text-white"><Link target="_blank" href={'https://www.instagram.com/indo_european'}><FaInstagram className="size-6 inline-block"/></Link></li>
              <li className="text-white"><Link target="_blank" href={'https://www.youtube.com/IEESIndoEuropean'}><FaYoutube className="size-6 inline-block"/></Link></li>
            </ul>
           </div>
         </div>
       </div>
       </div>
    </section>
    </div>
  )
}

export default HomeClient