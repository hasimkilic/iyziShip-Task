import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'İyzi Task',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} h-screen w-full bg-[#F3F6F9]`}>
        {children}
      </body>
    </html>
  )
}
