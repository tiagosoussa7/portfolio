import { JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

//componets
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Effect from "@/components/Effect";
import TopLeftImg from "@/components/TopLeftImg";
import BottomRightImg from "@/components/BottomRightImg";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrains-Mono",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-Neue",
});

export const metadata = {
  title: "Portfolio App",
  description: "Portfolio tiago next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${jetBrains.variable} ${bebasNeue.variable} antialiased`}
      >
        <TopLeftImg />
        <Header />
        <BottomRightImg />
        <Effect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
