import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  description,
  title,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Music platform"}</title>
        <meta
          name="description"
          content={
            description ||
            "A music platform for finding music downloads or uploads."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Music, track"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
