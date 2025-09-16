import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Popup from "@/components/layout/Popup";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Medify Billing | Efficient Medical Billing for Healthcare Providers",
  description:
    "Medify Billing provides end-to-end medical billing and revenue cycle management solutions tailored for healthcare providers. Maximize collections, reduce denials, and streamline your practice with expert billing support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className + " overflow-x-hidden max-w-screen"}>
        <Navbar />
        {children}
        <Popup />
        <Footer />
      </body>
    </html>
  );
}
