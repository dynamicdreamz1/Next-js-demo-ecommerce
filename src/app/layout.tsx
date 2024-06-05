import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHeaderData, getFooterData } from "../service/index";

export const metadata: Metadata = {
  title: "Bliss",
  description: "Wordpress demo",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerItems = await getHeaderData();
  const footerItems = await getFooterData();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body>
        <div>
          <Navbar headerItems={headerItems} />
          {children}
          <Footer footerItems={footerItems} />
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
