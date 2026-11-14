import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Study in Finland FAQs: Admission, Fees, Visa & IELTS",
  description: "Find answers to common Study in Finland FAQs about university admissions, tuition fees, scholarships, IELTS requirements, student visas, living costs, accommodation and part-time jobs for Indian students.",
  keywords: [
        "Study in Finland FAQs",
        "Finland study FAQs",
        "Study in Finland for Indian students",
        "Finland university admission",
        "Finland student visa",
        "Finland tuition fees",
        "cost of studying in Finland",
        "Finland scholarships",
        "IELTS requirements for Finland",
        "Finland universities",
        "part-time jobs in Finland",
        "Finland student accommodation",
        "study abroad Finland",
        "Finland admission requirements"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/faq"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Study in Finland FAQs: Admission, Fees, Visa & IELTS",
    description:
      "Find answers to common Study in Finland FAQs about university admissions, tuition fees, scholarships, IELTS requirements, student visas, living costs, accommodation and part-time jobs for Indian students.",
    url: "https://www.studyinfinland.in/faq/",
    siteName: "Study in Finland Centre",
    images: [
      {
        url:
          "https://www.studyinfinland.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Finland FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Study in Finland FAQs: Admission, Fees, Visa & IELTS",
    description:
      "Find answers to common Study in Finland FAQs about university admissions, tuition fees, scholarships, IELTS requirements, student visas, living costs, accommodation and part-time jobs for Indian students.",
    images: [
      "https://www.studyinfinland.in/images/logos/logo.png",
    ],
  },
}

const page = () => {

const faqData = [
  {
    "id": 1,
    "question": "1. Why should Indian students choose Finland for higher education?",
    "answer": "Finland is a popular study destination known for its high-quality education system, modern teaching methods and excellent research facilities. It offers internationally recognised degrees, English-taught programmes, a safe living environment and opportunities to gain international work experience."
  },
  {
    "id": 2,
    "question": "2. Can Indian students study in Finland in English?",
    "answer": "Yes, Indian students can pursue bachelor&#39;s and master&#39;s degrees in English at Finnish universities and Universities of Applied Sciences (UAS). Finland offers around 600 English-taught degree programmes across various academic fields."
  },
  {
    "id": 3,
    "question": "3. What are the admission requirements to study in Finland?",
    "answer": "For bachelor&#39;s programmes, students generally need a recognised Class 12 qualification. For master's programmes, a relevant bachelor's degree is required. Depending on the course and university, students may also need English proficiency test scores, entrance examination results or work experience."
  },
  {
    "id": 4,
    "question": "4. What is the minimum percentage required to study in Finland?",
    "answer": "The minimum academic percentage depends on the university, course and admission criteria. Students must have the required academic qualifications and meet the specific eligibility conditions of their selected programme."
  },
  {
    "id": 5,
    "question": "5. Is IELTS mandatory to study in Finland?",
    "answer": "IELTS is not mandatory for every university in Finland. However, many English-taught programmes require proof of English proficiency through IELTS, TOEFL, PTE or other accepted qualifications. Requirements and possible exemptions vary between universities."
  },
  {
    "id": 6,
    "question": "6. What is the IELTS score required for Finnish universities?",
    "answer": "Most Finnish universities set their own English language requirements. The required IELTS score commonly varies by programme and institution. Students should check the minimum overall band score and individual section requirements before applying."
  },
  {
    "id": 7,
    "question": "7. How much does it cost to study in Finland for Indian students?",
    "answer": "For Indian students, tuition fees for English-taught bachelor&#39;s and master&#39;s programmes generally range from €9,000 to €20,000 per year. Living expenses are approximately €900–€1,200 per month, depending on the city and lifestyle."
  },
  {
    "id": 8,
    "question": "8. Can Indian students study in Finland for free?",
    "answer": "Most Indian students applying for English-taught bachelor&#39;s and master&#39;s programmes need to pay tuition fees. However, some universities offer scholarships and tuition fee waivers. Doctoral programmes generally do not charge tuition fees."
  },
  {
    "id": 9,
    "question": "9. AAre scholarships available for Indian students in Finland?",
    "answer": "Yes, several Finnish universities offer scholarships to international students, including Indian applicants. These scholarships may provide partial or full tuition fee waivers based on academic performance and university-specific eligibility criteria. Living expenses are generally not covered."
  },
  {
    "id": 10,
    "question": "10. When are the intakes available in Finland?",
    "answer": "Finnish universities generally offer two main admission periods: Autumn and Spring. The Autumn intake usually begins in August or September, while some universities offer programmes starting in January. Application deadlines vary by university and course."
  },
  {
    "id": 11,
    "question": "11. How can Indian students apply to Finnish universities?",
    "answer": "Indian students can apply to Finnish universities through the official Studyinfo.fi portal or directly through university application portals, depending on the programme. The process generally involves selecting a course, checking eligibility, submitting academic documents, paying applicable application fees and completing any required entrance examinations or interviews."
  },
  {
    "id": 12,
    "question": "12. What is the Finland student visa process for Indian students?",
    "answer": "Indian students generally need a student residence permit to study in Finland for more than 90 days. After receiving university admission, students can apply through the Enter Finland online portal. They must provide their admission confirmation, proof of sufficient funds, valid health insurance and other required documents before completing identity verification."
  },
  {
    "id": 13,
    "question": "13. How much bank balance is required for a Finland student residence permit?",
    "answer": "Students must demonstrate sufficient funds to cover their living expenses during their stay in Finland. The exact financial requirement is determined by the Finnish Immigration Service (Migri). Applicants should check the latest financial requirements before submitting their residence permit application."
  },
  {
    "id": 14,
    "question": "14. Can Indian students work part-time while studying in Finland?",
    "answer": "Yes, international students holding a residence permit for studies can work in Finland for an average of up to 30 hours per week. They can also work without this weekly restriction during official academic holidays when the educational institution does not provide instruction."
  },
  {
    "id": 15,
    "question": "15. What is the average cost of living in Finland for international students?",
    "answer": "The average monthly living expenses in Finland are approximately €900–€1,200. These expenses generally include accommodation, food, transportation, utilities and personal costs. Living expenses may be higher in cities such as Helsinki compared to smaller Finnish cities."
  },
  {
    "id": 16,
    "question": "16. Can Indian students stay in Finland after completing their studies?",
    "answer": "Yes, international students who complete their degree in Finland may apply for a residence permit to look for employment or start a business. This permit can be granted for a maximum of two years, subject to eligibility and financial requirements."
  },
  {
    "id": 17,
    "question": "17. Are there job opportunities in Finland after graduation?",
    "answer": "Yes, international graduates can explore employment opportunities in Finland across sectors such as IT, engineering, business, healthcare and technology. Job opportunities depend on qualifications, work experience, industry demand and language skills. Learning Finnish or Swedish can improve employment prospects."
  },
  {
    "id": 18,
    "question": "18. Can I bring my spouse or family members to Finland while studying?",
    "answer": "Yes, eligible international students can apply for residence permits for their family members based on family ties. Applicants must meet the applicable financial and documentation requirements set by the Finnish Immigration Service. Family members who receive the relevant residence permit generally have the right to work and study in Finland."
  },
  {
    "id": 19,
    "question": "19. What are the best courses to study in Finland?",
    "answer": "Finland offers popular courses in Information Technology, Engineering, Business Administration, Artificial Intelligence, Data Science, Nursing, Healthcare, Environmental Sciences, and Hospitality Management. The best course depends on your academic background and career goals."
  },
  {
    "id": 20,
    "question": "20. What documents are required for admission to Finnish universities?",
    "answer": "Students generally need academic certificates and mark sheets, a valid passport, English proficiency test scores (if required), Statement of Purpose (SOP), updated CV, Letters of Recommendation, and work experience certificates (if applicable). Additional documents may vary depending on the university and programme."
  }
]

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
        }
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.studyinfinland.in/",
        "url":
          "https://www.studyinfinland.in/faq/",
        "name":
          "Study in Finland FAQs: Admission, Fees, Visa & IELTS",
        "description":
          "Find answers to common Study in Finland FAQs about university admissions, tuition fees, scholarships, IELTS requirements, student visas, living costs, accommodation and part-time jobs for Indian students."
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.studyinfinland.in/faq/",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Why should I study in Finland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Finland offers affordable European education and internationally recognized degrees."
            }
          },
          {
            "@type": "Question",
            "name":
              "Can Indian students study in Finland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, Indian students can apply to Finnish universities for English-taught programs."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do I need a student visa to study in Finland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, non-EU students need a student visa or temporary residence permit."
            }
          },
          {
            "@type": "Question",
            "name":
              "Can students work while studying in Finland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, international students are generally allowed to work during studies."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinfinland.in/faq/",
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
            "name": "FAQ",
            "item":
              "https://www.studyinfinland.in/faq/"
          }
        ]
      }
    ]
  };

  return (
    <>
         <Breadcrumb heading={'Frequently Asked Questions About Studying in Finland'}/>
         <div className='max-w-6xl mx-auto'>
            <div className='px-5 py-10'>
              <h2 className="text-2xl lg:text-3xl font-aino mb-2">Frequently Asked Questions</h2>
              <p className="text-roboto text-md lg:text-base mb-8">Find answers to frequently asked questions about studying abroad, including university admissions, course selection, eligibility requirements, tuition fees, scholarships, student visas, IELTS and other English proficiency tests, accommodation, and part-time work opportunities. Explore expert guidance to help you plan your international education journey with confidence.</p>
               {faqData?.map((faq, index) => {
                return <FAQ panelNo={faq.id} key={index} question={faq.question} answer={faq.answer}/>
               })}
            </div>
            <div className="flex justify-end items-end mt-5">
               <Link href={'/about'} className="text-blue-500 font-roboto hover:underline">Read about us<FaArrowRightLong className="inline-block"/></Link>
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