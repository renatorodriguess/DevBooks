
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevBooks',
  description: 'Biblioteca do programador',
  icons: {
    icon:['']
  }
}
export function Message(){
  const notify = () => toast("DEPLOYMENT");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
