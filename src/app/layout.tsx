import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'uwaaa - Student Developer',
  description: '学生プログラマーのポートフォリオサイトです。',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      color: '#5bbad5',
      url: '/favicons/safari-pinned-tab.svg',
    },
  ],
  manifest: '/favicons/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
