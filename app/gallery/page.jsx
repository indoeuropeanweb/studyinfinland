import Breadcrumb from '../components/Breadcrumb';
import { Testimonials } from "@/public/data/testimonials";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Student Life in Finland: Watch & Make Your Own Stories",
  description: "See what student life in Finland looks like. Browse our gallery for campus views, dorms, and fun events. Get a real feel for your future study trip here.",
  keywords: [
      "Student Life in Finland",
      "Study in Finland",
      "Finland Student Life",
      "International Students in Finland",
      "Student Experience in Finland",
      "Finland University Campus",
      "Study Abroad Finland",
      "Finland Campus Life",
      "Student Activities in Finland",
      "Finland Education Consultants"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/gallery"
  },
    robots: {
    index: true,
    follow: true,
  },
  openGraph: {
  type: "website",
  title:
    "Student Life in Finland: Watch & Make Your Own Stories",
  description:
    "See what student life in Finland looks like. Browse our gallery for campus views, dorms, and fun events. Get a real feel for your future study trip here.",
  url: "https://www.studyinfinland.in/gallery/",
  siteName: "Study in Finland Centre",
  images: [
    {
      url: "https://www.studyinfinland.in/images/logos/logo.png",
      width: 1200,
      height: 630,
      alt: "Student Success Stories",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title:
    "Student Life in Finland: Watch & Make Your Own Stories",
  description:
    "See what student life in Finland looks like. Browse our gallery for campus views, dorms, and fun events. Get a real feel for your future study trip here.",
  images: [
    "https://www.studyinfinland.in/images/logos/logo.png",
  ],
},
}

const page = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinfinland.in/contact",
        "name": "Study in Finland Centre",
        "url": "https://www.studyinfinland.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinfinland.in/images/logos/logo.png"
        }
      },
      {
        "@type": "CollectionPage",
        "@id":
          "https://www.studyinfinland.in/gallery/collectionpage",
        "url": "https://www.studyinfinland.in/gallery/",
        "name":
          "Student Success Stories & Video Reviews",
        "description":
          "A gallery of student success stories and video reviews."
      },
      {
        "@type": "ImageGallery",
        "@id":
          "https://www.studyinfinland.in/gallery/",
        "name":
          "Study in Finland Student Gallery",
        "url":
          "https://www.studyinfinland.in/gallery/"
      },
      {
        "@type": "VideoObject",
        "@id":
          "https://www.studyinfinland.in/gallery/#video1",
        "name":
          "Student Video Review - Study in Finland",
        "description":
          "Student shares their experience studying in Finland.",
        "thumbnailUrl":
          "https://www.studyinfinland.in/images/logos/logo/logo.png",
        "uploadDate": "2026-01-01",
        "contentUrl":
          "https://www.studyinfinland.in/gallery/"
      },
    ]
  };

  return (
    <>
     <Breadcrumb heading={'Student Experiences in Finland: Real Stories, Success Journeys and Study Abroad Experiences'}/>
     <section className='mx-auto max-w-6xl'>
       <div className='py-10 px-5'>
         <h2 className='text-2xl md:text-4xl font-aino'>Student Experiences in Lithuania</h2>
         <p className='text-base font-inter text-justify mt-3'>Hear directly from students who successfully secured admissions, scholarships, and visas to study in Lithuania. Watch their video reviews and explore moments from their international education journey.</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-3 mt-8'>
            {Testimonials.map((testimonial, index) => {
              return <div className='' key={index}>
                <iframe className='rounded-lg' src={testimonial} width={320} height={160} />
              </div>
            })}
         </div>
       </div>
      <div className="flex justify-end items-end">
          <Link href={'/faq'} className="text-blue-500 font-roboto hover:underline">Read Frequently Asked Questions (FAQ) <FaArrowRightLong className="inline-block"/></Link>
      </div>
     </section>
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