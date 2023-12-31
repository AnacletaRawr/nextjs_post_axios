import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Cohorte 5</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
