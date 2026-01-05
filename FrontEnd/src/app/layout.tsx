import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

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