import LivingClient from "./LivingClient";


export const metadata = {
  title: "Living in Finland: Lifestyle, Cost of Living & Student Life",
  description: "Discover what living in Finland is like for international students. Explore the cost of living, accommodation, lifestyle, culture, healthcare, transport and student life.",
  keywords: [
      "living in Finland",
      "life in Finland",
      "cost of living in Finland",
      "student life in Finland",
      "lifestyle in Finland",
      "living in Finland for Indian students",
      "accommodation in Finland",
      "Finland student lifestyle",
      "Finland culture",
      "healthcare in Finland",
      "transportation in Finland",
      "international students in Finland"
  ],
  alternates: {
    canonical: "https://www.studyinlithuania.in/living/"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    title:
      "Living in Finland: Lifestyle, Cost of Living & Student Life",
    description:
      "Discover what living in Finland is like for international students. Explore the cost of living, accommodation, lifestyle, culture, healthcare, transport and student life.",
    url: "https://www.studyinlithuania.in/living/",
    siteName: "Study in Lithuania",
    images: [
      {
        url: "https://www.studyinlithuania.in/images/living/living.webp",
        width: 1200,
        height: 630,
        alt: "Living in Lithuania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Living in Finland: Lifestyle, Cost of Living & Student Life",
    description:
      "Discover what living in Finland is like for international students. Explore the cost of living, accommodation, lifestyle, culture, healthcare, transport and student life.",
    images: [
      "https://www.studyinlithuania.in/images/living/living.webp",
    ],
  },
}

 const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlithuania.in/contact",
        "name": "Study in Lithuania",
        "url": "https://www.studyinlithuania.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinlithuania.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlithuania.in/living/",
        "url": "https://www.studyinlithuania.in/living/",
        "name":
          "Living in Finland: Lifestyle, Cost of Living & Student Life",
        "description":
          "Discover what living in Finland is like for international students. Explore the cost of living, accommodation, lifestyle, culture, healthcare, transport and student life.",
        "isPartOf": {
          "@id": "https://www.studyinlithuania.in/"
        }
      },
          {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.studyinlithuania.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "living",
          item: "https://www.studyinlithuania.in/living/",
        },
      ],
    },
    ]
  };

export default function Home() {
  return (
    <>
     <LivingClient />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
