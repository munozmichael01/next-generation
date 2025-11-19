import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'

const ibmPlexSans = localFont({
  src: [
    {
      path: '../public/fonts/IBMPlexSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/IBMPlexSans-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-ibmplexsans',
});

const abcGintoNord = localFont({
  src: [
    {
      path: '../public/fonts/ABCGintoNord-Medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-abcgintonord',
});

export const metadata: Metadata = {
  title: 'Turijobs - Product & Technology Highlights 2025',
  description: 'Resumen de avances clave, impacto y hoja de ruta estratégica.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${ibmPlexSans.variable} ${abcGintoNord.variable} font-sans bg-white text-carbon-900`}>
        {children}
      </body>
    </html>
  )
}
