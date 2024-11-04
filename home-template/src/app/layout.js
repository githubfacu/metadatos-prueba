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
  description: "Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos.",
  openGraph: {
    title: "Caballos en Libertad",
    description: "Protección, cuidado y rescate de equinos.",
    url: "caballosenlibertad.org",
    images: [
      {
        url: "https://metadatos-prueba.vercel.app/svg/Group-hands-heart.svg",
        width: 1200,
        height: 630,
        alt: "Logo descripción de la asociación",
      },
    ],
    type: "website",
    siteName: "Caballosenlibertad",
  },
  twitter: {
    card: "summary",
    title: "Caballos en Libertad",
    description: "Protección, cuidado y rescate de equinos.",
    images: "https://metadatos-prueba.vercel.app/svg/Group-hands-heart.svg",
    site: "CaballosEnLibertad",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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