import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Kushwah | Portfolio",
  description: "AI/ML Enthusiast & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
