import StudyClient from "./StudyClient";


export const metadata = {
  title: "Why Study in finland: Top Benefits for Indian Students",
  description: "Why Study in finland as an Indian student. Get low tuition fees, top degrees, and easy visa guides. Start your European career journey today. Learn more now.",
  keywords: [
      "Why Study in finland",
      "Study in finland",
      "Study in finland for Indian Students",
      "Benefits of Studying in finland",
      "finland Universities",
      "finland Education",
      "finland Study Visa",
      "Affordable Study in Europe",
      "finland Scholarships",
      "Study Abroad finland",
      "finland Admission"
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
      "Why Study in finland: Top Benefits for Indian Students",
    description:
      "Why Study in finland as an Indian student. Get low tuition fees, top degrees, and easy visa guides. Start your European career journey today. Learn more now.",
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
      "Why Study in finland: Top Benefits for Indian Students",
    description:
      "Why Study in finland as an Indian student. Get low tuition fees, top degrees, and easy visa guides. Start your European career journey today. Learn more now.",
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
          "Why Study in finland? | Universities, Courses & Benefits for Indian Students",
        "description":
          "Discover why Indian students choose to study in finland."
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
