import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthProviderWrapper from './AuthProviderWrapper';

import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: 'Tech Shack',
  description: 'Your Digital Solutions Expert',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <AuthProviderWrapper>
          {children}
        </AuthProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}




