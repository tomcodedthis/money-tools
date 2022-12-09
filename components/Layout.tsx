import Head from "next/head";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Money Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.tailwindcss.com" />
      <Script
        src="https://kit.fontawesome.com/e31209f1bd.js"
        crossOrigin="anonymous"
      />

      <Header />

      <main className="h-[calc(100vh-125px)] flex flex-col p-4 text-center text-black bg-green dark">
        {children}
      </main>

      <Footer />
    </>
  );
}
