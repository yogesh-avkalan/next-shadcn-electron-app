import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles/app.scss";
import { AppProvider } from "@/context/AppContext";
import Titlebar from "@/components/titlebar";

export const metadata: Metadata = {
  title: "Shadcn Electron App",
  description: "Next js app used shadcn and electron js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppProvider>
          <div className="app">
            <Titlebar />
            <div className="main-bottom-wrapper">{children}</div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
