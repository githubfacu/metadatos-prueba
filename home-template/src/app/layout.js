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
  openGraph: {
    title: "Caballos en Libertad - Protección, cuidado y rescate de equinos",
    description: "Caballos en libertad nace hace más de 10 años como una Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Logo descripción de la asociación",
      },
    ],
    type: "website",
    siteName: "CaballosEnLibertad",
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