import HomeClient from "./HomeClient";

export const metadata = {
  title: "Study in Finland Consultant | Expert Study Abroad Guidance",
  description: "Looking for a trusted Study in Finland consultant? Get expert guidance on Finnish universities, admissions, scholarships, student visas and global career opportunities.",
  keywords: [
      "Study in Finland consultant",
      "best Study in Finland consultant",
      "Study in Finland for Indian students",
      "Finland study abroad consultant",
      "Finland university admission",
      "Finland student visa guidance",
      "study abroad consultants for Finland",
      "Finland scholarships",
      "higher education in Finland",
      "study in Finland"
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
      "Study in Finland Consultant | Expert Study Abroad Guidance",
    description:
      "Looking for a trusted Study in Finland consultant? Get expert guidance on Finnish universities, admissions, scholarships, student visas and global career opportunities.",
    url: "https://www.studyinfinland.in/",
    siteName: "Study in Finland",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.webp",
        width: 1200,
        height: 630,
        alt: "Study in Finland",
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
        "name": "Study in Finland",
        "url": "https://www.studyinfinland.in/",
        "logo": "https://www.studyinfinland.in/images/logo/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinfinland.in/#website",
        "url": "https://www.studyinfinland.in/",
        "name": "Study in Finland",
        "publisher": {
          "@id": "https://www.studyinfinland.in/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinfinland.in/#webpage",
        "url": "https://www.studyinfinland.in/",
        "name":
          "Study in Finland Consultant | Expert Study Abroad Guidance",
        "description":
          "Looking for a trusted Study in Finland consultant? Get expert guidance on Finnish universities, admissions, scholarships, student visas and global career opportunities.",
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
              "Why should Indian students choose Finland for higher education?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Finland is a popular study destination known for its high-quality education system, modern teaching methods and excellent research facilities. It offers internationally recognised degrees, English-taught programmes, a safe living environment and opportunities to gain international work experience."
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
