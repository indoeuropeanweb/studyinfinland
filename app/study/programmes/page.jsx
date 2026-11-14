import ProgrammeClient from "./ProgrammeClient";

export const metadata = {
  title: "Study Programmes in Finland | Bachelor's, Master's & PhD",
  description: "Explore the best study programmes in Finland for Indian students. Compare Bachelor's, Master's, and PhD courses, universities, tuition fees, more, Apply Now",
  keywords: [
      "Study Programmes in Finland",
      "Finland Study Programmes",
      "Bachelor's Programmes in Finland",
      "Master's Programmes in Finland",
      "PhD Programmes in Finland",
      "Courses in Finland",
      "Study in Finland",
      "Finland Universities",
      "Finland Courses for International Students",
      "Higher Education in Finland",
      "English Taught Programmes in Finland"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/study/programmes"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinfinland.in/study/programmes/",
    siteName: "Study in Finland",
    title:
    "Study Programmes in Finland | Bachelor's, Master's & PhD",
    description:
    "Explore the best study programmes in Finland for Indian students. Compare Bachelor's, Master's, and PhD courses, universities, tuition fees, more, Apply Now",
    images: [
    {
    url: "https://www.studyinfinland.in/images/study/finland-01.webp",
    alt: "Top Universities in Finland",
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
            "https://www.studyinfinland.in/study/programmes/#webpage",
          url: "https://www.studyinfinland.in/study/programmes/",
          name: "Programmes in Finland",
          description:
            "Explore Bachelor's, Master's and PhD programmes in Finland for international students.",
          isPartOf: {
            "@id": "https://www.studyinfinland.in/#website",
          },
          breadcrumb: {
            "@id":
              "https://www.studyinfinland.in/study/programmes/#breadcrumb",
          },
          inLanguage: "en",
        },
        {
          "@type": "BreadcrumbList",
          "@id":
            "https://www.studyinfinland.in/study/programmes/#breadcrumb",
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
              name: "Programmes",
              item: "https://www.studyinfinland.in/study/programmes/",
            },
          ],
        },
      ],
    };

  return (
    <>
     <ProgrammeClient />
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }} />
    </>
  )
}

export default page