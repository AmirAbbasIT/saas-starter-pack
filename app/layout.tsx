// These styles apply to every route in the application

import { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Toaster } from "react-hot-toast";
// import { Suspense } from "react";
// import Header from "@/components/header/header";
// import { ThemeProvider } from "@/components/user/layout/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* <Toaster />
        <Suspense fallback="Loading...">
          <Header />
        </Suspense> */}
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
