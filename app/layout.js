import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const ainoFont = localFont({
  src: [
    {
      path: './fonts/Aino-Headline.otf',
      weight: "400",
      style: 'normal',
    }
  ],
  variable: '--font-ainoFont',
})

export const metadata = {
  metadataBase: new URL('https://www.studyinfinland.in'),

  title:
    "Study in Finland Consultant | Expert Study Abroad Guidance",

  description:
    "Looking for a trusted Study in Finland consultant? Get expert guidance on Finnish universities, admissions, scholarships, student visas and global career opportunities.",

  keywords: [
    'Study in Finland consultant',
    'best Study in Finland consultant',
    'Study in Finland for Indian students',
    'Finland study abroad consultant',
    'Finland university admission',
    'Finland student visa guidance',
    'study abroad consultants for Finland',
    'Finland scholarships',
    'higher education in Finland',
    'study in Finland'
  ],

  alternates: {
    canonical: 'https://www.studyinfinland.in',
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${robotoMono.variable} ${ainoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Link className="fixed z-5 bottom-10 right-10 bg-green-600 p-2 rounded-full" href="https://wa.link/67ng4e" target="_blank">
           <FaWhatsapp className="size-8 text-white"/>
        </Link>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-C2KSTLP805');
        `}
      </Script>
      </body>
    </html>
  );
}
