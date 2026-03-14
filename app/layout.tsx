import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import { Analytics } from "@vercel/analytics/next"
import { SOCIAL_LINKS } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SOCIAL_LINKS.DOMAIN_URL),
  title: {
    default: 'Maulik Koli | Full Stack Developer',
    template: '%s | Maulik Koli',
  },
  description: 'Full Stack Developer from Rajkot, India. I build scalable, end-to-end web applications — from database architecture to deployment.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'Next.js Developer',
    'React Developer',
    'Node.js',
    'TypeScript',
    'Web Developer India',
    'Rajkot Developer',
    'Maulik Koli',
  ],
  authors: [{ name: 'Maulik Koli' }],
  creator: 'Maulik Koli',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SOCIAL_LINKS.DOMAIN_URL,
    title: 'Maulik Koli | Full Stack Developer',
    description: 'I build scalable, end-to-end web applications — from database architecture to deployment.',
    siteName: 'Maulik Koli Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maulik Koli | Full Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Maulik Koli | Full Stack Developer',
    description: 'I build scalable, end-to-end web applications — from database architecture to deployment.',
    images: ['/og-image.png'],
    creator: SOCIAL_LINKS.TWITTER_HANDLE,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}>
      <head />
      <body className={`font-sans antialiased text-slate bg-obsidian overflow-x-hidden`}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
