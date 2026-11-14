import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';


export const metadata = {
  title: "Bachelor Degree in Finland for Indian Students | Study in Finland",
  description: "Explore bachelor degree in Finland for Indian students. Discover top courses, universities, eligibility requirements, admission process and study opportunities.",
  keywords: [
      "bachelor degree in Finland",
      "bachelor's courses in Finland",
      "study bachelor's in Finland",
      "bachelor programmes in Finland",
      "bachelor's universities in Finland",
      "undergraduate courses in Finland",
      "Finland admission requirements",
      "study in Finland for Indian students",
      "English taught bachelor's programmes in Finland",
      "Finland student admission"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/study/bachelors"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinfinland.in/study/bachelors/",
    siteName: "Study in Finland",
    title:
      "Bachelor Degree in Finland for Indian Students | Study in Finland",
    description:
      "Explore bachelor degree in Finland for Indian students. Discover top courses, universities, eligibility requirements, admission process and study opportunities.",
    images: [
      {
        url: "https://www.studyinfinland.in/images/study/finland-01.webp",
        width: 1200,
        height: 630,
        alt: "Bachelor's Programs in Finland",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bachelor Degree in Finland for Indian Students | Study in Finland",
    description:
      "Explore bachelor degree in Finland for Indian students. Discover top courses, universities, eligibility requirements, admission process and study opportunities.",
    images: [
      "https://www.studyinfinland.in/images/study/finland-01.webp",
    ],
  },
}


const page = () => {

  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinfinland.in/#organization",
      name: "Study in Finland",
      url: "https://www.studyinfinland.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studyinfinland.in/images/logos/logo.webp",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinfinland.in/study/bachelors/#webpage",
      url:
        "https://www.studyinfinland.in/study/bachelors/",
      name: "Bachelor Degree in Finland for Indian Students | Study in Finland",
      description:
        "Explore bachelor degree in Finland for Indian students. Discover top courses, universities, eligibility requirements, admission process and study opportunities.",
      isPartOf: {
        "@id": "https://www.studyinfinland.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.studyinlithuania.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Study",
          item: "https://www.studyinlithuania.in/study/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bachelor's",
          item:
            "https://www.studyinlithuania.in/study/bachelors/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Begin Your International Education Journey with a Bachelor's Degree in Finland"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Bachelor’s Courses in Lithuania</h2>
        <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Finnish universities and Universities of Applied Sciences (UAS) offer a wide range of undergraduate programmes across different academic fields. Students can choose courses based on their interests, academic background and career goals.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-gray-500'>Popular Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Business Administration</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;International Business</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Computer Science and Information Technology</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Software Engineering</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Mechanical Engineering</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Electrical Engineering</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Nursing and Healthcare</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Tourism and Hospitality Management</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Design and Creative Industries</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Environmental Sciences</li>
          </ul>
        <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Bachelor's degrees generally take 3 years at research universities and 3.5–4 years at Universities of Applied Sciences, depending on the programme.</p>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-gray-500'>Eligibility Requirements to Study Bachelor's in Finland</h2>
          <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Indian students must meet the admission criteria of their selected university and programme.</p>
          <p className='mt-3 text-md lg:text-base text-justify text-roboto'>General eligibility requirements include:</p>
          <ul className='mt-5 space-y-2'>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Completion of Class 12 from a recognised education board</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Academic transcripts and educational certificates</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Valid passport</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;English language proficiency through IELTS, TOEFL, PTE or other accepted qualifications, where required.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;SAT scores or entrance examinations, if required by the university</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Additional documents or portfolios for specific programmes</li>
          </ul>
          <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Admission requirements and English language scores vary between institutions, so students
should check the individual programme criteria.</p>
        </div>
        <div className='mt-10'>
          <h2 className="text-xl md:text-2xl font-roboto text-gray-500">Why Study Bachelor's in Finland?</h2>
          <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Finland offers several advantages for international students looking for quality undergraduate education.</p>
          <ul className='mt-5 space-y-2'>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Globally Recognised Education:</span> Earn an internationally respected European qualification.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">English-Taught Programmes:</span> Choose from undergraduate courses available in English.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Practical Learning:</span> Develop industry-relevant skills through projects and practical training.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Modern Universities:</span> Access advanced learning facilities and innovative teaching methods.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Scholarship Opportunities:</span> Explore university-specific scholarships and tuition fee waivers.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">International Exposure:</span> Study in a multicultural environment and build global connections.</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Quality of Life:</span> Experience Finland's safe surroundings, modern infrastructure and natural beauty.</li>
          </ul>
        </div>
        <div className='mt-10'>
           <h2 className="text-xl md:text-2xl font-roboto text-gray-500">Tuition Fees and Scholarships in Finland</h2>
           <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Tuition fees for non-EU/EEA students enrolled in English-taught Bachelor's programmes generally range from €9,000 to €20,000 per year, depending on the university and course.</p>
           <p className='mt-3 text-md lg:text-base text-justify text-roboto'>Many Finnish universities offer scholarships and tuition fee waivers to eligible international students. Students should also budget for accommodation, food, transportation and other living expenses.</p>
        </div>
        <div className='mt-10'>
           <h2 className="text-xl md:text-2xl font-roboto text-gray-500">How to Apply for a Bachelor's Degree in Finland?</h2>
           <p className='mt-3 text-md lg:text-base text-justify text-roboto'>The general admission process involves the following steps:</p>
           <ul className='mt-5 space-y-2'>
            <li className="text-md lg:text-base font-roboto">1.	Select a suitable Bachelor's course and university.</li>
            <li className="text-md lg:text-base font-roboto">2.	Check academic eligibility and English language requirements.</li>
            <li className="text-md lg:text-base font-roboto">3.	Prepare educational certificates, transcripts and other documents.</li>
            <li className="text-md lg:text-base font-roboto">4.	Submit your application through Studyinfo.fi or the university's application portal, as applicable.</li>
            <li className="text-md lg:text-base font-roboto">5.	Complete entrance examinations or interviews, if required.</li>
            <li className="text-md lg:text-base font-roboto">6.	Receive and accept your admission offer.</li>
            <li className="text-md lg:text-base font-roboto">7.	Apply for a Finnish student residence permit.</li>
           </ul>
           <p className="mt-3 text-md lg:text-base text-justify text-roboto">Students should check university-specific deadlines and prepare their applications in advance.</p>
        </div>
        <div className='mt-10'>
          <h2 className="text-xl md:text-2xl font-roboto text-gray-500">Study in Finland Consultants – Get Expert Guidance from Indo European</h2>
          <p className="mt-3 text-md lg:text-base text-justify text-roboto">Planning to study abroad involves several important decisions, from selecting the right university to completing admission formalities. Professional guidance can help make your application journey more organised.</p>
          <p className="mt-3 text-md lg:text-base text-justify text-roboto">At <Link href={'https://www.indoeuropean.in'} className="font-semibold font-roboto hover:underline">Indo European</Link>, we assist students planning to study in Finland with:</p>
          <ul className='mt-5 space-y-2'>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;University and course selection</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Academic profile assessment</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Admission eligibility guidance</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;IELTS, PTE and other English test preparation</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Application and documentation assistance</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Student residence permit guidance</li>
            <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Pre-departure assistance</li>
          </ul>
          <p className="mt-3 text-md lg:text-base text-justify text-roboto">If you are searching for reliable Study in Finland consultants or a trusted Finland education consultancy, our team can help you explore suitable study options based on your academic goals.</p>
        </div>
        <div className='mt-10'>
          <h2 className="text-xl md:text-2xl font-roboto text-gray-500">Start Your Bachelor's Journey in Finland Today!</h2>
          <p className="my-2 text-md lg:text-base text-justify text-roboto">Take the first step towards an international degree and a brighter future. Explore Finnish universities, discover suitable Bachelor's programmes and get expert guidance throughout your study abroad journey.</p>
          <p className="my-2 text-md lg:text-base text-justify text-roboto font-semibold">Book Your Free Study in Finland Consultation with Indo European Today!</p>
        </div>
        <div className="flex justify-end items-end mt-5">
            <Link href={'/study/masters'} className="text-blue-500 font-roboto hover:underline">Read about masters programme <FaArrowRightLong className="inline-block"/></Link>
        </div>
      </div>
      <Script
        id="bachelors-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page