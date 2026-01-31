import './globals.css';
import Footer from '@/components/layout/footer/footer';
import NavBar from '@/components/layout/navbar/navbar';

import { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
      <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}