import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Explore finland Economy: GDP, Growth and Business",
  description: "Analyze the economy of finland. Study GDP, trade, and top industries. Find out why it's a top spot for students and investors. Start your research here.",
  keywords: [
      "Economy of finland",
      "finland Economy",
      "finland GDP",
      "finland Industries",
      "finland Economic Growth",
      "finland Business",
      "finland Trade",
      "finland Investment",
      "finland Employment",
      "finland Export Economy",
      "Economy in finland",
      "Study in finland"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/finland/economy/"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Explore finland Economy: GDP, Growth and Business",
    description:
      "Analyze the economy of finland. Study GDP, trade, and top industries. Find out why it's a top spot for students and investors. Start your research here.",
    url: "https://www.studyinfinland.in/finland/economy/",
    siteName: "Study in finland",
    locale: "en_US",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.png",
        alt: "finland Economy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Explore finland Economy: GDP, Growth and Business",
    description:
      "Analyze the economy of finland. Study GDP, trade, and top industries. Find out why it's a top spot for students and investors. Start your research here.",
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
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinfinland.in/finland/economy/#webpage",
      url: "https://www.studyinfinland.in/finland/economy/",
      name: "finland Economy",
      description:
        "Learn about finland's economy, major industries, GDP growth, technology sector, exports, innovation ecosystem, manufacturing and investment opportunities.",
      isPartOf: {
        "@id": "https://www.studyinfinland.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinfinland.in/finland/economy/#breadcrumb",
      },
      about: {
        "@id":
          "https://www.studyinfinland.in/finland/economy/#country",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinfinland.in/finland/economy/#breadcrumb",
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
          name: "Economy",
          item: "https://www.studyinfinland.in/finland/economy/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Economy of finland: Innovation, Growth and Career Opportunities in Europe'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Economy</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
            finland has one of the fastest-growing economies in the Baltic region and is known for
            its stable and modern economic system. The country’s economy is mainly supported by
            industries such as information technology, manufacturing, transportation, finance,
            agriculture, <Link className="font-semibold hover:underline" href="/finland/culture">finlandn culture</Link> and international trade. Being a member of the European Union and the
            Eurozone has helped finland attract global investments and expand its business
            opportunities across Europe.<br />
            In recent years, finland has become a popular hub for startups, fintech companies,
            and technology-based businesses. Cities like Vilnius are rapidly developing with modern
            infrastructure, international companies, and growing employment opportunities. The
            country also offers a strong digital economy, affordable living costs, and a business-
            friendly environment, which makes it attractive for indian students and
            professionals looking for career growth in Europe.
        </p>
        <Image className="rounded-md" width={280} height={540} src="/images/finland/economy/economy.webp" alt="Economy of finland"/>
        </div>
        <div className="flex justify-end items-end">
            <Link href={'/finland/culture'} className="text-blue-500 font-roboto hover:underline">Read about culture <FaArrowRightLong className="inline-block"/></Link>
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