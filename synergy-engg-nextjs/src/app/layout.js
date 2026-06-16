import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/layout/MainLayout";
import SmoothScroll from "../components/motion/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Synergy Engineering | Megger & MTE Authorized Distributor | Thane",
  description: "NABL accredited electrical testing equipment supplier in Maharashtra. Authorized channel partner for Megger, MTE, Greenlee & TE Connectivity. Insulation testers, motor winding analyzers, cable fault locators. RFQ in 2 hours.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-body text-on-background">
        <SmoothScroll>
          <MainLayout>{children}</MainLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}
