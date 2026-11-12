import StudyClient from "./StudyClient";


export const metadata = {
  title: "Study in Finland: Quality Education, Benefits & Career Opportunities",
  description: "Explore the benefits of studying in Finland. Discover top universities, English-taught programmes, scholarships, affordable living and career opportunities.",
  keywords: [
      "study in Finland",
      "study in Finland for Indian students",
      "benefits of studying in Finland",
      "Finland universities",
      "Finnish education system",
      "study in Finland consultant",
      "higher education in Finland",
      "English taught programmes in Finland",
      "Finland scholarships for international students",
      "cost of studying in Finland",
      "Finland student life",
      "study abroad in Finland",
      "admission in Finland universities",
      "Finland career opportunities"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/study/"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    title:
      "Study in Finland: Quality Education, Benefits & Career Opportunities",
    description:
      "Explore the benefits of studying in Finland. Discover top universities, English-taught programmes, scholarships, affordable living and career opportunities.",
    url: "https://www.studyinfinland.in/study/",
    siteName: "Study in finland",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in finland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Study in Finland: Quality Education, Benefits & Career Opportunities",
    description:
      "Explore the benefits of studying in Finland. Discover top universities, English-taught programmes, scholarships, affordable living and career opportunities.",
    images: [
      "https://www.studyinfinland.in/images/logos/logo.png",
    ],
  },
}

export default function Home() {
   const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinfinland.in/#organization",
        "name": "Study in finland",
        "url": "https://www.studyinfinland.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinfinland.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinfinland.in/study/#webpage",
        "url": "https://www.studyinfinland.in/study/",
        "name":
          "Study in Finland: Quality Education, Benefits & Career Opportunities",
        "description":
          "Explore the benefits of studying in Finland. Discover top universities, English-taught programmes, scholarships, affordable living and career opportunities."
      },
          {
      "@type": "BreadcrumbList",
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
      ],
    },
    ]
  };

  return (
    <>
     <StudyClient />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
