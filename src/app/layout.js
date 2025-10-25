import PageTransition from '@/app/components/PageTransition';
import LenisProvider from '@/app/components/LenisProvider';
import { AppNavbar } from '@/app/components/navbar';
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "MIUX Studio | Beautiful Digital Designs Rooted in UX",
  description: "A bespoke UX-driven design studio crafting captivating digital experiences that seamlessly blend elegance and functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <LenisProvider>
          <PageTransition>
            <AppNavbar />
            {children}
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
