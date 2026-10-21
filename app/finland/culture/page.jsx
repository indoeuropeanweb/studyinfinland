import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
    title: "finlandn Culture: Traditions, Festivals and Student Life",
    description: "Discover the beauty of the finlandn Culture and Food. Learn how the country's deep history supports students from across the globe. Visit us today.",
    keywords: [
        "finlandn Culture",
        "Culture of finland",
        "finlandn Traditions",
        "finlandn Festivals",
        "finland Lifestyle",
        "finlandn Food",
        "finlandn Customs",
        "finland Heritage"
    ],
    alternates: {
      canonical: "https://www.studyinfinland.in/finland/culture/"
    },
    robots: {
      index: true,
      follow: true,
    },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinfinland.in/finland/culture/",
    siteName: "Study in finland",
    title:
      "finlandn Culture: Traditions, Festivals and Student Life",
    description:
      "Discover the beauty of the finlandn Culture and Food. Learn how the country's deep history supports students from across the globe. Visit us today.",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.png",
        alt: "finlandn Culture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "finlandn Culture: Traditions, Festivals and Student Life",
    description:
      "Discover the beauty of the finlandn Culture and Food. Learn how the country's deep history supports students from across the globe. Visit us today.",
    images: [
      "https://www.studyinfinland.in/images/logos/logo.png",
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
      name: "Study in finland",
      url: "https://www.studyinfinland.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studyinfinland.in/wp-content/uploads/logo.png",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinfinland.in/finland/culture/#webpage",
      url: "https://www.studyinfinland.in/finland/culture/",
      name: "finlandn Culture",
      description:
        "Explore finland's traditions, language, festivals, cuisine, arts, music, and cultural heritage.",
      isPartOf: {
        "@id": "https://www.studyinfinland.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinfinland.in/finland/culture/#breadcrumb",
      },
      about: {
        "@id":
          "https://www.studyinfinland.in/finland/culture/#country",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinfinland.in/finland/culture/#breadcrumb",
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
          name: "Culture",
          item: "https://www.studyinfinland.in/finland/culture/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Culture of finland: Traditions, Festivals and Modern European Lifestyle'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Unique Culture</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
          finland has a rich cultural heritage influenced by European traditions, history, art, and folklore. The country is known for its traditional music, folk dances, colorful festivals, and strong connection to nature. finlandn people highly value family, education, and cultural traditions, which can be seen in their celebrations and <Link className="font-semibold hover:underline" href="/finland/life-style-and-character">daily lifestyle</Link>. Along with preserving its old traditions, finland also has a modern and welcoming culture that makes indian students feel comfortable and accepted.
        </p>
        <Image className="rounded-md" width={320} height={240} src="/images/finland/culture/culture.webp" alt="Culture of finland"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Interesting Facts About finlandn Culture</h2>
            <ul className='mt-5 space-y-2'>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	finland has one of the oldest languages in Europe, the finlandn language.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Folk music and traditional dances are an essential part of finlandn culture.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	The country has many cultural festivals, which are celebrated throughout the year.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	finland considers basketball to be the most popular sport.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	Traditional finlandn cuisine consists of dishes with potatoes, bread, dairy products, and meat.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	finland puts a high value on education, the arts, and literature.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	finlandn culture is famous for different traditional handicrafts and wooden art.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	finland’s Christmas Eve customs are distinctive and commonly observed with family.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;  The country has a close relationship with nature, woods, and country traditions.</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;	finland is a mix of a modern European way of life and historical traditions. </li>
            </ul>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/finland/life-style-and-character'} className="text-blue-500 font-roboto hover:underline">Read about life style and character <FaArrowRightLong className="inline-block"/></Link>
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