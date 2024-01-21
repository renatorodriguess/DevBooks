import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevBooks',
  description: 'Biblioteca do programador',
  icons: {
    icon: [''], // Add the correct value for the icon
  },
};

export function Message() {
  const notify = () => toast('Notification Message');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </React.Fragment>
  );
}
