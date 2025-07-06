import "./globals.css";
import SidebarHeader from "./components/sidebarHeader";


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
