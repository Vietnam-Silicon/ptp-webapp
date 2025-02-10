import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";

import Header from 'components/header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PTP - Portable Traceability Platform",
  description: "PTP - Portable Traceability Platform",
};

interface LayoutProps {
  children: React.ReactNode;
};

const RootLayout = async ({
  children,
}: Readonly<LayoutProps>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider
          locale="en"
          messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
