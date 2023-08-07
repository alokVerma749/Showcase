'use client'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from './components/Header'

import { Provider } from 'react-redux'
import store from '@/utils/store'

export const metadata = {
  title: 'Alok Verma',
  description: 'Alok Verma portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
