import { Analytics } from '@vercel/analytics/react';
import SEO from '@/components/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://viewme-us.com'),
  title: 'ViewMe-US - Sri Lanka Travel Guide',
  description: 'Discover Sri Lanka\'s hidden gems with ViewMe-US. Your trusted partner for authentic travel experiences.',
  keywords: ['Sri Lanka travel', 'tourism', 'destinations', 'tours', 'authentic experiences'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "ViewMe-US",
              "url": "https://viewme-us.com",
              "description": "Your trusted partner for authentic travel experiences in Sri Lanka"
            })
          }}
        />
      </body>
    </html>
  );
}