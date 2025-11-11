import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santums Build - Building the Future of Industry Connections",
  description: "Santums Build connects the construction and transport industries with suppliers, contractors, and technology providers. Building smarter, faster, together.",
  keywords: ["construction", "logistics", "transport", "suppliers", "contractors", "technology", "infrastructure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <PageTransition>{children}</PageTransition>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1f2e',
              color: '#fff',
              border: '1px solid rgba(255, 107, 0, 0.3)',
            },
          }}
        />
      </body>
    </html>
  );
}
