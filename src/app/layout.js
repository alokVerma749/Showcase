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
        <header className='bg-teal-200 text-zinc-600 p-5 flex flex-row justify-between items-center sticky top-0 z-10  '>
          <div className="logo border border-red-500 w-52 text-center p-2">LOGO</div>
          <ul className='flex flex-row justify-around w-2/4'>
            <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/'}>Home</Link> </li>
            <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/about'}>About Us</Link> </li>
            {/* <li><Link href={'/projects'}>Projects</Link> </li> */}
            {/* <li><Link href={'/contact'}>Contact Us</Link> </li> */}
            <li className='font-normal hover:border-b-1 hover:border-b hover:animate-pulse hover:border-b-black text-base p-1 transition ease-in-out duration-700'><Link href={'/auth/login'}>Sign up</Link> </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}
