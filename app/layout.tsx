import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "KN Public School - Excellence in Education",
    template: "%s | KN Public School"
  },
  description: "KN Public School (KNPS) offers quality education from kindergarten to grade 8. We focus on academic excellence, holistic development, and character building in a nurturing environment.",
  
  // Keywords for search engines
  keywords: [
    "KN Public School",
    "KNPS mathura",
    "knps mathura",
    "knps bharatpur road",
    "knps fauji dhabha",
    "school near me",
    "best school",
    "education",
    "kindergarten",
    "high school",
    "academic excellence",
    "holistic education",
    "school admission",
    "private school",
    "coaching",
    "sports school",
    "cultural activities"
  ],
  
  // Author information
  authors: [{ name: "KN Public School", url: "https://knps.vercel.app" }],
  
  // Open Graph metadata for social sharing (Facebook, LinkedIn)
  openGraph: {
    title: "KN Public School - Excellence in Education",
    description: "Join KN Public School for quality education focusing on academic excellence and holistic development.",
    url: "https://knps.vercel.app",
    siteName: "KN Public School",
    images: [
      {
        url: "https://knps.vercel.app/campus.png",
        width: 1200,
        height: 630,
        alt: "KN Public School Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "KN Public School - Excellence in Education",
    description: "Join KN Public School for quality education focusing on academic excellence and holistic development.",
    images: ["https://knps.vercel.app/campus.png"],
    creator: "@knps",
    site: "@knps",
  },
  
  // Icons and manifests
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  
  // Verification for search consoles
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   yahoo: "your-yahoo-verification-code",
  //   other: {
  //     "facebook-domain-verification": ["your-facebook-domain-verification-code"],
  //   },
  // },
  
  // Canonical URL
  alternates: {
    canonical: "https://knps.vercel.app",
    languages: {
      "en-IN": "https://knps.vercel.app",
    },
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Category
  category: "education",
  
  // Other metadata
  applicationName: "KN Public School",
  generator: "Next.js",
  publisher: "KN Public School",
  
  // Format detection
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  
  // // Apple web app
  // appleWebApp: {
  //   title: "KN Public School",
  //   statusBarStyle: "black-translucent",
  //   capable: true,
  // },
  
  // App links
  // appLinks: {
  //   android: {
  //     app_name: "KN Public School",
  //     package: "com.knps.app",
  //     url: "https://play.google.com/store/apps/details?id=com.knps.app",
  //   },
  //   iphone: {
  //     app_name: "KN Public School",
  //     app_store_id: "your-app-store-id",
  //     url: "https://apps.apple.com/app/idyour-app-store-id",
  //   },
  // },
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B2A4A" }, // royal-950
    { media: "(prefers-color-scheme: dark)", color: "#0B2A4A" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for organization (JSON-LD)
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "KN Public School",
    alternateName: "KNPS",
    url: "https://knps.vercel.app",
    logo: "https://knps.vercel.app/logo.png",
    image: "https://knps.vercel.app/campus.png",
    description: "KN Public School offers quality education from kindergarten to grade 8 with focus on academic excellence and holistic development.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Fauji Restaurant, Dhannapur Bharatur Road",
      addressLocality: "Mathura",
      addressRegion: "Uttar Pradesh",
      postalCode: "281004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "77.655257",
      longitude: "27.443849",
    },
    telephone: "+91 8077640656",
    email: "knps.work@gmail.com",
    sameAs: [
      "https://www.facebook.com/knpublicschool",
      // "https://www.twitter.com/knps",
      "https://www.instagram.com/knpublicschool",
      // "https://www.linkedin.com/school/kn-public-school",
    ],
    foundingDate: "2023",
    foundingLocation: "Mathura",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Kindergarten",
            description: "Early childhood education program",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Elementary School",
            description: "Grades 1-5",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Middle School",
            description: "Grades 6-8",
          },
        },
        // {
        //   "@type": "Offer",
        //   itemOffered: {
        //     "@type": "EducationalOccupationalProgram",
        //     name: "High School",
        //     description: "Grades -12",
        //   },
        // },
      ],
    },
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://knps.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://knps.vercel.app/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Admissions",
        item: "https://knps.vercel.app/#admissions",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
        
        {/* Canonical URL tag */}
        <link rel="canonical" href="https://knps.vercel.app" />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="en-in" href="https://knps.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://knps.vercel.app" />
        
        {/* Favicon for various platforms */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0B2A4A" />
        
        {/* Windows Tile */}
        <meta name="msapplication-TileColor" content="#0B2A4A" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Mobile App Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="KNPS" />
        <meta name="application-name" content="KNPS" />
        
        {/* Rating (for family-friendly content) */}
        <meta name="rating" content="General" />
        
        {/* Referrer policy */}
        <meta name="referrer" content="origin-when-cross-origin" />
      </head>
      <body
        className={`${roboto.className} bg-slate-50 text-slate-900 antialiased selection:bg-gold-500 selection:text-white`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-royal-950 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Google Analytics / Tag Manager (optional) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA-MEASUREMENT-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA-MEASUREMENT-ID');
          `}
        </Script>

        <Navbar />
        
        <main id="main-content">
          {children}
        </main>
        
        <WhatsAppButton
          phoneNumber="+91 8077640656"
          message="Hi, I'm interested in admission at KN Public School. Please share more details."
          position="bottom-right"
          showPopup={true}
        />
        
        <Footer />
      </body>
    </html>
  );
}