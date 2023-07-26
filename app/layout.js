import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify clone admin",
  description: "Admin functionality for Spotify clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        ></link>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="children">{children}</div>
      </body>
    </html>
  );
}
