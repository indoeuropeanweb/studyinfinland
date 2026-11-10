import Breadcrumb from "@/app/components/Breadcrumb";
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Find Best Scholarships in Finland for Indian Students",
  description: "Find the best scholarships in Finland for Indian students.Check government and merit grants. Learn how to apply and get funding today. Get our Expert Now",
  keywords: [
      "Scholarships in Finland",
      "Scholarships in Finland for Indian Students",
      "Finland Scholarships",
      "Study in Finland Scholarships",
      "Finland Government Scholarships",
      "Erasmus Scholarships Finland",
      "University Scholarships in Finland",
      "Fully Funded Scholarships in Finland"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/study/scholarships"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinfinland.in/study/scholarships/",
    siteName: "Study in Finland",
    title:
      "Find Best Scholarships in Finland for Indian Students",
    description:
      "Find the best scholarships in Finland for Indian students.Check government and merit grants. Learn how to apply and get funding today. Get our Expert Now",
    images: [
      {
        url: "https://www.studyinfinland.in/images/study/finland-01.webp",
        alt: "Scholarships in Finland",
      },
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
            url: "https://www.studyinfinland.in/",
          },
        },
        {
          "@type": "WebPage",
          "@id":
            "https://www.studyinfinland.in/study/scholarships/#webpage",
          url: "https://www.studyinfinland.in/study/scholarships/",
          name: "Scholarships in Finland for Indian Students",
          description:
            "Find the best scholarships in Finland for Indian students.Check government and merit grants. Learn how to apply and get funding today. Get our Expert Now",
          isPartOf: {
            "@id": "https://www.studyinfinland.in/#website",
          },
          breadcrumb: {
            "@id":
              "https://www.studyinfinland.in/study/scholarships/#breadcrumb",
          },
          inLanguage: "en",
        },
        {
          "@type": "BreadcrumbList",
          "@id":
            "https://www.studyinfinland.in/study/scholarships/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.studyinfinland.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Study",
              item: "https://www.studyinfinland.in/study/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Scholarships",
              item: "https://www.studyinfinland.in/study/scholarships/",
            },
          ],
        },
      ],
    };

  return (
    <>
         <Breadcrumb heading={"Scholarships in Finland for Indian Students"}/>
         <div className='py-5 px-5'>
           <h2 className='font-aino text-2xl md:text-4xl'>Explore Scholarship Opportunities in Finland</h2>
               <p className="text-justify font-roboto text-md lg:text-base mt-3">Planning to study in Finland but concerned about tuition fees? Scholarships in Finland can help Indian students reduce their education expenses and make higher education more affordable.</p>
               <p className='text-justify font-roboto text-md lg:text-base mt-3'>Finnish universities offer different scholarship opportunities, including merit-based scholarships and tuition fee waivers for eligible international students pursuing Bachelor's and Master's programmes.</p>
              <div className="mt-10"> 
                  <div className="mt-5">
                  <h4 className="text-lg lg:text-xl font-semibold font-roboto text-gray-500">Scholarship Opportunities in Finland</h4>
                  <p className="text-md lg:text-base font-roboto mt-3">Students can explore different types of financial support, including:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Merit-Based Scholarships:</span> Awarded to students with outstanding academic achievements.</li>
                    <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">University Scholarships:</span> Finnish universities offer scholarships to eligible international students enrolled in selected programmes.</li>
                    <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Tuition Fee Waivers:</span> Some universities provide partial or full tuition fee reductions based on their scholarship policies.</li>
                    <li className="text-md lg:text-base font-roboto"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;<span className="font-semibold">Erasmus Mundus Scholarships:</span> Eligible students can explore funding opportunities for selected joint Master's programmes across European universities.</li>
                  </ul>
                  </div>
                  <div className="mt-5">
                  <h4 className="text-lg lg:text-xl font-semibold font-roboto text-gray-500">Scholarship Eligibility</h4>
                  <p className="text-md font-inter mt-2">Eligibility requirements vary depending on the university and scholarship programme. Generally, students may need:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Good academic performance.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Admission to a Finnish university.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;English language proficiency, if required.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Statement of Purpose (SOP).</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Updated CV or Resume.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Supporting academic documents.</li>
                  </ul>
                  </div>
                  <div className="mt-5">
                  <h4 className="text-xl md:text-2xl font-roboto text-gray-500">Documents Required</h4>
                  <p className="text-md lg:text-base font-inter mt-2">Students may commonly need to submit:</p>
                  <ul className="mt-5 space-y-2">
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Academic transcripts and certificates.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Valid passport.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;University admission application or offer letter.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Statement of Purpose (SOP).</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Updated CV/Resume.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;English language proficiency proof, if required.</li>
                    <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block text-primary'/>&nbsp;Scholarship application documents.</li>
                  </ul>
                  </div>
                <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <h4 className="text-2xl md:text-3xl font-bold font-roboto text-gray-500">
                    How to Apply for Scholarships in Finland
                  </h4>
                </div>

                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-1 bg-[#048D4E]/20 rounded-full"></div>

                  <div className="space-y-6">
                    <div className="relative flex gap-5">
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-lg">
                        1
                      </div>

                      <div className="flex-1 bg-white border text-primary border-[#048D4E]/15 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                        <h5 className="text-lg font-semibold">
                          Choose Your University
                        </h5>
                        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                          Select a Finnish university and programme according to your academic background and career
                          goals.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-5">
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB81C] text-[#3d3d3d] font-bold shadow-lg">
                        2
                      </div>

                      <div className="flex-1 bg-white border border-[#FFB81C]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                        <h5 className="text-lg font-semibold text-primary">
                          Explore Available Scholarships
                        </h5>
                        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                          Check the scholarship opportunities, eligibility criteria and tuition fee waivers offered by your chosen university.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-5">
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#15803D] text-white font-bold shadow-lg">
                        3
                      </div>

                      <div className="flex-1 bg-white border border-[#BE3A34]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                        <h5 className="text-lg font-semibold text-primary">
                          Submit Your Application
                        </h5>
                        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                          Complete the admission and scholarship application with the required documents before the
                          university deadline.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <h5 className="text-lg lg:text-xl font-semibold font-roboto text-gray-500">
                    Make Your European Education More Affordable
                  </h5>
                  <p className="text-md lg:text-base font-roboto mt-2">
                    Scholarships in Finland can help international students manage tuition expenses while pursuing quality education in Europe. With proper planning and the right university selection, students can explore suitable funding opportunities.
                  </p>
                  <p className="text-md lg:text-base font-roboto mt-2">
                    Get expert guidance on studying in Finland, including university admissions, scholarships, student visas and career opportunities.
                  </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end mt-5">
              <Link href={'/living'} className="text-blue-500 font-roboto hover:underline">Read about living in finland <FaArrowRightLong className="inline-block"/></Link>
          </div>
         </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      </>
  )
}

export default page