import "./globals.css";
import SidebarHeader from "./components/sidebarHeader";

export const metadata = {
  title: "App da Minha Filha",
  description: "Feito com amor pelo papai ❤️",
  themeColor: "#ff69b4",
  icons: {
    icon: "/iconsIvi.png",
  },
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
