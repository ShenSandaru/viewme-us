import { Analytics } from '@vercel/analytics/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://viewme-us.com'),
  title: 'ViewMe-US - Sri Lanka Travel Guide',
  description: 'Discover Sri Lanka\'s hidden gems with ViewMe-US. Your trusted partner for authentic travel experiences.',
  keywords: ['Sri Lanka travel', 'tourism', 'destinations', 'tours', 'authentic experiences'],
  openGraph: {
    title: 'ViewMe-US - Sri Lanka Travel Guide',
    description: 'Your trusted partner for authentic travel experiences in Sri Lanka',
    url: 'https://viewme-us.com',
    siteName: 'ViewMe-US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ViewMe-US Sri Lanka Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "ViewMe-US",
              "url": "https://viewme-us.com",
              "description": "Your trusted partner for authentic travel experiences in Sri Lanka",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Sri Lanka"
              },
              "sameAs": [
                "https://web.facebook.com/shen.rathnayaka.3",
                "https://www.instagram.com/shen_sandaru/",
                "https://www.linkedin.com/in/shen-rathnayaka-a9629526a/",
                "https://github.com/ShenSandaru"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}