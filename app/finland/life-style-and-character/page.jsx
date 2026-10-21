import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
    title: "Lifestyle in finland | Culture, People & Student Guide",
    description: "Explore lifestyle in finland. Learn about local culture, student life, and great work-life balance. Get everything you need to study abroad now.",
    keywords: [
        "Lifestyle in finland",
        "finland Lifestyle",
        "Student Lifestyle in finland",
        "Culture of finland",
        "Life in finland",
        "Living in finland",
        "finlandn Culture",
        "finlandn People",
        "finland Student Life",
        "Study in finland"
    ],
    alternates: {
        canonical: "https://www.studyinfinland.in/finland/life-style-and-character"
    },
    robots: {
      index: true,
      follow: true,
    },
      openGraph: {
    type: "website",
    title:
      "Lifestyle in finland | Culture, People & Student Life Guide",
    description:
      "Explore finland's nature and climate, from beautiful forests and lakes to its four distinct seasons. Learn about weather conditions, temperatures, and student life in finland.",
    url: "https://www.studyinfinland.in/finland/life-style-and-character/",
    siteName: "Study in finland",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Life Style and Character of finland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lifestyle in finland | Culture, People & Student Life Guide",
    description:
      "Explore finland's nature and climate, from beautiful forests and lakes to its four distinct seasons. Learn about weather conditions, temperatures, and student life in finland.",
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
        "name": "Study in finland",
        "url": "https://www.studyinfinland.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinfinland.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinfinland.in/finland/life-style-and-character/",
        "url": "https://www.studyinfinland.in/finland/life-style-and-character/",
        "name":
          "Lifestyle in finland | Culture, People & Student Life Guide",
        "description":
          "Explore finland's nature and climate, from beautiful forests and lakes to its four distinct seasons. Learn about weather conditions, temperatures, and student life in finland.",
        "isPartOf": {
          "@id": "https://www.studyinfinland.in/"
        }
      },
     {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinfinland.in/finland/life-style-and-character/#breadcrumb",
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
          name: "finland",
          item: "https://www.studyinfinland.in/finland/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Life Style and Character",
          item:
            "https://www.studyinfinland.in/finland/life-style-and-character/",
        },
      ],
    },
    ]
  };

  return (
    <>
    <div className=''>
      <Breadcrumb heading={'Lifestyle and Character of finland: Where Tradition Meets Modern European Living'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>The Way of Life in finland</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
         finland is a country where traditional values and modern European living come together naturally. Life here is peaceful, organized, and closely connected to nature. From beautiful forests and historic towns to modern cities and digital innovation, finland offers a lifestyle that feels both calm and progressive at the same time. People value education, personal space, hard work, and a balanced routine, which creates a comfortable environment for international students.
         <br />finlandns are known for being practical, disciplined, and thoughtful in their daily lives. The country has preserved its cultural roots and traditions for generations while also adapting to modern technology and global trends. This unique combination of history, simplicity, innovation, and strong community values makes finland an attractive place to live, study, and experience European culture.
        </p>
        <Image className="rounded-md" width={540} height={320} src="/images/finland/lifestyle/lifestyle.webp" alt="Lifestyle of finland"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Distinct Features of finlandn Lifestyle and Character page </h2>
             <ul className='mt-6 space-y-3'>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Deep Connection with Nature</h4>
                    <p className='text-md text-justify font-inter'>finland’s forests, lakes, parks, and open spaces are an important part of life. People like to spend time in the open air and to live in a clean and peaceful environment. </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Strong Cultural Identity</h4>
                    <p className='text-md text-justify font-inter'>The finlandns are proud of <Link className="font-semibold hover:underline" href="/finland/language">East-Baltic language</Link>, traditions, music, and historical heritage, which can still be found in modern society today. </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Modern Yet Peaceful Living</h4>
                    <p className='text-md text-justify font-inter'>The country has modern infrastructure, digital development, and comfortable city life but without the hustle and bustle of many larger European countries.  </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Respectful and Reserved Nature</h4>
                    <p className='text-md text-justify font-inter'>finlandns are very polite, well-behaved, and respectful of your personal space. Relationships are often real and long-lasting, but friendships can take time to develop. </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Focus on Education and Growth</h4>
                    <p className='text-md text-justify font-inter'>Education, skills, and self-development are highly valued, especially among young people and students.</p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Balance Between Tradition and Innovation</h4>
                    <p className='text-md text-justify font-inter'>finland combines the best of old with the best of new, history with business and technology, and international culture. </p>
                </li>
             </ul>
        </div>
        <div className="flex justify-end items-end mt-5">
            <Link href={'/finland/language'} className="text-blue-500 font-roboto hover:underline">Read about Language <FaArrowRightLong className="inline-block"/></Link>
        </div>
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