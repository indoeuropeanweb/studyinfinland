import Breadcrumb from "@/app/components/Breadcrumb"
import Image from "next/image"
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Universities in Finland: Top Universities & Study Options",
  description: "Explore the top universities in Finland for Indian students. Discover English-taught courses, bachelor's and master's degrees, admission requirements and study opportunities.",
  keywords: [
      "universities in Finland",
      "top universities in Finland",
      "best universities in Finland",
      "Finland universities for international students",
      "universities in Finland for Indian students",
      "study in Finland universities",
      "Finnish universities",
      "public universities in Finland",
      "universities of applied sciences in Finland",
      "English taught universities in Finland",
      "bachelor's courses in Finland",
      "master's courses in Finland",
      "Finland university admission"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/study/universities"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinfinland.in/study/universities/",
    siteName: "Study in Finland",
    title:
    "Universities in Finland: Top Universities & Study Options",
    description:
    "Explore the top universities in Finland for Indian students. Discover English-taught courses, bachelor's and master's degrees, admission requirements and study opportunities.",
    images: [
    {
    url: "https://www.studyinfinland.in/images/study/finland-01.webp",
    alt: "Top Universities in Finland",
    },
  ],
},
}

const page = () => {

  const univeristiesData = [
  {
    "id": 1,
    "name": "University of Helsinki",
    "img_url": "/images/universities/university-of-helsinki.webp",
    "rankingRecognition": "One of Finland's leading research universities, recognised internationally for its academic excellence, scientific research, and contributions to education and innovation.",
    "academicStrength": [
      "Medicine",
      "Law",
      "Business",
      "Life Sciences",
      "Social Sciences"
    ]
  },
  {
    "id": 2,
    "name": "Aalto University",
    "img_url": "/images/universities/aalto-university.webp",
    "rankingRecognition": "A globally recognised university known for combining technology, business, science, and arts. It has a strong reputation for innovation, entrepreneurship, and interdisciplinary education.",
    "academicStrength": [
      "Business",
      "Engineering",
      "Computer Science",
      "Data Science",
      "Design"
    ]
  },
  {
    "id": 3,
    "name": "Tampere University",
    "img_url": "/images/universities/tampere-university.webp",
    "rankingRecognition": "A well-established multidisciplinary research university known for its innovative teaching methods, technological research, and international academic collaborations.",
    "academicStrength": [
      "Engineering",
      "Information Technology",
      "Health Sciences",
      "Business",
      "Social Sciences"
    ]
  },
  {
    "id": 4,
    "name": "University of Turku",
    "img_url": "/images/universities/university-of-turku.webp",
    "rankingRecognition": "An internationally recognised research university offering diverse academic programmes and strong research opportunities across multiple disciplines.",
    "academicStrength": [
      "Medicine",
      "Business",
      "Computer Science",
      "Biotechnology",
      "Education"
    ]
  },
  {
    "id": 5,
    "name": "University of Oulu",
    "img_url": "/images/universities/university-of-oulu.webp",
    "rankingRecognition": "Recognised for its research and innovation in technology, engineering, and science, with strong international academic and industry connections.",
    "academicStrength": [
      "Computer Science",
      "Engineering",
      "Wireless Communications",
      "Business",
      "Natural Sciences"
    ]
  },
  {
    "id": 6,
    "name": "LUT University",
    "img_url": "/images/universities/lut-university.webp",
    "rankingRecognition": "A leading Finnish public science university recognised for its focus on sustainable technology, business, innovation, and environmental solutions.",
    "academicStrength": [
      "Mechanical Engineering",
      "Software Engineering",
      "Business",
      "Energy Technology",
      "Sustainability"
    ]
  },
  {
    "id": 7,
    "name": "University of Eastern Finland",
    "img_url": "/images/universities/university-of-eastern-finland.webp",
    "rankingRecognition": "One of Finland&#39;s multidisciplinary universities, recognised for research and education in health sciences, environmental studies, business, and technology.",
    "academicStrength": [
      "Medicine",
      "Public Health",
      "Environmental Sciences",
      "Business",
      "Information Technology"
    ]
  },
  {
    "id": 8,
    "name": "University of Jyväskylä",
    "img_url": "/images/universities/university-of-jyvaskayla.webp",
    "rankingRecognition": "An established Finnish university known for its strong academic reputation, research activities, and international programmes in education, science, and business.",
    "academicStrength": [
      "Education",
      "Psychology",
      "Business",
      "Sports Sciences",
      "Information Technology"
    ]
  },
  {
    "id": 9,
    "name": "University of Vaasa",
    "img_url": "/images/universities/university-of-vaasa.webp",
    "rankingRecognition": "Recognised for its international approach to higher education, with particular strengths in business, economics, management, and energy technology.",
    "academicStrength": [
      "Business Administration",
      "Finance",
      "Economics",
      "Management",
      "Energy Technology"
    ]
  },
  {
    "id": 10,
    "name": "University of Lapland",
    "img_url": "/images/universities/university-of-lapland.webp",
    "rankingRecognition": "A recognised university in Northern Finland, known for its specialised academic programmes in tourism, arts, law, education, and social sciences.",
    "academicStrength": [
      "Tourism",
      "Business",
      "Law",
      "Education",
      "Art and Design"
    ]
  },
  {
    "id": 11,
    "name": "Hanken School of Economics",
    "img_url": "/images/universities/hanken-school-of-economics.webp",
    "rankingRecognition": "One of Finland&#39;s established business schools, known for international business education, research, and strong connections with the corporate sector.",
    "academicStrength": [
      "Finance",
      "Marketing",
      "Economics",
      "Management",
      "Accounting"
    ]
  },
  {
    "id": 12,
    "name": "Åbo Akademi University",
    "img_url": "/images/universities/abo-akademi-university.webp",
    "rankingRecognition": "A well-known multidisciplinary university in Finland, recognised for its research, international academic environment, and education across various disciplines.",
    "academicStrength": [
      "Business",
      "Chemical Engineering",
      "Natural Sciences",
      "Social Sciences",
      "Information Technology"
    ]
  },
  {
    "id": 13,
    "name": "University of the Arts Helsinki",
    "img_url": "/images/universities/university-of-the-arts-helsinki.webp",
    "rankingRecognition": "Finland's leading specialised university for arts education, bringing together renowned academies focused on creative learning, artistic research, and professional development.",
    "academicStrength": [
      "Fine Arts",
      "Music",
      "Theatre",
      "Dance",
      "Performing Arts"
    ]
  }
]

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
      url: "https://www.studyinfinland.in/images/study/finland-01.webp",
      },
      },
      {
      "@type": "WebPage",
      "@id":
      "https://www.studyinfinland.in/study/universities/#webpage",
      url: "https://www.studyinfinland.in/study/universities/",
      name: "Universities in Finland: Top Universities & Study Options",
      description:
      "Explore the top universities in Finland for Indian students. Discover English-taught courses, bachelor's and master's degrees, admission requirements and study opportunities.",
      isPartOf: {
      "@id": "https://www.studyinfinland.in/#website",
      },
      breadcrumb: {
      "@id":
      "https://www.studyinfinland.in/study/universities/#breadcrumb",
      },
      inLanguage: "en",
      },
      {
      "@type": "BreadcrumbList",
      "@id":
      "https://www.studyinfinland.in/study/universities/#breadcrumb",
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
      name: "Universities",
      item: "https://www.studyinfinland.in/study/universities",
      },
      ],
      },
      ],
};


  return (
    <>
      <Breadcrumb heading={'Top Universities in Finland: Explore Leading Institutions for Indian Students'}/>
      <div className="px-10 mt-10">
         <h2 className="font-aino text-2xl md:text-4xl">Explore Top Universities in Finland</h2>
         <p className="mt-5">Finland is home to internationally recognised universities offering quality education, modern
            learning facilities, and globally valued degrees. Students can explore academic opportunities in
            business, engineering, medicine, information technology, management, and social sciences.<br />
            Finnish universities focus on research, innovation, and practical learning, providing Bachelor's,
            Master's, and PhD programmes. Many institutions also offer English-taught programmes,
            making Finland an attractive destination for Indian and international students.
          <br />
          <br />
          Students may opt for one of many types of <Link className="font-semibold hover:underline" href="/study/programmes">study programmes</Link>, which in Lithuania offer bachelor’s, master’s, and PhD degrees. A lot of them are lectured in English, mixing the academic with the hands-on. Areas like computer science, engineering, business, healthcare, finance, and social sciences are quite popular among international students since they make it easier for foreigners to find good jobs in Europe after  ‍ ‌‍ ‍‌graduation.
          </p>
          <div className="mt-12">
          <h2 className="font-aino text-2xl md:text-4xl">Discover Leading Universities in Finland</h2>
          <div className="mt-5">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {univeristiesData.map((university) => (
                    <div
                      key={university.id}
                      className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#048D4E] via-[#FFB81C] to-[#BE3A34]" />

                      <div className="relative h-60 overflow-hidden">
                        <Image
                          width={400}
                          height={240}
                          src={university.img_url}
                          alt={university.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5">
                          <h2 className="text-2xl font-bold text-white leading-snug">
                            {university.name}
                          </h2>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#FFB81C]" />
                            <h3 className="font-semibold text-[#15803D]">
                              Ranking & Recognition
                            </h3>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {university.rankingRecognition}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#BE3A34]" />
                            <h3 className="font-semibold text-[#15803D]">
                              Academic Strength
                            </h3>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {university.academicStrength.map((course, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 text-xs font-medium rounded-full
                                  bg-[#048D4E]/10 text-[#048D4E]
                                  border border-[#048D4E]/20"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
          </div>
          <div className="mt-10">
            <h5 className="text-lg font-bold text-gray-600">Explore Your Study Opportunities in Finland</h5>
            <p className="text-gray-600 mt-2">
              Study in Finland and explore globally recognised universities offering quality education and international career opportunities. Connect with the <Link className="font-semibold hover:underline" href="/contact">best Finland consultants</Link> for professional guidance on university selection, admission applications, and your study abroad journey.
            </p>
          </div>
          </div>
          <div className="flex justify-end items-end">
              <Link href={'/study/programmes'} className="text-blue-500 font-roboto hover:underline">Explore programmes <FaArrowRightLong className="inline-block"/></Link>
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