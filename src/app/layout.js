import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

export const metadata = {
  title: 'Alok Verma',
  description: 'Alok Verma portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='border border-1 border-black m-1 p-5'>
          <ul className='flex flex-row justify-around'>
            <li><Link href={'/'}>Home</Link> </li>
            <li><Link href={'/about'}>About Me</Link> </li>
            <li><Link href={'/projects'}>Projects</Link> </li>
            <li><Link href={'/contact'}>Contact Me</Link> </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}
