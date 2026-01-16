import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ravfitness.com.au"),

  title: "Personal Trainer in Glen Iris, Melbourne | Rav Fitness",
  description:
    "Build strength, confidence, and energy with Rav Fitness — personal training, small group training, and online coaching in Glen Iris, Melbourne. Never Break The Chain.",

  verification: {
    google: "8ro15hIj7jUEa1pA9t5696cWFPgxS8MxKowgz5T2fS8",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Personal Trainer in Glen Iris, Melbourne | Rav Fitness",
    description:
      "Build strength, confidence, and energy with Rav Fitness — personal training, small group training, and online coaching in Glen Iris, Melbourne. Never Break The Chain.",
    url: "https://www.ravfitness.com.au/",
    siteName: "Rav Fitness",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rav Fitness — Personal Trainer in Glen Iris, Melbourne",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  keywords: [
    "personal trainer glen iris",
    "personal training melbourne",
    "goodlife glen iris personal trainer",
    "strength training melbourne",
    "small group personal training",
    "online fitness coaching australia",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.ravfitness.com.au/#business",
    name: "Rav Fitness",
    url: "https://www.ravfitness.com.au/",
    telephone: "+61412197390",
    image: "https://www.ravfitness.com.au/og.jpg",
    priceRange: "$$",
    description:
      "Personal trainer in Glen Iris, Melbourne. 1-on-1 personal training, small group personal training, and online coaching to build strength, confidence, and energy.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1438 High St",
      addressLocality: "Glen Iris",
      addressRegion: "VIC",
      postalCode: "3146",
      addressCountry: "AU",
    },
    areaServed: [
      "Glen Iris",
      "Malvern",
      "Tooronga",
      "Ashburton",
      "Camberwell",
      "Melbourne",
    ],
    sameAs: [
      "https://www.instagram.com/rav_fitnesscoach/",
      "https://www.linkedin.com/in/ravinder-nain-68447b2b",
    ],
    makesOffer: [
      { "@type": "Offer", name: "1-on-1 Personal Training" },
      { "@type": "Offer", name: "Small Group Personal Training" },
      { "@type": "Offer", name: "Online Coaching" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
