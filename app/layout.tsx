import "./globals.css";
import type { Metadata, Viewport } from "next";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Hilltain Group - Engineering Digital Infrastructure",
  description:
    "Premium BIM, IT services, AI systems, and digital transformation solutions for modern businesses and infrastructure systems.",
  keywords: [
    "BIM",
    "AI",
    "digital transformation",
    "software engineering",
    "IT services",
    "Hilltain Group",
  ],

  openGraph: {
    title: "Hilltain Group - Engineering Digital Infrastructure",
    description:
      "Premium BIM, IT services, AI systems, and digital transformation solutions",
    url: "https://hilltaingroup.com",
    siteName: "Hilltain Group",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hilltain Group",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hilltain Group - Engineering Digital Infrastructure",
    description:
      "Premium BIM, IT services, AI systems, and digital transformation solutions",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
        lang="en"
        className="scroll-smooth"
        suppressHydrationWarning
        >
      <body className="bg-[#050816] text-white overflow-x-hidden">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}