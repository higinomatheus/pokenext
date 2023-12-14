import { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main__container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
