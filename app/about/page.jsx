import Breadcrumb from '../components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io'
import Image from "next/image";
import {
  FaUniversity,
  FaUserGraduate,
  FaCheckCircle,
  FaAward,
  FaLanguage,
  FaGlobeEurope,
} from "react-icons/fa";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Finland Study Abroad Consultants | About Us",
  description: "Meet trusted Finland study abroad consultants offering expert guidance for university admissions, scholarships, student visas, IELTS preparation and personalised study abroad support for Indian students.",
  keywords: [
        "Finland study abroad consultants",
        "study in Finland consultants",
        "Finland education consultants",
        "Finland student visa consultants",
        "study in Finland for Indian students",
        "Finland university admission consultants",
        "Finland study visa guidance",
        "study abroad consultants for Finland",
        "Finland scholarship guidance",
        "overseas education consultants"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/about"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Finland Study Abroad Consultants | About Us",
    description:
      "Meet trusted Finland study abroad consultants offering expert guidance for university admissions, scholarships, student visas, IELTS preparation and personalised study abroad support for Indian students.",
    url: "https://www.studyinfinland.in/about/",
    siteName: "Study in Finland Centre",
    images: [
      {
        url:
          "https://www.studyinfinland.in/images/contact/our-expert.webp",
        width: 1200,
        height: 630,
        alt: "About Study in Finland Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Finland Study Abroad Consultants | About Us",
    description:
      "Meet trusted Finland study abroad consultants offering expert guidance for university admissions, scholarships, student visas, IELTS preparation and personalised study abroad support for Indian students.",
    images: [
      "https://www.studyinfinland.in/images/contact/our-expert.webp",
    ],
  },
}

const page = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinfinland.in/",
        "name": "Study in Finland Centre",
        "url": "https://www.studyinfinland.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinfinland.in/images/logos/logo.png"
        },
        "description":
          "Meet trusted Finland study abroad consultants offering expert guidance for university admissions, scholarships, student visas, IELTS preparation and personalised study abroad support for Indian students."
      },
      {
        "@type": "AboutPage",
        "@id":
          "https://www.studyinfinland.in/about/#aboutpage",
        "url":
          "https://www.studyinlithuania.in/about/",
        "name":
          "Finland Study Abroad Consultants | About Us",
        "description":
          "Meet trusted Finland study abroad consultants offering expert guidance for university admissions, scholarships, student visas, IELTS preparation and personalised study abroad support for Indian students.",
        "isPartOf": {
          "@id":
            "https://www.studyinfinland.in/#website"
        },
        "about": {
          "@id":
            "https://www.studyinfinland.in/#organization"
        }
      },
      {
        "@type": "Service",
        "@id":
          "https://www.studyinfinland.in/about/#service",
        "name":
          "Finland Study Abroad Consultation",
        "serviceType":
          "Education Consultancy",
        "provider": {
          "@id":
            "https://www.studyinfinland.in/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description":
          "Counselling, university selection, application support, scholarship guidance and visa assistance."
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinfinland.in/about/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item":
              "https://www.studyinfinland.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item":
              "https://www.studyinfinland.in/about/"
          }
        ]
      }
    ]
  };

  return (
    <>
     <Breadcrumb heading={'About Us – Your Journey to Study in Finland Starts Here'}/>
     <div className='mx-auto max-w-6xl'>
         <div className='py-10 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Making International Education Accessible</h2>
               <p className='text-justify font-roboto text-base md:text-lg mt-3'>We believe that quality education has the power to transform futures. With over 22 years of
                experience in overseas education, we help students explore international academic
                opportunities and take confident steps towards their career goals.
                With a focus on Finland, our aim is to simplify the study abroad journey through personalised
                counselling, university selection, admission assistance and student visa guidance. Our
                extensive experience and connections with 200+ universities help students explore suitable
                educational pathways based on their academic profiles and ambitions.
                Whether you are planning a Bachelor's or Master's degree, we are here to make your journey
                towards studying in Finland easier and more organised.</p>
              <div className='mt-10'>
                <h2 className='font-roboto text-xl md:text-2xl font-semibold text-gray-500'>Why Choose Us?</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Experienced Guidance:</strong> Over two decades of experience in international education and student counselling.</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Personalised Counselling:</strong> Course and university recommendations based on your qualifications, interests and career goals.</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>University Network:</strong> Connections with 200+ universities across international study destinations.</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Admission Assistance:</strong> Support with university shortlisting, applications and documentation.</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Visa Guidance:</strong> Assistance with Finland student residence permit requirements and application procedures.</li>
                         <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Complete Student Support:</strong> Guidance from initial counselling and test preparation to pre-departure assistance.</li>
                      </ul>
                   <Image className="rounded-md" src="/images/about/study-in-finland-centre.webp" width={450} height={450} alt="study abroad finland" />
                 </div>
                 <div className=''>
                    <p className='text-justify font-roboto text-md lg:text-base mt-3'>Our commitment to quality counselling and personalised assistance has helped us maintain a
                      99% visa success rate, making us a trusted choice for students planning to study overseas.</p>
                 </div>
               </div>
               <div className='my-10'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5 font-semibold text-gray-500'>Our Services</h2>
                      <p className='font-roboto text-md lg:text-base text-justify'>We provide comprehensive support to help students plan their education in Finland.</p>
                      <ul className='space-y-3 mt-3'>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Career Counselling:</strong> Discover suitable academic programmes based on your interests and future aspirations.</li>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>University & Course Selection:</strong> Explore Finnish universities and English-taught programmes that match your profile.</li>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Admission Assistance:</strong> Get guidance with eligibility checks, application forms and required documents.</li>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>IELTS & English Test Preparation:</strong> Prepare for IELTS, PTE Academic and Duolingo English Test according to university requirements.</li>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Scholarship & Financial Guidance:</strong> Explore scholarship options, tuition fees and financial planning.</li>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Finland Student Visa Assistance:</strong> Understand residence permit procedures, financial requirements and health insurance documentation.</li>
                        <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<strong>Pre-Departure Support:</strong> Prepare for accommodation, travel and student life in Finland.</li>
                      </ul>
               </div>
               <div className='my-10'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5 font-semibold text-gray-500'>Why Study in Finland?</h2>
                      <p className='font-roboto text-md lg:text-base text-justify'>Finland is an attractive destination for international students because of its quality education, innovative teaching methods and welcoming academic environment.</p>
                      <ul className='space-y-3 mt-3'>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Globally recognised higher education institutions.</li>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Hundreds of English-taught Bachelor's and Master's programmes.</li>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Research-oriented and practical learning opportunities</li>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Modern infrastructure and technology-driven education.</li>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;International student community and multicultural exposure.</li>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Opportunities for internships, part-time work and career development, subject to applicable rules.</li>
                          <li className='font-roboto text-justify text-md lg:text-base'><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;A high quality of life and student-friendly environment.</li>
                      </ul>
                      <p className='mt-5 text-justify text-md lg:text-base'>These institutions offer a wide range of English-taught programmes and provide a supportive environment for indian students.</p>
               </div>
                <div className="my-10">
                  <div className="mb-10">
                    <h2 className="font-roboto text-xl md:text-2xl mt-3 font-semibold text-gray-500">
                      Our Journey in Numbers
                    </h2>
                    <p className="text-gray-600 mt-3 text-md lg:text-base">
                      Finland offers affordable education, globally recognized degrees,
                      and excellent opportunities for indian students.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaUniversity className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">22+</h3>
                      <p className="mt-2 text-gray-600 text-md lg:text-base">
                        Years of Overseas Education Experience
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaUserGraduate className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">5,000+</h3>
                      <p className="mt-2 text-gray-600 text-md lg:text-base">
                        Students Successfully Guided
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaCheckCircle className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">99%</h3>
                      <p className="mt-2 text-gray-600 text-md lg:text-base">
                        Visa Success Rate
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaAward className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">3000+</h3>
                      <p className="mt-2 text-gray-600 text-md lg:text-base">
                        Scholarship Opportunities
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaLanguage className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">600+</h3>
                      <p className="mt-2 text-gray-600 text-md lg:text-base">
                        English-Taught Bachelor's & Master's Programmes in Finland
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaGlobeEurope className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">International</h3>
                      <p className="mt-2 text-gray-600 text-md lg:text-base">
                        Welcoming Student Community
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 bg-primary text-white rounded-2xl p-8">
                    <p className="text-center text-md lg:text-base leading-relaxed">
                      We believe studying abroad is more than earning a degree—it's an
                      opportunity to build a successful global career and gain
                      life-changing international experience.
                    </p>
                  </div>
                </div>
         </div>
          <div className="flex justify-end items-end">
               <Link href={'/contact'} className="text-blue-500 font-roboto hover:underline">Contact Us<FaArrowRightLong className="inline-block"/></Link>
          </div>
         </div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  )
}

export default page