import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Bible Project - Interactive Bible Study Platform",
  description: "An open-source, interactive Bible study platform designed to make biblical knowledge accessible and engaging through modern web technologies.",
  keywords: ["Bible", "study", "interactive", "timeline", "genealogy", "theology", "Christianity", "scripture"],
  authors: [{ name: "Bible Project Community" }],
  creator: "Bible Project",
  openGraph: {
    title: "Bible Project - Interactive Bible Study Platform",
    description: "Discover the Bible like never before with our interactive platform. Explore timelines, genealogies, and deep dive into topics with modern technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Project - Interactive Bible Study Platform",
    description: "Discover the Bible like never before with our interactive platform.",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
