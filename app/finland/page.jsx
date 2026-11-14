import FinlandClient from "./FinlandClient";

export const metadata = {
  title: "Study in Finland for Indian Students | Benefits & Career",
  description: "Explore the benefits of studying in Finland for Indian students. Discover top universities, quality education, affordable living, scholarships and global career opportunities.",
  keywords: [
    "study in Finland",
    "study in Finland for Indian students",
    "Finland universities",
    "benefits of studying in Finland",
    "Finland education system",
    "study abroad in Finland",
    "higher education in Finland",
    "Finland student visa",
    "Finland scholarships for Indian students",
    "cost of studying in Finland",
    "top universities in Finland",
    "study in Finland consultants",
    "international students in Finland",
    "career opportunities in Finland"
  ],
  alternates: {
    canonical: "https://www.studyinfinland.in/finland"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Study in Finland for Indian Students | Benefits & Career",
    description:
      "Explore the benefits of studying in Finland for Indian students. Discover top universities, quality education, affordable living, scholarships and global career opportunities.",
    url: "https://www.studyinfinland.in/finland/",
    siteName: "Study in Finland",
    images: [
      {
        url: "https://www.studyinfinland.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Finland",
      },
    ]
   },
  twitter: {
    card: "summary_large_image",
    title:
      "Study in Finland for Indian Students | Benefits & Career",
    description:
      "Explore the benefits of studying in Finland for Indian students. Discover top universities, quality education, affordable living, scholarships and global career opportunities.",
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
        "name": "Study in Finland",
        "url": "https://www.studyinfinland.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinfinland.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinfinland.in/finland/#webpage",
        "url": "https://www.studyinfinland.in/finland/",
        "name":
          "Study in Finland for Indian Students | Benefits & Career",
        "description":
          "Explore the benefits of studying in Finland for Indian students. Discover top universities, quality education, affordable living, scholarships and global career opportunities."
      },
            {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinfinland.in/finland/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.studyinfinland.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Finland",
            item: "https://www.studyinfinland.in/finland",
          },
        ],
      },
    ]
  };


  return (
    <>
     <FinlandClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
