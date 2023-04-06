import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';

import './globals.css'

export const metadata = {
  title: 'Airbnb Clone',
  description: 'This airbnb clone is generated by create next app',
}

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
