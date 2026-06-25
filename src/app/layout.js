import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navigation'
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300"],
  variable: "--font-prompt",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "i bas shop",
  description: "ซื้อขายไอดีเกม",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar /> 
        {children}</body>
    </html>
  );
}