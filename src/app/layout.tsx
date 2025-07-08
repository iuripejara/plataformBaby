import "./globals.css";
import SidebarHeader from "./components/sidebarHeader";

import type { Metadata } from 'next' // Importar Metadata

export const metadata: Metadata = { // Tipar metadata
  title: 'Plataforma da Filha',
  description: 'Uma plataforma divertida para minha filha',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" w-full mx-auto">
        <div className="">
          <SidebarHeader/>
          {children}
        </div>
        
      </body>
    </html>
  );
}
