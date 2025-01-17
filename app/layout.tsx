import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

export const metadata: Metadata = {
  title: "Stenox RAG asiistant",
  description: "aios fpr stenox",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
