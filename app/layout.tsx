import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://afrithsulthan.vercel.app'

const seoKeywords = [
  "web developer",
  "web development company",
  "website development",
  "custom website development",
  "ecommerce development",
  "ecommerce website development",
  "ecommerce development company",
  "custom ecommerce development",
  "CRM development",
  "CRM software development",
  "CRM development company",
  "custom CRM software",
  "ERP development",
  "ERP software development",
  "ERP development company",
  "custom ERP software",
  "custom software development",
  "custom software development company",
  "software development company",
  "business software development",
  "business management software",
  "custom business software",
  "web application development",
  "web application development company",
  "custom web application development",
  "web app developer",
  "SaaS development",
  "SaaS development company",
  "SaaS product development",
  "custom SaaS development",
  "SaaS MVP development",
  "MVP development",
  "MVP development company",
  "startup software development",
  "startup web development",
  "business automation software",
  "business automation development",
  "inventory management software development",
  "inventory management system development",
  "billing software development",
  "employee management software development",
  "sales management software development",
  "customer management software development",
  "order management system development",
  "admin dashboard development",
  "custom dashboard development",
  "API development",
  "full stack developer",
  "full stack web development",
  "React developer",
  "Django developer",
  "Python developer",
  "custom software solutions",
  "digital product development",
  "product development company",
  "software solutions for small business",
  "custom software for small business",
  "custom CRM for small business",
  "ecommerce solutions for small business",
  "business application development"
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Afrith Sulthan - Custom Web & Software Development | Full Stack Developer',
    template: '%s | Afrith Sulthan'
  },
  description: 'Full stack developer & custom software development specialist building high-performance web applications, SaaS MVPs, custom CRM/ERP systems, eCommerce platforms, and business automation software for startups and small businesses.',
  keywords: seoKeywords,
  authors: [{ name: 'Afrith Sulthan', url: siteUrl }],
  creator: 'Afrith Sulthan',
  publisher: 'Afrith Sulthan',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Afrith Sulthan - Custom Web & Software Development | Full Stack Developer',
    description: 'High-performance web applications, SaaS MVPs, custom CRM/ERP systems, eCommerce platforms, and business automation solutions engineered for real growth.',
    url: siteUrl,
    siteName: 'Afrith Sulthan Portfolio',
    images: [
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        width: 800,
        height: 600,
        alt: 'Afrith Sulthan - Full Stack Developer & Custom Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afrith Sulthan - Custom Web & Software Development',
    description: 'Custom web application development, SaaS MVP development, CRM/ERP systems, and business automation software.',
    images: ['/images/img-removebg-preview-20-281-29.png'],
  },
  icons: {
    icon: [
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        type: 'image/png',
      },
    ],
    apple: '/images/img-removebg-preview-20-281-29.png',
  },
}

import { CartProvider } from '@/lib/cart-store'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased text-slate-900`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Afrith Sulthan',
                url: siteUrl,
                image: `${siteUrl}/images/img-removebg-preview-20-281-29.png`,
                sameAs: [
                  'https://github.com/AAFRITHSULTHAN',
                  'https://www.linkedin.com/in/afrith-sulthan-544aab28b',
                  'mailto:afrithsulthan007@gmail.com'
                ],
                jobTitle: 'Full Stack Web Developer & Custom Software Engineer',
                knowsAbout: seoKeywords,
                worksFor: {
                  '@type': 'Organization',
                  name: 'Freelance & Custom Software Solutions'
                },
                description: 'Full stack web developer and software consultant building custom web applications, SaaS MVPs, CRM/ERP solutions, and business automation systems.'
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Afrith Sulthan - Custom Web & Software Development',
                url: siteUrl,
                image: `${siteUrl}/images/img-removebg-preview-20-281-29.png`,
                description: 'Full stack development company providing custom website development, SaaS product development, custom CRM/ERP software, eCommerce development, and business automation solutions.',
                areaServed: 'Worldwide',
                serviceType: [
                  'Custom Web Application Development',
                  'SaaS MVP Development',
                  'Custom CRM Software Development',
                  'Custom ERP Software Development',
                  'Custom eCommerce Development',
                  'Business Automation Software Development',
                  'API & Admin Dashboard Development',
                  'Inventory & Billing Software Development'
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Software Development Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Custom Web & SaaS Development',
                        description: 'End-to-end full stack web application development and SaaS MVP development using React, Next.js, Python, and Django.'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Custom CRM & ERP Software Development',
                        description: 'Custom business management software, inventory management, billing, employee management, and sales management systems.'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Business Automation & API Development',
                        description: 'Custom workflow automation, n8n integrations, CRM synchronization, and REST/GraphQL API development.'
                      }
                    }
                  ]
                }
              }
            ]),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ET9R63R2QE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ET9R63R2QE');
          `}
        </Script>
      </body>
    </html>
  )
}
