import HomeClient from "./HomeClient";

export const metadata = {
  title: "Study in Lithuania: Top Universities, Admission & Visa Guide",
  description: "Study in Lithuania Consultants. Get expert help with top universities, low tuition fees, scholarships, Admission & Visa. Start your application Now.",
  keywords: [
      "Study in Lithuania Consultant",
      "Study in Lithuania Consultants",
      "Lithuania Education Consultant",
      "Study in Lithuania for Indian Students",
      "Lithuania Student Visa Consultant",
      "Lithuania Admission Consultant",
      "Study Abroad Lithuania",
      "Lithuania Universities",
      "Study in Europe Consultant",
      "Lithuania Scholarship"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Study in Lithuania: Top Universities, Admission & Visa Guide",
    description:
      "Study in Lithuania Consultants. Get expert help with top universities, low tuition fees, scholarships, Admission & Visa. Start your application Now.",
    url: "https://www.studyinfinland.in/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.webp",
        width: 1200,
        height: 630,
        alt: "Study in Lithuania",
      },
    ],
  },
}

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinfinland.in/#organization",
        "name": "Study in Lithuania",
        "url": "https://www.studyinfinland.in/",
        "logo": "https://www.studyinfinland.in/images/logo/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinfinland.in/#website",
        "url": "https://www.studyinfinland.in/",
        "name": "Study in Lithuania",
        "publisher": {
          "@id": "https://www.studyinfinland.in/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinfinland.in/#webpage",
        "url": "https://www.studyinfinland.in/",
        "name":
          "Study in Lithuania for Indian Students | Admissions, Universities, Visa & Scholarships",
        "description":
          "Study in Lithuania with expert guidance for Indian students.",
        "isPartOf": {
          "@id": "https://www.studyinfinland.in/#website"
        },
        "about": {
          "@id": "https://www.studyinfinland.in/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinfinland.in/faq/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Why should Indian students study in Lithuania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Lithuania offers affordable European education and globally recognized degrees."
            }
          }
        ]
      }
    ]
  };

export default function Home() {
  return (
    <>
     <HomeClient />
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
      />
    </>
  );
}
