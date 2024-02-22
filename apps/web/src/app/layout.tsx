import { Toaster } from "@eds/components";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { AxiomWebVitals } from "next-axiom";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { LoadingBar } from "./_components/LoadingBar";
import "./globals.css";
import { AddTodoDialog } from "./_components/AddTodoDialog";
import { EditTodoDialog } from "./_components/EditTodoDialog";
import { PostHogPageview, Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Todo app",
  description: "Manage your life.",
  generator: "Next.js",
  manifest: "/site.webmanifest",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  openGraph: {
    title: "Ethereum Dapp Starter",
    description: "A strong foundation for your next unicorn project.",
    url: `https://${process.env.VERCEL_URL}`,
    siteName: "Ethereum Dapp Starter",
    locale: "en_US",
    type: "website",
    images: [],
  },
  title: {
    template: "%s | Ethereum Dapp Starter",
    default: "A strong foundation for your next unicorn project.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A strong foundation for your next unicorn project.",
    description: "A strong foundation for your next unicorn project.",
    creator: "",
    creatorId: "",
    images: [""],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <LoadingBar />
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <canvas
            id='my-canvas'
            className='absolute top-0 left-0 w-screen h-screen pointer-events-none z-10'
          /> */}
          {/* <Footer /> */}
          <Toaster />
          <AddTodoDialog />
          <EditTodoDialog />
        </Providers>
        <Analytics />
        <AxiomWebVitals />
        <Suspense>
          <PostHogPageview />
        </Suspense>
      </body>
    </html>
  );
}
