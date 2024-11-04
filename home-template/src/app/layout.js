import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    template: '%s | Caballos en Libertad',
    default: "Caballos en Libertad",
  },
  description: "Protección, cuidado y rescate de equinos.",
  twitter: {
    card: "summary",
    title: "Caballos en Libertad",
    description: "Protección, cuidado y rescate de equinos.",
    images: "https://metadatos-prueba.vercel.app/globe.svg",
    site: "CaballosEnLibertad",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}