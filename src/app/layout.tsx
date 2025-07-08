import "./globals.css";
import SidebarHeader from "./components/sidebarHeader";

export const metadata = {
  title: "App da Minha Filha",
  description: "Feito com amor pelo papai ❤️",
  icons: {
    icon: "/iconsIvi.png",
  },
};

export const generateViewport = () => ({
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#ff69b4",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="w-full mx-auto">
        <div>
          <SidebarHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
